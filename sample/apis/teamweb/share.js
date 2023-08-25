const loadtest = require("../../../lib/loadtest");
const formatUrl = require("../../../lib/formatUrl");

/**
 *  特定目錄或檔案的分享設定列表
 * GET /teamweb/fs/${path.fs_sid}/share
 * @param {*} params - return value of action creator
 */
const getShareList = (setting = {}, data) => loadtest({ url: formatUrl(`/teamweb/fs/:fs_sid/share`, data), method: 'GET', failResult: { result: false }, succResult: 'result', ...setting })

/**
 * 新增特定目錄或檔案的分享
 * POST /teamweb/fs/${path.fs_sid}/share
 * @param {*} params - return value of action creator
 */
const newShare = (setting = {}, data) => loadtest({ url: formatUrl(`/teamweb/fs/:fs_sid/share`, data), method: 'POST', failResult: { result: false }, succResult: 'result', ...setting })

/**
 * 批次更新特定目錄或檔案的分享權限設定
 * POST /teamweb/fs/${path.fs_sid}/share
 * @param {*} params - return value of action creator
 */
const updateShare = (setting = {}, data) => loadtest({ url: formatUrl(`/teamweb/fs/:fs_sid/share`, data), method: 'POST', failResult: { result: false }, succResult: 'result', ...setting })

/**
 * 刪除特定目錄或檔案的分享的人員
 * DELETE /teamweb/fs/${path.fs_sid}/share/${path.aa_sid}
 * @param {*} params - return value of action creator
 */
const deleteShare = (setting = {}, data) => loadtest({ url: formatUrl(`/teamweb/fs/:fs_sid/share/:aa_sid`, data), method: 'DELETE', failResult: { result: false }, succResult: 'result', ...setting })

module.exports = {
    getShareList,
    newShare,
    updateShare,
    deleteShare,
}
