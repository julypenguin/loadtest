const loadtest = require("../../../lib/loadtest");
const formatUrl = require("../../../lib/formatUrl");

/**
 * 取得公告列表
 * GET /core/announcement
 * @param {Object} params - return value of action creator
 */
const getAnnList = (setting = {}, data) => loadtest({ url: formatUrl(`/core/announcement/`, data), method: 'GET', ...setting })

/**
 * 新增暫存公告並發佈
 * POST /core/announcement/publish
 * @param {Object} params - return value of action creator
 */
const newPubAnnouncement = (setting = {}, data) => loadtest({ url: formatUrl(`/core/announcement/publish`, data), method: 'POST', ...setting })

/**
 * 新增暫存公告
 * POST /core/announcement/save
 * @param {Object} params - return value of action creator
 */
const newSavedAnnouncement = (setting = {}, data) => loadtest({ url: formatUrl(`/core/announcement/save`, data), method: 'POST', ...setting })

/**
 * 取得個人公告未讀數量
 * GET /core/announcement/unread
 * @param {Object} params - return value of action creator
 */
const getAnnUnreadCount = (setting = {}, data) => loadtest({ url: formatUrl(`/core/announcement/unread`, data), method: 'GET', ...setting })

/**
 * 批次公告稽催
 * POST /core/announcement/expedite
 * @param {Object} params - return value of action creator
 */
const expediteAnnouncement = (setting = {}, data) => loadtest({ url: formatUrl(`/core/announcement/expedite`, data), method: 'POST', ...setting })

/**
 * 取得特定公告
 * GET /core/announcement/${path.nn_sid}
 * @param {Object} params - return value of action creator
 */
const getAnnDetail = (setting = {}, data) => loadtest({ url: formatUrl(`/core/announcement/:nn_sid`, data), method: 'GET', ...setting })

/**
 * 修改暫存公告並發佈
 * POST /core/announcement/${path.nn_sid}
 * @param {Object} params - return value of action creator
 */
const updateAndPublish = (setting = {}, data) => loadtest({ url: formatUrl(`/core/announcement/:nn_sid`, data), method: 'POST', ...setting })

/**
 * 修改暫存公告
 * PATCH /core/announcement/${path.nn_sid}
 * @param {Object} params - return value of action creator
 */
const updateAndSaveAnn = (setting = {}, data) => loadtest({ url: formatUrl(`/core/announcement/:nn_sid`, data), method: 'PATCH', ...setting })

/**
 * 刪除暫存公告
 * DELETE /core/announcement/${path.nn_sid}
 * @param {Object} params - return value of action creator
 */
const deleteAnnouncement = (setting = {}, data) => loadtest({ url: formatUrl(`/core/announcement/:nn_sid`, data), method: 'DELETE', ...setting })

/**
 * 下架公告
 * PATCH /core/announcement/${path.nn_sid}/unpublish
 * @param {Object} params - return value of action creator
 */
const unpublishAnn = (setting = {}, data) => loadtest({ url: formatUrl(`/core/announcement/:nn_sid/unpublish`, data), method: 'PATCH', ...setting })

/**
 * 特定公告閱讀紀錄
 * GET /core/announcement/${path.nn_sid}/log
 * @param {Object} params - return value of action creator
 */
const getAnnLogList = (setting = {}, data) => loadtest({ url: formatUrl(`/core/announcement/:nn_sid/log`, data), method: 'GET', ...setting })

/**
 * 特定公告附件列表
 * GET /core/announcement/${path.nn_sid}/attach
 * @param {Object} params - return value of action creator
 */
const getAnnAttachList = (setting = {}, data) => loadtest({ url: formatUrl(`/core/announcement/:nn_sid/attach`, data), method: 'GET', ...setting })

/**
 * 修改發布公告。複製公告並產生暫存公告 (重新發布公告)
 * PUT /core/announcement/${path.nn_sid}
 * @param {Object} params - return value of action creator
 */
const copyAnnUpdata = (setting = {}, data) => loadtest({ url: formatUrl(`/core/announcement/:nn_sid`, data), method: 'PUT', ...setting })

module.exports = {
    getAnnList,
    newPubAnnouncement,
    newSavedAnnouncement,
    getAnnUnreadCount,
    expediteAnnouncement,
    getAnnDetail,
    updateAndPublish,
    updateAndSaveAnn,
    deleteAnnouncement,
    unpublishAnn,
    getAnnLogList,
    getAnnAttachList,
    copyAnnUpdata,
}
