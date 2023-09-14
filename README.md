# loadtest 壓測 api 工具

## Install

```
cd loadtest
npm ci
```

## Usage

* config.json 透過 `apiDomain` 指定 api 共用的 Domain 及 path

```json
{
    "apiDomain": "https://example.penguin/api"
}
```

* 先使用 `loadtest()` 來指定要壓測的目標

```javascript
const loadtest = require("../lib/loadtest");

const login = loadtest({ url: '/core/login', method: 'POST', failResult: { result: false }, succResult: 'result' })
const getAnnList = loadtest({ url: '/core/announcement' })
const getFaqDetail = loadtest({ url: '/kb/faq/:fq_sid' })
```

* `loadtest()` 可填入的參數

| KEY         | TYPE                 | DESCRIPTION                                                                       |
| :---        | :---:                | :---                                                                              |
| url         | string               | api router 去除 `apiDomain` 後所剩餘的路徑，動態指定的部分可以用 : 來標記，`/:fq_sid/`|
| method      | string               | `GET`、`POST`、`PATCH`、`DELETE`、`PUT`                                            |
| repeat      | int                  | 執行 `repeat` 次數後會計算平均回傳時間，可使用指令 -c [number] 來指定                 |
| maxRequests | int                  | 最大可發出的 request 次數，可使用指令 -n [number] 來指定                              |
| runTime     | int                  | 多少毫秒內還會發 request，可使用指令 -t [number] 來指定                               |
| customAPI   | string               | 替換 apiDomain                                                                     |
| failResult  | string or object     | 若此值和 response.body 的某個值相同時，就判斷為失敗 (選填)                             |
| succResult  | string or object     | response.body 必須要有此值才算成功                                                   |
| apiName     | string               | 使用 record.exportReport() 匯出報告時會顯示的名稱                                    |

* 使用 `.test(option, cookie, urlSetting)` 發出 request
* 或使用 `.run(option, cookie, urlSetting)` 搭配 `-c`、`-n`、`-t` 指令來限制 requests
* 參數定義如下

| KEY         | TYPE     | DESCRIPTION                                                             |
| :---        | :---:    | :---                                                                    |
| option      | object   | 同 fetch 所使用的 option                                                 |
| cookie      | string   | request 所帶的 cookie，此值為空時則會取得 response 的 set-cookie           |
| urlSetting  | object   | key 會去尋找 url 裡 :key 取代為 value，若找不到 :key 則會變成 query string  |

```javascript
login
  .test({
    body: {
        account: 'my_account',
        ao_sid: 'my_ao_sid',
        password: 'my_password'
    }
  })
  .then(({ res, res_time }) => {
     return getFaqDetail.test({}, login.cookie, { fq_sid: 100 })
  })
  .then(({ res, res_time }) => {
     console.log(res_time)
  })
```

* 上傳檔案僅接受 form-body 上傳，設定檔案路徑即可上傳

```javascript
upload.setUploadFilePath = './penguin.png'
upload
  .test({})
  .then(({ res, res_time }) => {
     console.log(res_time)
  })
```

* 新宣告的變數 `login`、`getFaqDetail` 每次執行 `.test()` 後都會記錄以下結果

| KEY                | TYPE     | DESCRIPTION                                                                  |
| :---               | :---:    | :---                                                                         |
| total_time         | int      | 每次回傳時間的加總值                                                           |
| fastest_time       | int      | 最快的回傳的時間                                                               |
| slowest_time       | int      | 最慢的回傳的時間                                                               |
| avg_time           | int      | 回傳時間的平均值                                                               |
| time_list          | array    | 把所有 api 回傳的時間用陣列紀錄                                                 |
| resIdx             | int      | 這支 api 收到了幾次 response                                                   |
| cookie             | string   | api 回傳的 set-cookie                                                          |
| error              | object   | 會記錄失敗時的 status code，若是 `failResult` 或 `succResult` 所發生的失敗則為 -1 |

## Record

* 將 `loadtest()` 放入 Record 的參數中，則可以在報告中看到 api 測試結果

```javascript
const loadtest = require("../lib/loadtest");
const record = require('../lib/record')

const login = loadtest({ url: '/core/login', method: 'POST', failResult: { result: false }, succResult: 'result', apiName: 'login' })
const getAnnList = loadtest({ url: '/core/announcement', failResult: { result: false }, succResult: 'result', apiName: 'getAnnList' })

const apisRecord = record(login, getAnnList)
```

* Record 可設定的參數

| KEY                | DESCRIPTION                         |
| :---               | :---                                |
| setFilename        | 指定 json 報告名稱                   |
| setPath            | 指定 json 報告寫入路徑               |
| addApi             | 可增加 api 至 json 報告中            |

```javascript
apisRecord.setFilename = 'test'
apisRecord.setPath = './'
apisRecord.addApi = getFaqDetail
```

* Record 提供了以下幾個方法

| KEY                          | DESCRIPTION                                                                         |
| :---                         | :---                                                                                |
| init(key)                    | 將 key 時間歸零，設定的 key 可以透過 `addTime()` 持續累加時間，直到 `finish()`          |
| addTime(key, res_time)       | 將 response 時間紀錄在 key 組別裡                                                     |
| finish(key, res_time)        | 將 response 時間紀錄在 key 組別裡後結算，當 finish 執行次數與指定重複次數相同時會匯出報告 |
| exportReport                 | 匯出 json 報告，modeList 為報告類型 [test, test_row]，選填，預設為 `[3, 2]`             |

* modeList 類型

| KEY         | DESCRIPTION                                                                                                  |
| :---        | :---                                                                                                         |
| 1           | { api, resIdx, fastest_slowest_diff_start_time, fastest_time, slowest_time, avg_time, std_time, ,error }     |
| 2           | { api, resIdx, start_time_list, time_list, error_list}                                                       |
| 3           | { api, resIdx, avg_time, slowest_time, fastest_time, std_time, error, fastest_slowest_diff_start_time }      |
| 4           | { api, resIdx, slowest_time, avg_time, error, fastest_slowest_diff_start_time }                              |
| 5           | { fastest_time, slowest_time, avg_time, error }                                                              |

```javascript
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
        return getAnnList.test({}, cookie)
    })
    .then(({ res_time, res }) => {
        resultIdx++
        apisRecord.finish(i, res_time)
    })
    .catch(error => {
        console.log('test_error', error)
    })
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
  "api": "GET /core/announcement",
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
  "api": "GET /core/announcement",
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
