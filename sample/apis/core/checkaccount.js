const loadtest = require("../../../lib/loadtest");
const formatUrl = require("../../../lib/formatUrl");
/**
 * 驗證帳號合法性[無須登入]
 * POST /core/checkaccount
 * @param {*} params - return value of action creator
 */
const checkAccount = (setting = {}, data) => loadtest({ url: formatUrl(`/core/checkaccount`, data), method: 'POST', ...setting })

module.exports = {
    checkAccount,
}