# loadtest 壓測 api 工具

## Install

```
cd loadtest
npm ci
```

## Usage

* config.json 透過 `apiDomain` 指定 api 的來源

```json
{
    "apiDomain": "https://example.penguin/api"
}
```

* 先使用 `loadtest()` 來指定要壓測的目標

```javascript
const loadtest = require("../lib/loadtest");

const repeat = 5
const login = loadtest({ url: '/core/login', method: 'POST', repeat, failResult: { result: false }, succResult: 'result' })
const getAnnList = loadtest({ url: '/core/announcement?enable_state=1&is_read=-1', repeat })
```

* `loadtest()` 可填入的參數

| KEY         | TYPE                 | DESCRIPTION                                             |
| :---        | :---:                | :---                                                    |
| url         | string               | api router 去除 `apiDomain` 後所剩餘的路徑               |
| method      | string               | `GET`、`POST`、`PATCH`、`DELETE`、`PUT`                  |
| repeat      | int                  | 執行 `repeat` 次數後會計算平均回傳時間                    |
| customAPI   | string               | 替換 apiDomain                                           |
| failResult  | string or object     | 若此值和 response.body 的某個值相同時，就判斷為錯誤 (選填) |
| succResult  | string or object     | response.body 必須要有此值才會成功                        |
| apiName     | string               | 使用 record.exportReport() 匯出報告時會顯示的名稱         |

* 再使用 `.test()` 發出 request，可用參數如下

| KEY         | TYPE     | DESCRIPTION                                                    |
| :---        | :---:    | :---                                                           |
| option      | object   | 同 fetch 所使用的 option                                        |
| cookie      | string   | request 所帶的 cookie，此值為空時則會取得 response 的 set-cookie |
| urlSetting  | object   | key 會去尋找 url 裡 :key 取代為 value                           |

```javascript
login.test({
    body: {
        account: 'my_account',
        ao_sid: 'my_ao_sid',
        password: 'my_password'
    }
})
```

* 新宣告的變數 `login`、`getAnnList` 每次執行 `.test()` 後都會記錄以下結果

| KEY                | TYPE     | DESCRIPTION                                |
| :---               | :---:    | :---                                       |
| total_time         | int      | 每次回傳時間的加總值                        |
| fastest_time       | int      | 最快的回傳的時間                            |
| slowest_time       | int      | 最慢的回傳的時間                            |
| avg_time           | int      | 回傳時間的平均值                            |
| time_list          | array    | 把所有 api 回傳的時間用陣列紀錄              |
| resIdx             | int      | 這支 api 已經進行了幾次                      |
| cookie             | string   | api 回傳的 set-cookie                       |

## Example

```javascript
const loadtest = require("../lib/loadtest");
const fs = require('fs');

const repeat = 1

const login = loadtest({ url: '/core/login', method: 'POST', repeat })
const getAnnList = loadtest({ url: '/core/announcement?enable_state=1&is_read=-1', repeat })

const total_res_time_list = [] // 陣列紀錄所有下面一系列 api 分別總回傳時間
let fastest_total_res_time = 0 // 下面一系列 api 總回傳時間最快的
let slowest_total_res_time = 0 // 下面一系列 api 總回傳時間最慢的

for (let i = 1; i <= repeat; i++) {
    let total_res_time = 0 // 下面一系列 api 總回傳時間
    login
        .test({
            body: {
                account: ``,
                ao_sid: '',
                password: ''
            },
        })
        .then((res_time) => {
            total_res_time = total_res_time + res_time
            return getAnnList.test({
                headers: {
                    page: i,
                }
            }, login.cookie)
        })
        .then((res_time) => {
            total_res_time = total_res_time + res_time
            total_res_time_list.push(total_res_time)

            fastest_total_res_time = total_res_time < fastest_total_res_time || !fastest_total_res_time ? total_res_time : fastest_total_res_time
            slowest_total_res_time = total_res_time > slowest_total_res_time ? total_res_time : slowest_total_res_time

            if (total_res_time_list.length === repeat) {
                const avg_total_res_time = total_res_time_list.reduce((acc, time) => acc + time, 0) / repeat
                try {
                    fs.writeFileSync('../test.json', JSON.stringify({
                        login: { ...login, time_list: [], error_list: [] },
                        getAnnList: { ...getAnnList, time_list: [], error_list: [] },
                        fastest_total_res_time,
                        slowest_total_res_time,
                        avg_total_res_time,
                    }, null, "\t"));
                } catch (err) {
                    console.error(err);
                }

                try {
                    fs.writeFileSync('../test_row.json', JSON.stringify({
                        login: {
                            time_list: login.time_list,
                            error_list: login.error_list,
                        },
                        getAnnList: {
                            time_list: getAnnList.time_list,
                            error_list: getAnnList.error_list,
                        },
                        total_res_time_list,
                    }, null, "\t"));
                } catch (err) {
                    console.error(err);
                }
            }
        })
        .catch(error => {

        })
}
```

