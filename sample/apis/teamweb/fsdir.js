const loadtest = require("../../../lib/loadtest");
const formatUrl = require("../../../lib/formatUrl");

/**
 *  特定目錄或檔案詳細資訊
 * GET /teamweb/fs/${path.fs_sid}/info
 * @param {*} params - return value of action creator
 */
const getFsdirInfo = (setting = {}, data) => loadtest({ url: formatUrl(`/teamweb/fs/:fs_sid/info`, data), method: 'GET', failResult: { result: false }, succResult: 'result', ...setting })

/**
 *  取得特定目錄下所有可讀的目錄與子目錄
 * GET /teamweb/fs/${path.fs_sid}/dir
 * @param {*} params - return value of action creator
 */
const getFsdirDirList = (setting = {}, data) => loadtest({ url: formatUrl(`/teamweb/fs/:fs_sid/dir`, data), method: 'GET', failResult: { result: false }, succResult: 'result', ...setting })

/**
 *  特定目錄下的檔案與目錄列表 (包含排序)
 * GET /teamweb/fs/${path.fs_sid}/list
 * @param {*} params - return value of action creator
 */
const getFsdirList = (setting = {}, data) => loadtest({ url: formatUrl(`/teamweb/fs/:fs_sid/list`, data), method: 'GET', failResult: { result: false }, succResult: 'result', ...setting })

/**
 *  搜尋特定目錄下(包含子目錄)的檔案列表
 * GET /teamweb/fs/${path.fs_sid}/search
 * @param {*} params - return value of action creator
 */
const searchFsdir = (setting = {}, data) => loadtest({ url: formatUrl(`/teamweb/fs/:fs_sid/search`, data), method: 'GET', failResult: { result: false }, succResult: 'result', ...setting })

/**
 *  特定目錄下被標記垃圾的檔案與目錄詳細資訊
 * GET /teamweb/fs/${path.fs_sid}/trash
 * @param {*} params - return value of action creator
 */
const getFsdirTrashList = (setting = {}, data) => loadtest({ url: formatUrl(`/teamweb/fs/:fs_sid/trash`, data), method: 'GET', failResult: { result: false }, succResult: 'result', ...setting })


/**
 *  特定目錄下被標記垃圾的檔案與目錄列表 (包含排序) 
 * GET /teamweb/fs/${path.fs_sid}/trash
 * @param {*} params - return value of action creator
 */
const trashFsdir = (setting = {}, data) => loadtest({ url: formatUrl(`/teamweb/fs/:fs_sid/trash`, data), method: 'GET', failResult: { result: false }, succResult: 'result', ...setting })

/**
 *  取得檔案歷史版本 (僅支援檔案oid)
 * GET /teamweb/fs/${path.fs_sid}/history
 * @param {*} params - return value of action creator
 */
const getFsdirHistoryList = (setting = {}, data) => loadtest({ url: formatUrl(`/teamweb/fs/:fs_sid/history`, data), method: 'GET', failResult: { result: false }, succResult: 'result', ...setting })

/**
 * 特定目錄下新增目錄
 * POST /teamweb/fs/${path.fs_sid}/dir
 * @param {*} params - return value of action creator
 */
const newFsdir = (setting = {}, data) => loadtest({ url: formatUrl(`/teamweb/fs/:fs_sid/dir`, data), method: 'POST', failResult: { result: false }, succResult: 'result', ...setting })

/**
 * 特定目錄下關聯指定檔案
 * POST /teamweb/fs/${path.fs_sid}/file
 * @param {*} params - return value of action creator
 */
const fileFsdir = (setting = {}, data) => loadtest({ url: formatUrl(`/teamweb/fs/:fs_sid/file`, data), method: 'POST', failResult: { result: false }, succResult: 'result', ...setting })

/**
 * 特定檔案建立捷徑 (僅支援檔案oid)
 * POST /teamweb/fs/${path.fs_sid}/shortcut
 * @param {*} params - return value of action creator
 */
const shortcutFsdir = (setting = {}, data) => loadtest({ url: formatUrl(`/teamweb/fs/:fs_sid/shortcut`, data), method: 'POST', failResult: { result: false }, succResult: 'result', ...setting })

/**
 * 特定檔案建立新版本 (僅支援檔案oid)
 * POST /teamweb/fs/${path.fs_sid}/patch_new_version
 * @param {*} params - return value of action creator
 */
const patchFsdirVersion = (setting = {}, data) => loadtest({ url: formatUrl(`/teamweb/fs/:fs_sid/patch_new_version`, data), method: 'POST', failResult: { result: false }, succResult: 'result', ...setting })

/**
 * 特定檔案或目錄重新命名
 * PATCH /teamweb/fs/${path.fs_sid}/name
 * @param {*} params - return value of action creator
 */
const nameFsdir = (setting = {}, data) => loadtest({ url: formatUrl(`/teamweb/fs/:fs_sid/name`, data), method: 'PATCH', failResult: { result: false }, succResult: 'result', ...setting })

module.exports = {
    getFsdirInfo,
    getFsdirDirList,
    getFsdirList,
    searchFsdir,
    getFsdirTrashList,
    trashFsdir,
    getFsdirHistoryList,
    newFsdir,
    fileFsdir,
    shortcutFsdir,
    patchFsdirVersion,
    nameFsdir,
}
