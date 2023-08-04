const apis = require('./apis/index')
const record = require('../lib/record')

let repeat = process.argv[2] || 4
repeat = Number(repeat)

const _getAbout = apis.getAbout({ apiName: 'getAbout' })
const _getAbout2 = apis.getAbout({ apiName: 'getAbout2' })

const apisRecord = record(_getAbout, _getAbout2)
apisRecord.init({ repeat }) // 初始化設定，repeat 必填

for (let i = 1; i <= repeat; i++) {
    _getAbout
        .test()
        .then(({ res_time, res }) => {
            apisRecord.addTime(i, res_time) // 紀錄 api 回傳時間做加總
            return _getAbout2.test()
        })
        .then(({ res_time, res }) => {
            apisRecord.finish(i, res_time)
        })
        .catch(error => {
            apisRecord.finish(i)
            console.log('test_error', error)
        })
}
