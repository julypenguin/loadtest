const loadtest = require("../../../lib/loadtest");
const formatUrl = require("../../../lib/formatUrl");
/**
 * 登入使用者帳號
 * POST /core/login
 * @param {*} params - return value of action creator
 */
const login = (setting = {}, data) => loadtest({ url: formatUrl(`/core/login`, data), method: 'POST', ...setting })

/**
 * 登出使用者帳號
 * POST /core/logout
 * @param {*} params - return value of action creator
 */
const logout = (setting = {}, data) => loadtest({ url: formatUrl(`/core/logout`, data), method: 'POST', ...setting })

/**
 * 切換到代理人
 * POST /core/agent
 * @param {*} params - return value of action creator
 */
const switchAgent = (setting = {}, data) => loadtest({ url: formatUrl(`/core/agent`, data), method: 'POST', ...setting })

module.exports = {
    login,
    logout,
    switchAgent,
}