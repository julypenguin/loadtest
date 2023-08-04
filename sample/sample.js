const loadtest = require("../lib/loadtest");
const record = require('../lib/record')

let repeat = process.argv[2] || 4
repeat = Number(repeat)

const login = loadtest({ url: '/core/login', method: 'POST', repeat, failResult: { result: false }, succResult: 'result', apiName: 'login' })
const getAnnList = loadtest({ url: '/core/announcement?enable_state=1&is_read=-1', repeat, failResult: { result: false }, succResult: 'result', apiName: 'getAnnList' })

const apisRecord = record(login, getAnnList) // 統計一連串 api 執行結果以及匯出報告 
apisRecord.init({ repeat }) // 初始化設定，repeat 必填

for (let i = 1; i <= repeat; i++) {
    let cookie = ''
    login
        .test({
            body: {
                account: ``,
                ao_sid: '',
                password: ''
            },
        })
        .then(({ res_time, res }) => {
            apisRecord.addTime(i, res_time) // 紀錄 api 回傳時間做加總
            cookie = login.cookie
            return getAnnList.test({
                headers: {
                    page: i,
                }
            }, cookie)
        })
        .then(({ res_time, res }) => {
            apisRecord.finish(i, res_time) // 結算 api 總回傳時間
        })
        .catch(error => {
            apisRecord.finish(i) // 結算 api 總回傳時間
            console.log('test_error', error)
        })
}
