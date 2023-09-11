const { getStddev } = require('./calculator')

function formateReport(result = {}, mode = 1) {
    switch (mode) {
        // 主要報告
        case 1: return {
            "api": result.api,
            "resIdx": result.resIdx,
            "fastest_slowest_diff_start_time": result.fastest_slowest_diff_start_time,
            "fastest_time": result.fastest_time,
            "slowest_time": result.slowest_time,
            "avg_time": result.avg_time,
            "std_time": getStddev(result.time_list),
            "error": result.error,
        }

        // 原始資料
        case 2: return {
            "api": result.api,
            "resIdx": result.resIdx,
            "start_time_list": result.start_time_list,
            "time_list": result.time_list,
            "error_list": result.error_list,
        }

        // 填寫 excel 項目需求使用
        case 3: return {
            "api": result.api,
            "resIdx": result.resIdx,
            "avg_time": result.avg_time,
            "slowest_time": result.slowest_time,
            "fastest_time": result.fastest_time,
            "std_time": getStddev(result.time_list),
            "error": result.error,
            "fastest_slowest_diff_start_time": result.fastest_slowest_diff_start_time,
        }

        // 模擬 Visual Studio 2019 Enterprise 所提供之 Web 效能與負載測試程式所出的一些數據
        case 4: return {
            "api": result.api,
            "resIdx": result.resIdx,
            "slowest_time": result.slowest_time, // 測試/秒
            "avg_time": result.avg_time, // 平均頁面時間(秒)
            "error": result.error, // 測試失敗次數
            "fastest_slowest_diff_start_time": result.fastest_slowest_diff_start_time,
        }

        // run 指令顯示的結果
        case 5: return {
            fastest_time: result.fastest_time,
            slowest_time: result.slowest_time,
            avg_time: result.avg_time,
            error: result.error
        }

        default: return {}
    }
}

module.exports = formateReport
