const loadtest = require("../../../lib/loadtest");
const formatUrl = require("../../../lib/formatUrl");

/**
 * 新增使用者
 * POST /core/member
 * @param {Object} params - return value of action creator
 */
const newMbr = (setting = {}, data) => loadtest({ url: formatUrl(`/core/member`, data), method: 'POST', failResult: { result: false }, succResult: 'result', ...setting })

/**
 * 取得特定人員資訊
 * GET /core/member/${path.aa_sid}
 * @param {Object} params - return value of action creator
 */
const getMbrDetail = (setting = {}, data) => loadtest({ url: formatUrl(`/core/member/:aa_sid`, data), method: 'GET', failResult: { result: false }, succResult: 'result', ...setting })

/**
 * 取得特定人員大頭照
 * GET /core/member/${path.aa_sid}/avatar
 * @param {Object} params - return value of action creator
 */
const getMbrAvatar = (setting = {}, data) => loadtest({ url: formatUrl(`/core/member/:aa_sid/avatar`, data), method: 'GET', failResult: { result: false }, succResult: 'result', ...setting })

/**
 * 更新使用者資訊
 * PATCH /core/member/${path.aa_sid}
 * @param {Object} params - return value of action creator
 */
const updateMbr = (setting = {}, data) => loadtest({ url: formatUrl(`/core/member/:aa_sid`, data), method: 'PATCH', failResult: { result: false }, succResult: 'result', ...setting })

/**
 * 更新使用者資訊
 * PATCH /core/member/${path.aa_sid}/avatar
 * @param {Object} params - return value of action creator
 */
const updateMbrAvatar = (setting = {}, data) => loadtest({ url: formatUrl(`/core/member/:aa_sid/avatar`, data), method: 'PATCH', failResult: { result: false }, succResult: 'result', ...setting })

/**
 * 刪除使用者
 * DELETE /core/member/${path.aa_sid}
 * @param {Object} params - return value of action creator
 */
const deleteMbr = (setting = {}, data) => loadtest({ url: formatUrl(`/core/member/:aa_sid`, data), method: 'DELETE', failResult: { result: false }, succResult: 'result', ...setting })

/**
 * 刪除特定人員大頭照
 * DELETE /core/member/${path.aa_sid}/avatar
 * @param {Object} params - return value of action creator
 */
const deleteMbrAvatar = (setting = {}, data) => loadtest({ url: formatUrl(`/core/member/:aa_sid/avatar`, data), method: 'DELETE', failResult: { result: false }, succResult: 'result', ...setting })

module.exports = {
    newMbr,
    getMbrDetail,
    getMbrAvatar,
    updateMbr,
    updateMbrAvatar,
    deleteMbr,
    deleteMbrAvatar,
}