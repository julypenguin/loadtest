const loadtest = require("../../../lib/loadtest");
const formatUrl = require("../../../lib/formatUrl");

/**
 * 新增搜尋記錄不符回報紀錄
 * POST /core/searchlogreport
 * @param {Object} params - return value of action creator
 */
const newSearchlogreport = (setting = {}, data) => loadtest({ url: formatUrl(`/core/searchlogreport`, data), method: 'POST', failResult: { result: false }, succResult: 'result', ...setting })

module.exports = {
    newSearchlogreport,
}