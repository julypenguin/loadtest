const loadtest = require("../lib/loadtest");
const record = require('../lib/record')

let repeat = process.argv[2] || 4
repeat = Number(repeat)

const login = loadtest({ url: '/core/login', method: 'POST', repeat, failResult: { result: false }, succResult: 'result', apiName: 'login' })
const getAnnList = loadtest({ url: '/core/announcement?enable_state=1&is_read=-1', repeat, failResult: { result: false }, succResult: 'result', apiName: 'getAnnList' })

const apisRecord = record(login, getAnnList) // 統計一連串 api 執行結果以及匯出報告 
let resultIdx = 0 // 紀錄多次一連串 api 執行後，最後一次的最後一支 api 回傳

for (let i = 1; i <= repeat; i++) {
    let cookie = ''
    apisRecord.init(i) // 初始化設定
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
            resultIdx++
            apisRecord.finish(i, res_time) // 結算 api 總回傳時間
            if (resultIdx === repeat) {
                apisRecord.exportReport()
            }
        })
        .catch(error => {
            console.log('test_error', error)
        })
}
