const loadtest = require("../../../lib/loadtest");
const formatUrl = require("../../../lib/formatUrl");

/**
 * 取得全組織小組網站類型
 * GET /teamweb/sitetype
 * @param {Object} params - return value of action creator
 */
const getSitetypeList = (setting = {}, data) => loadtest({ url: formatUrl(`/teamweb/sitetype`, data), method: 'GET', failResult: { result: false }, succResult: 'result', ...setting })

/**
 * 新增小組網站類型
 * POST /teamweb/sitetype
 * @param {Object} params - return value of action creator
 */
const newSitetype = (setting = {}, data) => loadtest({ url: formatUrl(`/teamweb/sitetype`, data), method: 'POST', failResult: { result: false }, succResult: 'result', ...setting })

/**
 * 修改特定小組網站類型
 * PATCH /teamweb/sitetype/${path.stt_sid}
 * @param {Object} params - return value of action creator
 */
const updateSitetype = (setting = {}, data) => loadtest({ url: formatUrl(`/teamweb/sitetype/:stt_sid`, data), method: 'PATCH', failResult: { result: false }, succResult: 'result', ...setting })

/**
 * 特定小組網站類型的指定排序
 * PATCH /teamweb/sitetype/${path.stt_sid}/shift
 * @param {Object} params - return value of action creator
 */
const shiftSitetype = (setting = {}, data) => loadtest({ url: formatUrl(`/teamweb/sitetype/:stt_sid/shift`, data), method: 'PATCH', failResult: { result: false }, succResult: 'result', ...setting })

/**
 * 刪除特定小組網站類型
 * DELETE /teamweb/sitetype/${path.stt_sid}
 * @param {Object} params - return value of action creator
 */
const deleteSitetype = (setting = {}, data) => loadtest({ url: formatUrl(`/teamweb/sitetype/:stt_sid`, data), method: 'DELETE', failResult: { result: false }, succResult: 'result', ...setting })

module.exports = {
    getSitetypeList,
    newSitetype,
    updateSitetype,
    shiftSitetype,
    deleteSitetype,
}
