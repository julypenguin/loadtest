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

* 再使用 `.test()` 發出 request，可用參數如下

| KEY         | TYPE     | DESCRIPTION                                                    |
| :---        | :---:    | :---                                                           |
| option      | object   | 同 fetch 所使用的 option                                        |
| cookie      | string   | request 所帶的 cookie，此值為空時則會取得 response 的 set-cookie |

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

## Result
* test.json
```json
{
	"login": {
		"total_time": 207,
		"fastest_time": 44,
		"slowest_time": 71,
		"avg_time": 51.75,
		"time_list": [],
		"error": {},
		"error_list": [],
		"resIdx": 4,
		"cookie": "ASP.NET_SessionId=bfvu5udix0fr5s23uxxbplw4;passportcode=;ASP.NET_SessionId=zq5abbovnnoeoqkfudmsaqrw"
	},
	"getAnnList": {
		"total_time": 0,
		"fastest_time": 0,
		"slowest_time": 0,
		"avg_time": 0,
		"time_list": [],
		"error": {
			"401": 4
		},
		"error_list": [],
		"resIdx": 4,
		"cookie": ""
	},
	"fastest_total_res_time": 0,
	"slowest_total_res_time": 0,
	"avg_total_res_time": 0
}
```

* test_row.json
```json
{
	"login": {
		"time_list": [
			71,
			44,
			45,
			47
		],
		"error_list": []
	},
	"getAnnList": {
		"time_list": [],
		"error_list": [
			{
				"res_time": 20,
				"statusCode": 401,
				"content": "{\"code\":2,\"result\":false,\"errmsg\":\"passportcode is null.\",\"data\":{\"sso\":{\"mode\":\"0\",\"redirect\":\"\"}}}"
			},
			{
				"res_time": 28,
				"statusCode": 401,
				"content": "{\"code\":2,\"result\":false,\"errmsg\":\"passportcode is null.\",\"data\":{\"sso\":{\"mode\":\"0\",\"redirect\":\"\"}}}"
			},
			{
				"res_time": 28,
				"statusCode": 401,
				"content": "{\"code\":2,\"result\":false,\"errmsg\":\"passportcode is null.\",\"data\":{\"sso\":{\"mode\":\"0\",\"redirect\":\"\"}}}"
			},
			{
				"res_time": 28,
				"statusCode": 401,
				"content": "{\"code\":2,\"result\":false,\"errmsg\":\"passportcode is null.\",\"data\":{\"sso\":{\"mode\":\"0\",\"redirect\":\"\"}}}"
			}
		]
	},
	"total_res_time_list": []
}
```