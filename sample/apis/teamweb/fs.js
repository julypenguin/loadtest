const loadtest = require("../../../lib/loadtest");
const formatUrl = require("../../../lib/formatUrl");

/**
 *  檔案系統概觀資訊
 * GET /teamweb/fs
 * @param {*} params - return value of action creator
 */
const getFsInfo = (setting = {}, data) => loadtest({ url: formatUrl(`/teamweb/fs`, data), method: 'GET', failResult: { result: false }, succResult: 'result', ...setting })

/**
 * 特定目錄或檔案下載 
 * POST /teamweb/fs/${path.fs_sid}
 * @param {*} params - return value of action creator
 */
const downloadFs = (setting = {}, data) => loadtest({ url: formatUrl(`/teamweb/fs/:fs_sid`, data), method: 'POST', failResult: { result: false }, succResult: 'result', ...setting })

/**
 * 批次復原已刪除檔案或目錄 
 * PATCH /teamweb/fs/recover 
 * @param {*} params - return value of action creator
 */
const recoverFs = (setting = {}, data) => loadtest({ url: formatUrl(`/teamweb/fs/recover`, data), method: 'PATCH', failResult: { result: false }, succResult: 'result', ...setting })

/**
 * 批次移動檔案或目錄 
 * PUT /teamweb/fs/move
 * @param {*} params - return value of action creator
 */
const moveFs = (setting = {}, data) => loadtest({ url: formatUrl(`/teamweb/fs/move`, data), method: 'PUT', failResult: { result: false }, succResult: 'result', ...setting })

/**
 * 批次複製檔案與目錄 
 * PUT /teamweb/fs/copy
 * @param {*} params - return value of action creator
 */
const copyFs = (setting = {}, data) => loadtest({ url: formatUrl(`/teamweb/fs/copy`, data), method: 'PUT', failResult: { result: false }, succResult: 'result', ...setting })

/**
 * 批次刪除檔案或目錄
 * DELETE /teamweb/fs/remove 
 * @param {*} params - return value of action creator
 */
const removeFs = (setting = {}, data) => loadtest({ url: formatUrl(`/teamweb/fs/remove`, data), method: 'DELETE', failResult: { result: false }, succResult: 'result', ...setting })

module.exports = {
    getFsInfo,
    downloadFs,
    recoverFs,
    moveFs,
    copyFs,
    removeFs,
}
