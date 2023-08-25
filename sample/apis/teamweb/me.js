const loadtest = require("../../../lib/loadtest");
const formatUrl = require("../../../lib/formatUrl");

/**
 * 取得我的小組網站列表
 * GET /teamweb/me/site
 * @param {Object} params - return value of action creator
 */
const getMySiteList = (setting = {}, data) => loadtest({ url: formatUrl(`/teamweb/me/site`, data), method: 'GET', failResult: { result: false }, succResult: 'result', ...setting })

/**
 * 取得我的壓縮任務狀態列表
 * GET /teamweb/me/drivetask
 * @param {Object} params - return value of action creator
 */
const getMyDrivetaskList = (setting = {}, data) => loadtest({ url: formatUrl(`/teamweb/me/drivetask`, data), method: 'GET', failResult: { result: false }, succResult: 'result', ...setting })

/**
 * 我被分享的檔案或目錄列表 (包含排序) 
 * GET /teamweb/me/fs/sharelist
 * @param {Object} params - return value of action creator
 */
const getMysharelist = (setting = {}, data) => loadtest({ url: formatUrl(`/teamweb/me/fs/sharelist`, data), method: 'GET', failResult: { result: false }, succResult: 'result', ...setting })

module.exports = {
    getMySiteList,
    getMyDrivetaskList,
    getMysharelist,
}
