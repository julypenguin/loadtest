const fs = require('fs');
const { getStddev } = require('./calculator')
const formateReport = require('./formateReport')
const cmd = require("./cmd");

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
    let repeat = Number(cmd.concurrency)
    let path = './' // 檔案存取路徑，預設存取在本層
    let filename = 'test'
    const start_time = Date.now() // 用來計算程式執行時間，並匯出報告
    let execution_time = 0 // 程式碼執行時間，可匯出到報告
    return {
        total_res_time_record,
        total_res_time_list,
        fastest_total_res_time,
        slowest_total_res_time,
        idx,
        repeat,
        path,
        filename,
        execution_time,
        init(options) {
            if (!options || typeof options !== 'object') return
            for (let key in options) {
                if (key === 'key') this.total_res_time_record[key] = 0
                if (key === 'repeat') {
                    let repeat = options[key]
                    if (isNaN(Number(repeat))) repeat = 0
                    this.repeat = repeat
                }
                if (key === 'execution_time') {
                    this.execution_time = options[key]
                }
            }
        },
        set setFilename(filename) {
            this.filename = !!filename && filename.toString()
        },
        set setPath(path) {
            if (!path) path = '/'
            const pathText = path.toString()
            if (pathText.substr !== '/') path = `${path}/`
            this.path = path
        },
        set addApi(api) {
            apis = [...apis, api]
        },
        addTime(key, res_time = 0) {
            if (typeof res_time !== 'number' || !res_time) {
                throw new Error(`${key} catch error`)
            }
            if (key !== 0 && !key) {
                console.log('arguments are required (addTime fn)')
                return
            }
            const total_res_time = !this.total_res_time_record[key] ? res_time : this.total_res_time_record[key] + res_time
            this.total_res_time_record[key] = total_res_time
        },
        finish(key, res_time = 0, toExport = true) {
            if (!this.repeat) console.log('______No repeat set______')
            this.idx = this.idx + 1
            if (typeof res_time !== 'number') {
                console.log('finish res_time is not number')
                res_time = 0
            } 
            const total_res_time = !this.total_res_time_record[key] ? res_time : this.total_res_time_record[key] + res_time
            if (!!total_res_time) this.total_res_time_list.push(total_res_time)
            this.fastest_total_res_time = total_res_time < this.fastest_total_res_time || !this.fastest_total_res_time ? total_res_time : this.fastest_total_res_time
            this.slowest_total_res_time = total_res_time > this.slowest_total_res_time ? total_res_time : this.slowest_total_res_time
            if (this.idx.toString() !== this.repeat.toString()) return
            if (!!toExport) {
                this.execution_time = this.execution_time + Date.now() - start_time
                this.exportReport()
            }
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
                idx: this.idx,
                execution_time: this.execution_time
            }
        },
        exportReport(modeList = [3, 2]) {
            if (!Array.isArray(modeList)) modeList = [3, 2]
            const [dataMode, rowDataMode] = modeList
            exportReport(`${this.path}${this.filename}.json`, this.formatExportData(apis, dataMode || 3))
            exportReport(`${this.path}${this.filename}_row.json`, this.formatExportData(apis, rowDataMode || 2))
        },
    }
}

module.exports = record
