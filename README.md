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
const loadtest = require("./loadtest");

const repeat = 5
const login = loadtest({ url: '/core/login', method: 'POST', repeat })
const getAnnList = loadtest({ url: '/core/announcement?enable_state=1&is_read=-1', repeat })
```

* `loadtest()` 可填入的參數

| KEY         | TYPE     | DESCRIPTION                                      |
| :---        | :---:    | :---                                             |
| url         | string   | api router 去除 `apiDomain` 後所剩餘的路徑        |
| method      | string   | `GET`、`POST`、`PATCH`、`DELETE`、`PUT`           |
| repeat      | int      | 執行 `repeat` 次數後會計算平均回傳時間             |

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
const loadtest = require("./loadtest");
const { exec } = require("child_process");

const repeat = 5

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
            }
        })
        .then((res_time) => {
            total_res_time = total_res_time + res_time
            return getAnnList.test({ page: i }, login.cookie)
        })
        .then((res_time) => {
            total_res_time = total_res_time + res_time
            total_res_time_list.push(total_res_time)

            fastest_total_res_time = total_res_time < fastest_total_res_time || !fastest_total_res_time ? total_res_time : fastest_total_res_time
            slowest_total_res_time = total_res_time > slowest_total_res_time ? total_res_time : slowest_total_res_time

            if (total_res_time_list.length === repeat) {
                const avg_total_res_time = total_res_time_list.reduce((acc, time) => acc + time, 0) / repeat
                exec(`echo ${JSON.stringify({
                    login: { ...login, time_list: [] },
                    getAnnList: { ...getAnnList, time_list: [] },
                    fastest_total_res_time,
                    slowest_total_res_time,
                    avg_total_res_time,
                })} > test.json`)
                exec(`echo ${JSON.stringify({
                    login: login.time_list,
                    getAnnList: getAnnList.time_list,
                    total_res_time_list,
                })} > test_row.json`)
            }
        })
}
```

## Result
* test.json
```json
{
    "login": {
        "total_time": 1652,
        "fastest_time": 301,
        "slowest_time": 346,
        "avg_time": 330.4,
        "time_list": [],
        "resIdx": 5,
        "cookie": "ASP.NET_SessionId=yerpj13ohvxsz1a0sv011i2h;passportcode=uNxtQ8bpR8lpH2wvIRfpB5cnY5owqJ9pcFFfv42hp47bm52jx4Zrd61afs4XlyE7hcZ6uhAGnqSGwmSNxvDGozqqDGtrDNlbT7yf11msXLqj1CmxWToallCHcuWIvvNHvjV9rqLVxv03qfQ9oabqR2knQIusBJmvOHvlI5fyIOcsUJeznkJOrdF4utF5xk4MumYMcl2Mvp6Zogwd4MnrZMqtGEryAAynZCrkEW"
    },
    "getAnnList": {
        "total_time": 14953,
        "fastest_time": 2442,
        "slowest_time": 4031,
        "avg_time": 2990.6,
        "time_list": [],
        "resIdx": 5,
        "cookie": ""
    },
    "fastest_total_res_time": 2743,
    "slowest_total_res_time": 4370,
    "avg_total_res_time": 3321
}
```

* test_row.json
```json
{
    "login": [
        301,
        321,
        339,
        345,
        346
    ],
    "getAnnList": [
        2442,
        2521,
        2971,
        2988,
        4031
    ],
    "total_res_time_list": [
        2743,
        2842,
        3316,
        3334,
        4370
    ]
}
```