## Record

* 將 `loadtest()` 放入 Record 的參數中，則可以在報告中看到 api 測試結果

```javascript
const loadtest = require("../lib/loadtest");
const record = require('../lib/record')

const login = loadtest({ url: '/core/login', method: 'POST', repeat, failResult: { result: false }, succResult: 'result', apiName: 'login' })
const getAnnList = loadtest({ url: '/core/announcement?enable_state=1&is_read=-1', repeat, failResult: { result: false }, succResult: 'result', apiName: 'getAnnList' })

const apisRecord = record(login, getAnnList)
```

* init(key) 初始化 key 的時間為 0
* addTime(key, res_time) 把時間紀錄在  key 裡做統計
* finish(key, res_time) 所有要測試的 api 結束時結算時間
* exportReport(modeList) 匯出報告，modeList 為報告類型，選填，預設為 `[3, 2]`
  * mode=1, 為 api response 計算過後的時間
  * mode=2, 為 api response 原始值時間陣列
  * mode=3, 為 api response 計算過後的時間精簡項目

```javascript
let resultIdx = 0

for (let i = 1; i <= repeat; i++) {
    let cookie = ''
    apisRecord.init(i)
    login
        .test({
            body: {
                account: ``,
                ao_sid: '',
                password: ''
            },
        })
        .then(({ res_time, res }) => {
            apisRecord.addTime(i, res_time)
            cookie = login.cookie
            return getAnnList.test({
                headers: {
                    page: i,
                }
            }, cookie)
        })
        .then(({ res_time, res }) => {
            resultIdx++
            apisRecord.finish(i, res_time)
            if (resultIdx === repeat) {
                apisRecord.exportReport()
            }
        })
        .catch(error => {
            console.log('test_error', error)
        })
}
```

## Result

* test.json

```json
{
	"login": {
		"api": "POST /core/login",
		"resIdx": 4,
		"avg_time": 92,
		"slowest_time": 98,
		"fastest_time": 89,
		"std_time": 3,
		"error": {},
		"fastest_slowest_diff_start_time": 5
	},
	"getAnnList": {
		"api": "GET /core/announcement?enable_state=1&is_read=-1",
		"resIdx": 4,
		"avg_time": 2203,
		"slowest_time": 2293,
		"fastest_time": 2107,
		"std_time": 86,
		"error": {},
		"fastest_slowest_diff_start_time": 4
	},
	"std_total_res_time": 86,
	"fastest_total_res_time": 2198,
	"slowest_total_res_time": 2382,
	"avg_total_res_time": 2296
}
```

* test_row.json
```json
{
	"login": {
		"api": "POST /core/login",
		"resIdx": 4,
		"start_time_list": [
			1690429640179,
			1690429640184,
			1690429640184,
			1690429640184
		],
		"time_list": [
			89,
			91,
			92,
			98
		],
		"error_list": []
	},
	"getAnnList": {
		"api": "GET /core/announcement?enable_state=1&is_read=-1",
		"resIdx": 4,
		"start_time_list": [
			1690429640273,
			1690429640275,
			1690429640276,
			1690429640277
		],
		"time_list": [
			2107,
			2158,
			2257,
			2293
		],
		"error_list": []
	},
	"total_res_time_list": [
		2198,
		2250,
		2355,
		2382
	]
}
```