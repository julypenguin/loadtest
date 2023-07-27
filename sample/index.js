const apis = require('./apis/index')
const record = require('../lib/record')

let repeat = process.argv[2] || 4
repeat = Number(repeat)

const _getAbout = apis.getAbout({ apiName: 'getAbout' })

const apisRecord = record(_getAbout)
let resultIdx = 0

for (let i = 1; i <= repeat; i++) {
    apisRecord.init(i)
    _getAbout
        .test()
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
