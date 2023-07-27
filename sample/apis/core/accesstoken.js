const loadtest = require("../../../lib/loadtest");
const formatUrl = require("../../../lib/formatUrl");
/**
 * 取得(我的)存取權杖列表
 * GET /core/accesstoken
 * @param {Object} params - return value of action creator
 */
const getAccesstokenList = (setting = {}, data) => loadtest({ url: formatUrl(`/core/accesstoken`, data), method: 'GET', failResult: { result: false }, succResult: 'result', ...setting })

/**
 * 建立我的存取權杖
 * POST /core/accesstoken
 * @param {Object} params - return value of action creator
 */
const newAccesstoken = (setting = {}, data) => loadtest({ url: formatUrl(`/core/accesstoken`, data), method: 'POST', failResult: { result: false }, succResult: 'result', ...setting })

/**
 * 刪除特定存取權杖
 * DELETE /core/accesstoken/${path.tk_sid}
 * @param {Object} params - return value of action creator
 */
const deleteAccesstoken = (setting = {}, data) => loadtest({ url: formatUrl(`/core/accesstoken/:tk_sid`, data), method: 'DELETE', failResult: { result: false }, succResult: 'result', ...setting })

module.exports = {
    getAccesstokenList,
    newAccesstoken,
    deleteAccesstoken,
}