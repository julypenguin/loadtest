const loadtest = require("../../../lib/loadtest");
const formatUrl = require("../../../lib/formatUrl");
/**
 * 取得組織列表
 * GET /core/tenant
 * @param {*} params - return value of action creator
 */
const getTenantList = (setting = {}, data) => loadtest({ url: formatUrl(`/core/tenant`, data), method: 'GET', failResult: { result: false }, succResult: 'result', ...setting })

module.exports = {
    getTenantList,
}