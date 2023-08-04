const fs = require('fs');
const { getStddev } = require('../lib/calculator')
const formateReport = require('../lib/formateReport')

function exportReport(path = '../test.json', reportData = {}) {
    try {
        fs.writeFileSync(path, JSON.stringify(reportData, null, "\t"));
    } catch (err) {
        console.error(err);
    }
}

function record(...apis) {
    let total_res_time_record = {}  // 下面一系列 api 總回傳時間
    const total_res_time_list = [] // 陣列紀錄所有下面一系列 api 分別總回傳時間
    let fastest_total_res_time = 0 // 下面一系列 api 總回傳時間最快的
    let slowest_total_res_time = 0 // 下面一系列 api 總回傳時間最慢的
    let idx = 0
    return {
        total_res_time_record,
        total_res_time_list,
        fastest_total_res_time,
        slowest_total_res_time,
        idx,
        init(key = 0) {
            this.total_res_time_record[key] = 0
        },
        addTime(key, res_time = 0) {
            if (typeof res_time !== 'number' || !res_time) {
                throw new Error(`${key} catch error`)
            }
            if (typeof key !== 0 && !key) {
                console.log('arguments are required (addTime fn)')
                return
            }
            const total_res_time = !this.total_res_time_record[key] ? res_time : this.total_res_time_record[key] + res_time
            this.total_res_time_record[key] = total_res_time
        },
        finish(key, res_time = 0) {
            this.idx = this.idx + 1
            if (typeof res_time !== 'number') return
            const total_res_time = !this.total_res_time_record[key] ? res_time : this.total_res_time_record[key] + res_time
            if (!!total_res_time) this.total_res_time_list.push(total_res_time)
            this.fastest_total_res_time = total_res_time < this.fastest_total_res_time || !this.fastest_total_res_time ? total_res_time : this.fastest_total_res_time
            this.slowest_total_res_time = total_res_time > this.slowest_total_res_time ? total_res_time : this.slowest_total_res_time
        },
        formatExportData(apis, mode) {
            let newData = {}
            apis.forEach((api, i) => {
                newData = {
                    ...newData,
                    [api.apiName || i]: formateReport(api, mode),
                }
            });
            const avg_total_res_time = this.total_res_time_list.reduce((acc, time) => acc + time, 0) / this.total_res_time_list.length

            if (mode === 2) {
                return {
                    ...newData,
                    total_res_time_list,
                }
            }
            return {
                ...newData,
                std_total_res_time: getStddev(this.total_res_time_list),
                fastest_total_res_time: this.fastest_total_res_time,
                slowest_total_res_time: this.slowest_total_res_time,
                avg_total_res_time: Math.floor(avg_total_res_time),
                idx: this.idx
            }
        },
        exportReport(modeList = [3, 2]) {
            if (!Array.isArray(modeList)) modeList = [3, 2]
            const [dataMode, rowDataMode] = modeList
            exportReport('../test.json', this.formatExportData(apis, dataMode || 3))
            exportReport('../test_row.json', this.formatExportData(apis, rowDataMode || 2))
        }
    }
}

module.exports = record
