const loadtest = require("../../../lib/loadtest");
const formatUrl = require("../../../lib/formatUrl");
/**
 * 取得功能權限群組列表
 * GET /core/permissiongroup
 * @param {Object} params - return value of action creator
 */
const getPrmgrpList = (setting = {}, data) => loadtest({ url: formatUrl(`/core/permissiongroup`, data), method: 'GET', ...setting })

/**
 * 新增功能權限群組
 * POST /core/permissiongrou
 * @param {Object} params - return value of action creator
 */
const newPrmgrp = (setting = {}, data) => loadtest({ url: formatUrl(`/core/permissiongroup`, data), method: 'POST', ...setting })

/**
 * 修改特定功能權限群組
 * PATCH core/permissiongroup/${path.ag_sid}
 * @param {Object} params - return value of action creator
 */
const updatePrmgrp = (setting = {}, data) => loadtest({ url: formatUrl(`/core/permissiongroup/:ag_sid`, data), method: 'PATCH', ...setting })

/**
 * 刪除特定功能權限群組
 * DELETE /core/permissiongroup/${path.ag_sid}
 * @param {Object} params - return value of action creator
 */
const deletePrmgrp = (setting = {}, data) => loadtest({ url: formatUrl(`/core/permissiongroup/:ag_sid`, data), method: 'DELETE', ...setting })

/**
 * 修改特定功能權限群組的權限
 * PATCH /core/permissiongroup/${path.ag_sid}/permission
 * @param {Object} params - return value of action creator
 */
const updatePermission = (setting = {}, data) => loadtest({ url: formatUrl(`/core/permissiongroup/:ag_sid/permission`, data), method: 'PATCH', ...setting })

/**
 * 新增特定功能權限群組的人員
 * POST /core/permissiongroup/${path.ag_sid}/member
 * @param {Object} params - return value of action creator
 */
const addPrmgrpMember = (setting = {}, data) => loadtest({ url: formatUrl(`/core/permissiongroup/:ag_sid/member`, data), method: 'POST', ...setting })

/**
 * 刪除特定功能權限群組的人員
 * DELETE /core/permissiongroup/${path.ag_sid}/member/${path.aa_sid}
 * @param {Object} params - return value of action creator
 */
const removePrmgrpMember = (setting = {}, data) => loadtest({ url: formatUrl(`/core/permissiongroup/:ag_sid/member/:aa_sid`, data), method: 'DELETE', ...setting })

/**
 * 特定功能權限群組的權限列表
 * GET /core/permissiongroup/${path.ag_sid}/permission
 * @param {Object} params - return value of action creator
 */
const getPrmList = (setting = {}, data) => loadtest({ url: formatUrl(`/core/permissiongroup/:ag_sid/permission`, data), method: 'GET', ...setting })

/**
 * 特定功能權限群組的人員列表
 * GET /core/permissiongroup/${path.ag_sid}/member
 * @param {Object} params - return value of action creator
 */
const getPrmgrpMbrList = (setting = {}, data) => loadtest({ url: formatUrl(`/core/permissiongroup/:ag_sid/member`, data), method: 'GET', ...setting })

/**
 * 取得特定人員功能權限群組列表
 * GET /core/member/${path.aa_sid}/permissiongroup
 * @param {Object} params - return value of action creator
 */
const getMbrPrmgrpList = (setting = {}, data) => loadtest({ url: formatUrl(`/core/member/:aa_sid/permissiongroup`, data), method: 'GET', ...setting })

/**
 * 批次更新特定人員所在的功能權限群組
 * PATCH /api/core/member/${path.aa_sid}/permissiongroup
 * @param {Object} params - return value of action creator
 */
const updateMbrPrmgrpList = (setting = {}, data) => loadtest({ url: formatUrl(`/core/member/:aa_sid/permissiongroup`, data), method: 'PATCH', ...setting })

/**
 * 批次修改特定功能權限群組的人員 2020/05/26 新增
 * PATCH /core/permissiongroup/${path.ag_sid}/member
 * @param {Object} params - return value of action creator
 */
const updatePrmgrpMbrList = (setting = {}, data) => loadtest({ url: formatUrl(`/core/permissiongroup/:ag_sid/member`, data), method: 'PATCH', ...setting })

module.exports = {
    getPrmgrpList,
    newPrmgrp,
    updatePrmgrp,
    deletePrmgrp,
    updatePermission,
    addPrmgrpMember,
    removePrmgrpMember,
    getPrmList,
    getPrmgrpMbrList,
    getMbrPrmgrpList,
    updateMbrPrmgrpList,
    updatePrmgrpMbrList,
}