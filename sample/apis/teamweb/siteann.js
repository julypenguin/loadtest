const loadtest = require("../../../lib/loadtest");
const formatUrl = require("../../../lib/formatUrl");



/**
 * 取得公告列表
 * GET /teamweb/site/${path.st_sid}/announcement
 * @param {Object} params - return value of action creator
 */
const getSiteannList = (setting = {}, data) => loadtest({ url: formatUrl(`/teamweb/site/:st_sid/announcement`, data), method: 'GET', failResult: { result: false }, succResult: 'result', ...setting })


/**
 * 特定小組網站公告分類列表
 * GET /teamweb/site/${path.st_sid}/announcement/subject
 * @param {Object} params - return value of action creator
 */
const getSiteannSubjectList = (setting = {}, data) => loadtest({ url: formatUrl(`/teamweb/site/:st_sid/announcement/subject`, data), method: 'GET', failResult: { result: false }, succResult: 'result', ...setting })

/**
 * 新增暫存公告並發佈
 * POST /teamweb/site/${path.st_sid}/announcement/publish
 * @param {Object} params - return value of action creator
 */
const newPubSiteannouncement = (setting = {}, data) => loadtest({ url: formatUrl(`/teamweb/site/:st_sid/announcement/publish`, data), method: 'POST', failResult: { result: false }, succResult: 'result', ...setting })

/**
 * 新增暫存公告
 * POST /teamweb/site/${path.st_sid}/announcement/save
 * @param {Object} params - return value of action creator
 */
const newSavedSiteannouncement = (setting = {}, data) => loadtest({ url: formatUrl(`/teamweb/site/:st_sid/announcement/save`, data), method: 'POST', failResult: { result: false }, succResult: 'result', ...setting })

/**
 * 取得個人公告未讀數量
 * GET /teamweb/site/${path.st_sid}/announcement/unread
 * @param {Object} params - return value of action creator
 */
const getSiteannUnreadCount = (setting = {}, data) => loadtest({ url: formatUrl(`/teamweb/site/:st_sid/announcement/unread`, data), method: 'GET', failResult: { result: false }, succResult: 'result', ...setting })

/**
 * 批次公告稽催
 * POST /teamweb/site/${path.st_sid}/announcement/expedite
 * @param {Object} params - return value of action creator
 */
const expediteSiteannouncement = (setting = {}, data) => loadtest({ url: formatUrl(`/teamweb/site/:st_sid/announcement/expedite`, data), method: 'POST', failResult: { result: false }, succResult: 'result', ...setting })

/**
 * 取得特定公告
 * GET /teamweb/site/${path.st_sid}/announcement/${path.nn_sid}
 * @param {Object} params - return value of action creator
 */
const getSitennDetail = (setting = {}, data) => loadtest({ url: formatUrl(`/teamweb/site/:st_sid/announcement/:nn_sid`, data), method: 'GET', failResult: { result: false }, succResult: 'result', ...setting })

/**
 * 修改暫存公告並發佈
 * POST /teamweb/site/${path.st_sid}/announcement/${path.nn_sid}
 * @param {Object} params - return value of action creator
 */
const updateAndPublishSiteann = (setting = {}, data) => loadtest({ url: formatUrl(`/teamweb/site/:st_sid/announcement/:nn_sid`, data), method: 'POST', failResult: { result: false }, succResult: 'result', ...setting })

/**
 * 修改暫存公告
 * PATCH /teamweb/site/${path.st_sid}/announcement/${path.nn_sid}
 * @param {Object} params - return value of action creator
 */
const updateAndSaveSiteann = (setting = {}, data) => loadtest({ url: formatUrl(`/teamweb/site/:st_sid/announcement/:nn_sid`, data), method: 'PATCH', failResult: { result: false }, succResult: 'result', ...setting })


/**
 * 刪除暫存公告
 * DELETE /teamweb/site/${path.st_sid}/announcement/${path.nn_sid}
 * @param {Object} params - return value of action creator
 */
const deleteSiteannouncement = (setting = {}, data) => loadtest({ url: formatUrl(`/teamweb/site/:st_sid/announcement/:nn_sid`, data), method: 'DELETE', failResult: { result: false }, succResult: 'result', ...setting })

/**
 * 下架公告
 * PATCH /teamweb/site/${path.st_sid}/announcement/${path.nn_sid}/unpublish
 * @param {Object} params - return value of action creator
 */
const unpublishSiteann = (setting = {}, data) => loadtest({ url: formatUrl(`/teamweb/site/:st_sid/announcement/:nn_sid/unpublish`, data), method: 'PATCH', failResult: { result: false }, succResult: 'result', ...setting })

/**
 * 特定公告閱讀紀錄
 * GET /teamweb/site/${path.st_sid}/announcement/${path.nn_sid}/log
 * @param {Object} params - return value of action creator
 */
const getSiteannLogList = (setting = {}, data) => loadtest({ url: formatUrl(`/teamweb/site/:st_sid/announcement/:nn_sid/log`, data), method: 'GET', failResult: { result: false }, succResult: 'result', ...setting })

/**
 * 特定公告附件列表
 * GET /teamweb/site/${path.st_sid}/announcement/${path.nn_sid}/attach
 * @param {Object} params - return value of action creator
 */
const getSiteannAttachList = (setting = {}, data) => loadtest({ url: formatUrl(`/teamweb/site/:st_sid/announcement/:nn_sid/attach`, data), method: 'GET', failResult: { result: false }, succResult: 'result', ...setting })

/**
 * 修改發布公告。複製公告並產生暫存公告 (重新發布公告)
 * PUT /teamweb/site/${path.st_sid}/announcement/${path.nn_sid}
 * @param {Object} params - return value of action creator
 */
const copySiteann = (setting = {}, data) => loadtest({ url: formatUrl(`/teamweb/site/:st_sid/announcement/:nn_sid`, data), method: 'PUT', failResult: { result: false }, succResult: 'result', ...setting })

module.exports = {
    getSiteannList,
    getSiteannSubjectList,
    newPubSiteannouncement,
    newSavedSiteannouncement,
    getSiteannUnreadCount,
    expediteSiteannouncement,
    getSitennDetail,
    updateAndPublishSiteann,
    updateAndSaveSiteann,
    deleteSiteannouncement,
    unpublishSiteann,
    getSiteannLogList,
    getSiteannAttachList,
    copySiteann,
}
