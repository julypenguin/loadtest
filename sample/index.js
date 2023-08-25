const apis = require('./apis/index')
const record = require('../lib/record')
const cmd = require('../lib/cmd')

const repeat = cmd.concurrency

const _getAbout = apis.getAbout({ apiName: 'getAbout' })
const _getAbout2 = apis.getAbout({ apiName: 'getAbout2' })

const apisRecord = record(_getAbout, _getAbout2)
apisRecord.setPath = '../'
apisRecord.setFilename = 'test'
apisRecord.init({ repeat }) // 初始化設定，可選填

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
