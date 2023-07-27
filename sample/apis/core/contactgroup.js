const loadtest = require("../../../lib/loadtest");
const formatUrl = require("../../../lib/formatUrl");
/**
 * 取得聯絡群組列表
 * GET /core/contactgroup
 * @param {Object} params - return value of action creator
 */
const getCtgrpList = (setting = {}, data) => loadtest({ url: formatUrl(`/core/contactgroup`, data), method: 'GET', failResult: { result: false }, succResult: 'result', ...setting })

/**
 * 新增聯絡群組
 * POST /core/contactgroup
 * @param {Object} params - return value of action creator
 */
const newCtgrp = (setting = {}, data) => loadtest({ url: formatUrl(`/core/contactgroup`, data), method: 'POST', failResult: { result: false }, succResult: 'result', ...setting })

/**
 * 修改特定聯絡群組
 * PATCH /core/contactgroup/${path.pig_sid}
 * @param {Object} params - return value of action creator
 */
const updateCtgrp = (setting = {}, data) => loadtest({ url: formatUrl(`/core/contactgroup/:pig_sid`, data), method: 'PATCH', failResult: { result: false }, succResult: 'result', ...setting })

/**
 * 刪除特定聯絡群組
 * DELETE /core/contactgroup/${path.pig_sid}
 * @param {Object} params - return value of action creator
 */
const deleteCtgrp = (setting = {}, data) => loadtest({ url: formatUrl(`/core/contactgroup/:pig_sid`, data), method: 'DELETE', failResult: { result: false }, succResult: 'result', ...setting })

/**
 * 取得特定聯絡群組與其人員列表
 * GET /core/contactgroup/${path.pig_sid}
 * @param {Object} params - return value of action creator
 */
const getCtgrpMbrList = (setting = {}, data) => loadtest({ url: formatUrl(`/core/contactgroup/:pig_sid`, data), method: 'GET', failResult: { result: false }, succResult: 'result', ...setting })

/**
 * 新增特定聯絡群組的人員 (移除)
 * POST /core/contactgroup/${path.pig_sid}/member
 * @param {Object} params - return value of action creator
 */
const addCtgrpMbr = (setting = {}, data) => loadtest({ url: formatUrl(`/core/contactgroup/:pig_sid`, data), method: 'POST', failResult: { result: false }, succResult: 'result', ...setting })

/**
 * 刪除特定聯絡群組的人員 (移除)
 * DELETE /core/contactgroup/${path.pig_sid}/member/${path.aa_sid}
 * @param {Object} params - return value of action creator
 */
const removeCtgrpMbr = (setting = {}, data) => loadtest({ url: formatUrl(`/core/contactgroup/:pig_sid/member/:aa_sid`, data), method: 'DELETE', failResult: { result: false }, succResult: 'result', ...setting })

module.exports = {
    getCtgrpList,
    newCtgrp,
    updateCtgrp,
    deleteCtgrp,
    getCtgrpMbrList,
    addCtgrpMbr,
    removeCtgrpMbr,
}