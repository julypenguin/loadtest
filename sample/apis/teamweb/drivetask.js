const loadtest = require("../../../lib/loadtest");
const formatUrl = require("../../../lib/formatUrl");

/**
 *  全組織檔案系統任務列表(支援過濾)
 * GET /teamweb/drivetask
 * @param {*} params - return value of action creator
 */
const getDrivetaskList = (setting = {}, data) => loadtest({ url: formatUrl(`/teamweb/drivetask`, data), method: 'GET', failResult: { result: false }, succResult: 'result', ...setting })

/**
 *  特定檔案系統任務的狀態
 * GET /teamweb/drivetask/${path.tid}
 * @param {*} params - return value of action creator
 */
const getDrivetaskDetail = (setting = {}, data) => loadtest({ url: formatUrl(`/teamweb/drivetask/:tid`, data), method: 'GET', failResult: { result: false }, succResult: 'result', ...setting })

/**
 * 刪除特定目錄或檔案的分享的人員
 * DELETE /teamweb/drivetask/${path.tid}
 * @param {*} params - return value of action creator
 */
const deleteDrivetask = (setting = {}, data) => loadtest({ url: formatUrl(`/teamweb/drivetask/:tid`, data), method: 'DELETE', failResult: { result: false }, succResult: 'result', ...setting })

module.exports = {
    getDrivetaskList,
    getDrivetaskDetail,
    deleteDrivetask,
}
