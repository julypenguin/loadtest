const loadtest = require("../../../lib/loadtest");
const formatUrl = require("../../../lib/formatUrl");
/**
 * 解析權杖詳細資訊
 * GET /core/debug/accesstoken
 * @param {Object} params - return value of action creator
 */
const getDebugAccesstoken = (setting = {}, data) => loadtest({ url: formatUrl(`/core/debug/accesstoken`, data), method: 'GET', failResult: { result: false }, succResult: 'result', ...setting })

/**
 * 解析登入權杖詳細資訊
 * POST /core/debug/passportcode
 * @param {Object} params - return value of action creator
 */
const getDebugPassportcode = (setting = {}, data) => loadtest({ url: formatUrl(`/core/debug/passportcode`, data), method: 'POST', failResult: { result: false }, succResult: 'result', ...setting })

module.exports = {
    getDebugAccesstoken,
    getDebugPassportcode,
}