const loadtest = require("../../../lib/loadtest");
const formatUrl = require("../../../lib/formatUrl");
/**
 * 取得頁面活動紀錄列表
 * GET /core/activitylog
 * @param {*} params - return value of action creator
 */
const getActivitylogList = (setting = {}, data) => loadtest({ url: formatUrl(`/core/activitylog`, data), method: 'GET', ...setting })

/**
 * 新增頁面活動紀錄
 * POST /core/activitylog
 * @param {*} params - return value of action creator
 */
const newActivitylog = (setting = {}, data) => loadtest({ url: formatUrl(`/core/activitylog`, data), method: 'POST', ...setting })

module.exports = {
    getActivitylogList,
    newActivitylog,
}