const loadtest = require("../../../lib/loadtest");
const formatUrl = require("../../../lib/formatUrl");
/**
 * 取得寄件備份列表
 * GET /core/sent
 * @param {Object} params - return value of action creator
 */
const getSentmsgList = (setting = {}, data) => loadtest({ url: formatUrl(`/core/sent`, data), method: 'GET', failResult: { result: false }, succResult: 'result', ...setting })

/**
 * 取得特定寄件備份訊息
 * GET /core/sent/${path.pi_sid}
 * @param {Object} params - return value of action creator
 */
const getSentmsgDetail = (setting = {}, data) => loadtest({ url: formatUrl(`/core/sent/:pi_sid`, data), method: 'GET', failResult: { result: false }, succResult: 'result', ...setting })

/**
 * 刪除特定寄件備份訊息
 * DELETE /core/sent/${path.pi_sid}
 * @param {Object} params - return value of action creator
 */
const deleteSentmsg = (setting = {}, data) => loadtest({ url: formatUrl(`/core/sent/:pi_sid`, data), method: 'DELETE', failResult: { result: false }, succResult: 'result', ...setting })

/**
 * 取得特定寄件備份訊息附件列表
 * GET /core/sent/${path.pi_sid}/attach
 * @param {Object} params - return value of action creator
 */
const getSentmsgAttachList = (setting = {}, data) => loadtest({ url: formatUrl(`/core/sent/:pi_sid/attach`, data), method: 'GET', failResult: { result: false }, succResult: 'result', ...setting })

module.exports = {
    getSentmsgList,
    getSentmsgDetail,
    deleteSentmsg,
    getSentmsgAttachList,
}