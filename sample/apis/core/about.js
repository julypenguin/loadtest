const loadtest = require("../../../lib/loadtest");
const formatUrl = require("../../../lib/formatUrl");
/**
 * 取得系統套件版本資訊
 * GET /api/core/about
 */
const getAbout = (setting = {}, data) => loadtest({ url: formatUrl(`/core/about`, data), method: 'GET', ...setting })

module.exports = {
    getAbout,
}
