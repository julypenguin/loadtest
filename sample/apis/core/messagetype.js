const loadtest = require("../../../lib/loadtest");
const formatUrl = require("../../../lib/formatUrl");

/**
 * 訊息類別列表
 * GET /core/messagetype
 * @param {Object} params - return value of action creator
 */
const getMessagetypeList = (setting = {}, data) => loadtest({ url: formatUrl(`/core/messagetype`, data), method: 'GET', failResult: { result: false }, succResult: 'result', ...setting })

/**
 * 刪除特定訊息類別
 * DELETE /core/messagetype/${path.pit_sid}
 * @param {Object} params - return value of action creator
 */
const deleteMessagetype = (setting = {}, data) => loadtest({ url: formatUrl(`/core/messagetype/:pit_sid`, data), method: 'DELETE', failResult: { result: false }, succResult: 'result', ...setting })

/**
 * 新增訊息類別
 * POST /core/messagetype
 * @param {Object} params - return value of action creator
 */
const newMessagetype = (setting = {}, data) => loadtest({ url: formatUrl(`/core/messagetype`, data), method: 'POST', failResult: { result: false }, succResult: 'result', ...setting })

/**
 * 修改特定訊息類別
 * PATCH /core/messagetype/${path.pit_sid}
 * @param {Object} params - return value of action creator
 */
const updateMessagetype = (setting = {}, data) => loadtest({ url: formatUrl(`/core/messagetype/:pit_sid`, data), method: 'PATCH', failResult: { result: false }, succResult: 'result', ...setting })

module.exports = {
    getMessagetypeList,
    deleteMessagetype,
    newMessagetype,
    updateMessagetype,
}