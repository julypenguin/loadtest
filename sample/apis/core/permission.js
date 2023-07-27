const loadtest = require("../../../lib/loadtest");
const formatUrl = require("../../../lib/formatUrl");

/**
 * 取得所有功能權限列表 (基於登入的組織)
 * GET /core/permission
 * @param {Object} params - return value of action creator
 */
const getPermissionList = (setting = {}, data) => loadtest({ url: formatUrl(`/core/permission`, data), method: 'GET', failResult: { result: false }, succResult: 'result', ...setting })

module.exports = {
    getPermissionList,
}