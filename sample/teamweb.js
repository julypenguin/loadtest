const apis = require('./apis/index')
const record = require('../lib/record')
const cmd = require("../lib/cmd");
const repeat = cmd.concurrency

const Authorization = `Bearer `

const apisRecord = record()

function loop({ api, apisRecord }) {
    let idx = 0
    return {
        run(...option) {
            if (!option.length) option = [{}]
            headers = option[0].headers || {}
            option[0].headers = {
                Authorization,
                ...headers,
            }
            for (let i = 1; i <= repeat; i++) {
                api
                    .test(...option)
                    .then(({ res_time, res }) => {
                        idx = idx + 1
                        console.log(idx)
                        apisRecord.finish(i, res_time)
                    })
                    .catch((error) => {
                        apisRecord.finish(i)
                        console.log('error', error)
                    })
            }
        }
    }
}

// 取得行事曆事件列表
const _getTeamwebCalendarList = apis.getTeamwebCalendarList({ apiName: 'getTeamwebCalendarList' })
if (Number(cmd.xMode) === 1) {
    // apisRecord.addApi = _getTeamwebCalendarList
    // loop({
    //     api: _getTeamwebCalendarList,
    //     apisRecord,
    // }) 
} 
// 特定行事曆事件
const _getTeamwebCalendarDetail = apis.getTeamwebCalendarDetail({ apiName: 'getTeamwebCalendarDetail' })
if (Number(cmd.xMode) === 2) {
    // apisRecord.addApi = _getTeamwebCalendarDetail
    // loop({
    //     api: _getTeamwebCalendarDetail,
    //     apisRecord,
    // }) 
} 
// 新增行事曆事件
const _newTeamwebCalendar = apis.newTeamwebCalendar({ apiName: 'newTeamwebCalendar' })
if (Number(cmd.xMode) === 3) {
    // apisRecord.addApi = _newTeamwebCalendar
    // loop({
    //     api: _newTeamwebCalendar,
    //     apisRecord,
    // }) 
} 
// 修改特定我的行事曆事件
const _updateTeamwebCalendar = apis.updateTeamwebCalendar({ apiName: 'updateTeamwebCalendar' })
if (Number(cmd.xMode) === 4) {
    // apisRecord.addApi = _updateTeamwebCalendar
    // loop({
    //     api: _updateTeamwebCalendar,
    //     apisRecord,
    // }) 
} 
// 反饋特定行事曆事件
const _approveTeamwebCalendar = apis.approveTeamwebCalendar({ apiName: 'approveTeamwebCalendar' })
if (Number(cmd.xMode) === 5) {
    // apisRecord.addApi = _approveTeamwebCalendar
    // loop({
    //     api: _approveTeamwebCalendar,
    //     apisRecord,
    // }) 
} 
// 批次修改我的特定行事曆事件參與人員列表
const _updateTeamwebCalendarAttend = apis.updateTeamwebCalendarAttend({ apiName: 'updateTeamwebCalendarAttend' })
if (Number(cmd.xMode) === 6) {
    // apisRecord.addApi = _updateTeamwebCalendarAttend
    // loop({
    //     api: _updateTeamwebCalendarAttend,
    //     apisRecord,
    // }) 
} 
// 刪除特定我的行事曆事件
const _deleteTeamwebCalendar = apis.deleteTeamwebCalendar({ apiName: 'deleteTeamwebCalendar' })
if (Number(cmd.xMode) === 7) {
    // apisRecord.addApi = _deleteTeamwebCalendar
    // loop({
    //     api: _deleteTeamwebCalendar,
    //     apisRecord,
    // }) 
} 

// 全組織檔案系統任務列表
const _getDrivetaskList = apis.getDrivetaskList({ apiName: 'getDrivetaskList' })
if (Number(cmd.xMode) === 8) {
    // apisRecord.addApi = _getDrivetaskList
    // loop({
    //     api: _getDrivetaskList,
    //     apisRecord,
    // }) 
} 
// 特定檔案系統任務的狀態
const _getDrivetaskDetail = apis.getDrivetaskDetail({ apiName: 'getDrivetaskDetail' })
if (Number(cmd.xMode) === 9) {
    // apisRecord.addApi = _getDrivetaskDetail
    // loop({
    //     api: _getDrivetaskDetail,
    //     apisRecord,
    // }) 
} 
// 刪除特定目錄或檔案的分享的人員
const _deleteDrivetask = apis.deleteDrivetask({ apiName: 'deleteDrivetask' })
if (Number(cmd.xMode) === 10) {
    // apisRecord.addApi = _deleteDrivetask
    // loop({
    //     api: _deleteDrivetask,
    //     apisRecord,
    // }) 
} 

// ----------------------------------------------------------------------------------------------------------------

// 特定討論區貼文或回覆詳細資料
const _getForumpostDetail = apis.getForumpostDetail({ apiName: 'getForumpostDetail' })
if (Number(cmd.xMode) === 11) {
    // apisRecord.addApi = _getForumpostDetail
    // loop({
    //     api: _getForumpostDetail,
    //     apisRecord,
    // }) 
} 
// 特定討論區文章列表
const _getForumpostList = apis.getForumpostList({ apiName: 'getForumpostList' })
if (Number(cmd.xMode) === 12) {
    // apisRecord.addApi = _getForumpostList
    // loop({
    //     api: _getForumpostList,
    //     apisRecord,
    // }) 
} 
// 特定貼文回覆列表
const _getForumpostReplyList = apis.getForumpostReplyList({ apiName: 'getForumpostReplyList' })
if (Number(cmd.xMode) === 13) {
    // apisRecord.addApi = _getForumpostReplyList
    // loop({
    //     api: _getForumpostReplyList,
    //     apisRecord,
    // }) 
} 
// 發布特定討論區文章
const _publishForumpost = apis.publishForumpost({ apiName: 'publishForumpost' })
if (Number(cmd.xMode) === 14) {
    // apisRecord.addApi = _publishForumpost
    // loop({
    //     api: _publishForumpost,
    //     apisRecord,
    // }) 
} 
// 回覆特定貼文
const _replyForumpost = apis.replyForumpost({ apiName: 'replyForumpost' })
if (Number(cmd.xMode) === 15) {
    // apisRecord.addApi = _replyForumpost
    // loop({
    //     api: _replyForumpost,
    //     apisRecord,
    // }) 
} 
// 修改特定討論區貼文或回覆
const _updateForumpost = apis.updateForumpost({ apiName: 'updateForumpost' })
if (Number(cmd.xMode) === 16) {
    // apisRecord.addApi = _updateForumpost
    // loop({
    //     api: _updateForumpost,
    //     apisRecord,
    // }) 
} 
// 刪除特定討論區貼文或回覆
const _deleteForumpost = apis.deleteForumpost({ apiName: 'deleteForumpost' })
if (Number(cmd.xMode) === 17) {
    // apisRecord.addApi = _deleteForumpost
    // loop({
    //     api: _deleteForumpost,
    //     apisRecord,
    // }) 
} 

// ---------------------------------------------------------------------------------------------------

// 檔案系統概觀資訊
const _getFsInfo = apis.getFsInfo({ apiName: 'getFsInfo' })
if (Number(cmd.xMode) === 18) {
    // apisRecord.addApi = _getFsInfo
    // loop({
    //     api: _getFsInfo,
    //     apisRecord,
    // }) 
} 
// 特定目錄或檔案下載
const _downloadFs = apis.downloadFs({ apiName: 'downloadFs' })
if (Number(cmd.xMode) === 19) {
    // apisRecord.addApi = _downloadFs
    // loop({
    //     api: _downloadFs,
    //     apisRecord,
    // }) 
} 
// 批次復原已刪除檔案或目錄
const _recoverFs = apis.recoverFs({ apiName: 'recoverFs' })
if (Number(cmd.xMode) === 20) {
    // apisRecord.addApi = _recoverFs
    // loop({
    //     api: _recoverFs,
    //     apisRecord,
    // }) 
} 
// 批次移動檔案或目錄
const _moveFs = apis.moveFs({ apiName: 'moveFs' })
if (Number(cmd.xMode) === 21) {
    // apisRecord.addApi = _moveFs
    // loop({
    //     api: _moveFs,
    //     apisRecord,
    // }) 
} 
// 批次複製檔案與目錄
const _copyFs = apis.copyFs({ apiName: 'copyFs' })
if (Number(cmd.xMode) === 22) {
    // apisRecord.addApi = _copyFs
    // loop({
    //     api: _copyFs,
    //     apisRecord,
    // }) 
} 
// 批次刪除檔案或目錄
const _removeFs = apis.removeFs({ apiName: 'removeFs' })
if (Number(cmd.xMode) === 23) {
    // apisRecord.addApi = _removeFs
    // loop({
    //     api: _removeFs,
    //     apisRecord,
    // }) 
} 

// ------------------------------------------------------------------------------------------------------

// 特定目錄或檔案詳細資訊
const _getFsdirInfo = apis.getFsdirInfo({ apiName: 'getFsdirInfo' })
if (Number(cmd.xMode) === 24) {
    // apisRecord.addApi = _getFsdirInfo
    // loop({
    //     api: _getFsdirInfo,
    //     apisRecord,
    // }) 
} 
// 取得特定目錄下所有可讀的目錄與子目錄
const _getFsdirDirList = apis.getFsdirDirList({ apiName: 'getFsdirDirList' })
if (Number(cmd.xMode) === 25) {
    // apisRecord.addApi = _getFsdirDirList
    // loop({
    //     api: _getFsdirDirList,
    //     apisRecord,
    // }) 
} 
// 特定目錄下的檔案與目錄列表
const _getFsdirList = apis.getFsdirList({ apiName: 'getFsdirList' })
if (Number(cmd.xMode) === 26) {
    // apisRecord.addApi = _getFsdirList
    // loop({
    //     api: _getFsdirList,
    //     apisRecord,
    // }) 
} 
// 搜尋特定目錄下(包含子目錄)的檔案列表
const _searchFsdir = apis.searchFsdir({ apiName: 'searchFsdir' })
if (Number(cmd.xMode) === 27) {
    // apisRecord.addApi = _searchFsdir
    // loop({
    //     api: _searchFsdir,
    //     apisRecord,
    // }) 
} 
// 特定目錄下被標記垃圾的檔案與目錄詳細資訊
const _getFsdirTrashList = apis.getFsdirTrashList({ apiName: 'getFsdirTrashList' })
if (Number(cmd.xMode) === 28) {
    // apisRecord.addApi = _getFsdirTrashList
    // loop({
    //     api: _getFsdirTrashList,
    //     apisRecord,
    // }) 
} 
// 特定目錄下被標記垃圾的檔案與目錄列表
const _trashFsdir = apis.trashFsdir({ apiName: 'trashFsdir' })
if (Number(cmd.xMode) === 29) {
    // apisRecord.addApi = _trashFsdir
    // loop({
    //     api: _trashFsdir,
    //     apisRecord,
    // }) 
} 
// 取得檔案歷史版本
const _getFsdirHistoryList = apis.getFsdirHistoryList({ apiName: 'getFsdirHistoryList' })
if (Number(cmd.xMode) === 30) {
    // apisRecord.addApi = _getFsdirHistoryList
    // loop({
    //     api: _getFsdirHistoryList,
    //     apisRecord,
    // }) 
} 
// 特定目錄下新增目錄
const _newFsdir = apis.newFsdir({ apiName: 'newFsdir' })
if (Number(cmd.xMode) === 31) {
    // apisRecord.addApi = _newFsdir
    // loop({
    //     api: _newFsdir,
    //     apisRecord,
    // }) 
} 
// 特定目錄下關聯指定檔案
const _fileFsdir = apis.fileFsdir({ apiName: 'fileFsdir' })
if (Number(cmd.xMode) === 32) {
    // apisRecord.addApi = _fileFsdir
    // loop({
    //     api: _fileFsdir,
    //     apisRecord,
    // }) 
} 
// 特定檔案建立捷徑
const _shortcutFsdir = apis.shortcutFsdir({ apiName: 'shortcutFsdir' })
if (Number(cmd.xMode) === 33) {
    // apisRecord.addApi = _shortcutFsdir
    // loop({
    //     api: _shortcutFsdir,
    //     apisRecord,
    // }) 
} 
// 特定檔案建立新版本
const _patchFsdirVersion = apis.patchFsdirVersion({ apiName: 'patchFsdirVersion' })
if (Number(cmd.xMode) === 34) {
    // apisRecord.addApi = _patchFsdirVersion
    // loop({
    //     api: _patchFsdirVersion,
    //     apisRecord,
    // }) 
} 
// 特定檔案或目錄重新命名
const _nameFsdir = apis.nameFsdir({ apiName: 'nameFsdir' })
if (Number(cmd.xMode) === 35) {
    // apisRecord.addApi = _nameFsdir
    // loop({
    //     api: _nameFsdir,
    //     apisRecord,
    // }) 
} 

// --------------------------------------------------------------------------------------------------

// 網站常用連結列表
const _getHyperlinkList = apis.getHyperlinkList({ apiName: 'getHyperlinkList' })
if (Number(cmd.xMode) === 36) {
    // apisRecord.addApi = _getHyperlinkList
    // loop({
    //     api: _getHyperlinkList,
    //     apisRecord,
    // }) 
} 
// 新增網站常用連結
const _newHyperlink = apis.newHyperlink({ apiName: 'newHyperlink' })
if (Number(cmd.xMode) === 37) {
    // apisRecord.addApi = _newHyperlink
    // loop({
    //     api: _newHyperlink,
    //     apisRecord,
    // }) 
} 
// 修改特定網站常用連結
const _updateHyperlink = apis.updateHyperlink({ apiName: 'updateHyperlink' })
if (Number(cmd.xMode) === 38) {
    // apisRecord.addApi = _updateHyperlink
    // loop({
    //     api: _updateHyperlink,
    //     apisRecord,
    // }) 
} 
// 特定網站常用連結的指定排序
const _shiftHyperlink = apis.shiftHyperlink({ apiName: 'shiftHyperlink' })
if (Number(cmd.xMode) === 39) {
    // apisRecord.addApi = _shiftHyperlink
    // loop({
    //     api: _shiftHyperlink,
    //     apisRecord,
    // }) 
} 
// 刪除特定網站常用連結
const _deleteHyperlink = apis.deleteHyperlink({ apiName: 'deleteHyperlink' })
if (Number(cmd.xMode) === 40) {
    // apisRecord.addApi = _deleteHyperlink
    // loop({
    //     api: _deleteHyperlink,
    //     apisRecord,
    // }) 
} 

// 取得我的小組網站列表
const _getMySiteList = apis.getMySiteList({ apiName: 'getMySiteList' })
if (Number(cmd.xMode) === 41) {
    // apisRecord.addApi = _getMySiteList
    // loop({
    //     api: _getMySiteList,
    //     apisRecord,
    // }) 
} 
// 取得我的壓縮任務狀態列表
const _getMyDrivetaskList = apis.getMyDrivetaskList({ apiName: 'getMyDrivetaskList' })
if (Number(cmd.xMode) === 42) {
    // apisRecord.addApi = _getMyDrivetaskList
    // loop({
    //     api: _getMyDrivetaskList,
    //     apisRecord,
    // }) 
} 
// 我被分享的檔案或目錄列表
const _getMysharelist = apis.getMysharelist({ apiName: 'getMysharelist' })
if (Number(cmd.xMode) === 43) {
    // apisRecord.addApi = _getMysharelist
    // loop({
    //     api: _getMysharelist,
    //     apisRecord,
    // }) 
} 

// -------------------------------------------------------------------------------------------------------

// 小組網站會議室列表
const _getMeetingroomList = apis.getMeetingroomList({ apiName: 'getMeetingroomList' })
if (Number(cmd.xMode) === 44) {
    // apisRecord.addApi = _getMeetingroomList
    // loop({
    //     api: _getMeetingroomList,
    //     apisRecord,
    // }) 
} 
// 新增小組網站會議室
const _newMeetingroom = apis.newMeetingroom({ apiName: 'newMeetingroom' })
if (Number(cmd.xMode) === 45) {
    // apisRecord.addApi = _newMeetingroom
    // loop({
    //     api: _newMeetingroom,
    //     apisRecord,
    // }) 
} 
// 修改特定小組網站會議室
const _updateMeetingroom = apis.updateMeetingroom({ apiName: 'updateMeetingroom' })
if (Number(cmd.xMode) === 46) {
    // apisRecord.addApi = _updateMeetingroom
    // loop({
    //     api: _updateMeetingroom,
    //     apisRecord,
    // }) 
} 
// 刪除特定小組網站會議室
const _deleteMeetingroom = apis.deleteMeetingroom({ apiName: 'deleteMeetingroom' })
if (Number(cmd.xMode) === 47) {
    // apisRecord.addApi = _deleteMeetingroom
    // loop({
    //     api: _deleteMeetingroom,
    //     apisRecord,
    // }) 
} 

// ------------------------------------------------------------------------------------------------------------

// 取得我能作答的問卷列表
const _getMysitesurveyList = apis.getMysitesurveyList({ apiName: 'getMysitesurveyList' })
if (Number(cmd.xMode) === 48) {
    // apisRecord.addApi = _getMysitesurveyList
    // loop({
    //     api: _getMysitesurveyList,
    //     apisRecord,
    // }) 
} 
// 特定我能作答的問卷細節
const _getMysitesurveyDetail = apis.getMysitesurveyDetail({ apiName: 'getMysitesurveyDetail' })
if (Number(cmd.xMode) === 49) {
    // apisRecord.addApi = _getMysitesurveyDetail
    // loop({
    //     api: _getMysitesurveyDetail,
    //     apisRecord,
    // }) 
} 
// 提交特定我能作答的問卷
const _submitMysitesurvey = apis.submitMysitesurvey({ apiName: 'submitMysitesurvey' })
if (Number(cmd.xMode) === 50) {
    // apisRecord.addApi = _submitMysitesurvey
    // loop({
    //     api: _submitMysitesurvey,
    //     apisRecord,
    // }) 
} 

// ----------------------------------------------------------------------------------------------------------------

// 特定目錄或檔案的分享設定列表
const _getShareList = apis.getShareList({ apiName: 'getShareList' })
if (Number(cmd.xMode) === 51) {
    // apisRecord.addApi = _getShareList
    // loop({
    //     api: _getShareList,
    //     apisRecord,
    // }) 
} 
// 新增特定目錄或檔案的分享
const _newShare = apis.newShare({ apiName: 'newShare' })
if (Number(cmd.xMode) === 52) {
    // apisRecord.addApi = _newShare
    // loop({
    //     api: _newShare,
    //     apisRecord,
    // }) 
} 
// 批次更新特定目錄或檔案的分享權限設定
const _updateShare = apis.updateShare({ apiName: 'updateShare' })
if (Number(cmd.xMode) === 53) {
    // apisRecord.addApi = _updateShare
    // loop({
    //     api: _updateShare,
    //     apisRecord,
    // }) 
} 
// 刪除特定目錄或檔案的分享的人員
const _deleteShare = apis.deleteShare({ apiName: 'deleteShare' })
if (Number(cmd.xMode) === 54) {
    // apisRecord.addApi = _deleteShare
    // loop({
    //     api: _deleteShare,
    //     apisRecord,
    // }) 
} 

// ----------------------------------------------------------------------------------------------------------

// 特定小組網站細節
const _getSiteDetail = apis.getSiteDetail({ apiName: 'getSiteDetail' })
if (Number(cmd.xMode) === 55) {
    // apisRecord.addApi = _getSiteDetail
    // loop({
    //     api: _getSiteDetail,
    //     apisRecord,
    // }) 
} 
// 取得全組織小組網站
const _getSiteList = apis.getSiteList({ apiName: 'getSiteList' })
if (Number(cmd.xMode) === 56) {
    // apisRecord.addApi = _getSiteList
    // loop({
    //     api: _getSiteList,
    //     apisRecord,
    // }) 
} 
// 特定人員的小組權限
const _getSiteMemberDetail = apis.getSiteMemberDetail({ apiName: 'getSiteMemberDetail' })
if (Number(cmd.xMode) === 57) {
    // apisRecord.addApi = _getSiteMemberDetail
    // loop({
    //     api: _getSiteMemberDetail,
    //     apisRecord,
    // }) 
} 
// 小組網站成員列表
const _getSiteMemberList = apis.getSiteMemberList({ apiName: 'getSiteMemberList' })
if (Number(cmd.xMode) === 58) {
    // apisRecord.addApi = _getSiteMemberList
    // loop({
    //     api: _getSiteMemberList,
    //     apisRecord,
    // }) 
} 
// 特定小組網站子頁面列表
const _getSubpageList = apis.getSubpageList({ apiName: 'getSubpageList' })
if (Number(cmd.xMode) === 59) {
    // apisRecord.addApi = _getSubpageList
    // loop({
    //     api: _getSubpageList,
    //     apisRecord,
    // }) 
} 
// 特定小組網站討論區搜尋
const _searchSiteForum = apis.searchSiteForum({ apiName: 'searchSiteForum' })
if (Number(cmd.xMode) === 60) {
    // apisRecord.addApi = _searchSiteForum
    // loop({
    //     api: _searchSiteForum,
    //     apisRecord,
    // }) 
} 
// 特定小組網站 HTML 模組搜尋
const _searchSiteHtml = apis.searchSiteHtml({ apiName: 'searchSiteHtml' })
if (Number(cmd.xMode) === 61) {
    // apisRecord.addApi = _searchSiteHtml
    // loop({
    //     api: _searchSiteHtml,
    //     apisRecord,
    // }) 
} 
// 特定小組網站 HTML 模組搜尋
const _getSiteHistoryList = apis.getSiteHistoryList({ apiName: 'getSiteHistoryList' })
if (Number(cmd.xMode) === 62) {
    // apisRecord.addApi = _getSiteHistoryList
    // loop({
    //     api: _getSiteHistoryList,
    //     apisRecord,
    // }) 
} 
// 特定小組網站幾天內的瀏覽次數
const _getSiteViewcount = apis.getSiteViewcount({ apiName: 'getSiteViewcount' })
if (Number(cmd.xMode) === 63) {
    // apisRecord.addApi = _getSiteViewcount
    // loop({
    //     api: _getSiteViewcount,
    //     apisRecord,
    // }) 
} 
// 特定小組網站使用容量總和 (MB)
const _getSiteDiskusage = apis.getSiteDiskusage({ apiName: 'getSiteDiskusage' })
if (Number(cmd.xMode) === 64) {
    // apisRecord.addApi = _getSiteDiskusage
    // loop({
    //     api: _getSiteDiskusage,
    //     apisRecord,
    // }) 
} 
// 批准或拒絕人員加入
const _approveSiteMember = apis.approveSiteMember({ apiName: 'approveSiteMember' })
if (Number(cmd.xMode) === 65) {
    // apisRecord.addApi = _approveSiteMember
    // loop({
    //     api: _approveSiteMember,
    //     apisRecord,
    // }) 
} 
// 批次邀請人員到小組網站
const _inviteSiteMember = apis.inviteSiteMember({ apiName: 'inviteSiteMember' })
if (Number(cmd.xMode) === 66) {
    // apisRecord.addApi = _inviteSiteMember
    // loop({
    //     api: _inviteSiteMember,
    //     apisRecord,
    // }) 
} 
// 新增小組網站
const _newSite = apis.newSite({ apiName: 'newSite' })
if (Number(cmd.xMode) === 67) {
    apisRecord.addApi = _newSite
    loop({
        api: _newSite,
        apisRecord,
    }).run({
        body: {
            "bg_color": "#FFFFFF",
            "padding": 25,
            "w": 1200,
            "st_name": "企鵝測試小組網站",
            "st_des": "企鵝測試小組網站",
            "stt_sid": "2",
            "pst_sid": "0"
        }
    })
} 

// 新增特定小組網站的子頁面
const _newSubpage = apis.newSubpage({ apiName: 'newSubpage' })
if (Number(cmd.xMode) === 68) {
    apisRecord.addApi = _newSubpage
    loop({
        api: _newSubpage,
        apisRecord,
    }).run({
        body: {
            "stt_sid": 0,
            "st_des": "",
            "st_icon": "",
            "st_name": "子頁面",
            "bg_color": "#FFFFFF",
            "padding": 25,
            "w": 1200
        }
    }, null, { st_sid: 3 })
} 
// 套用特定小組網站頁面歷史編輯紀錄
const _useSiteHistory = apis.useSiteHistory({ apiName: 'useSiteHistory' })
if (Number(cmd.xMode) === 69) {
    // apisRecord.addApi = _useSiteHistory
    // loop({
    //     api: _useSiteHistory,
    //     apisRecord,
    // }) 
} 
// 批次修改小組網站組件
const _updateSiteComponent = apis.updateSiteComponent({ apiName: 'updateSiteComponent' })
if (Number(cmd.xMode) === 70) {
    // apisRecord.addApi = _updateSiteComponent
    // loop({
    //     api: _updateSiteComponent,
    //     apisRecord,
    // }) 
} 
// 批次修改特定人員的小組權限
const _updateSiteMember = apis.updateSiteMember({ apiName: 'updateSiteMember' })
if (Number(cmd.xMode) === 71) {
    // apisRecord.addApi = _updateSiteMember
    // loop({
    //     api: _updateSiteMember,
    //     apisRecord,
    // }) 
} 
// 修改特定小組網站
const _updateSite = apis.updateSite({ apiName: 'updateSite' })
if (Number(cmd.xMode) === 72) {
    apisRecord.addApi = _updateSite
    loop({
        api: _updateSite,
        apisRecord,
    }).run({
        body: {
            "bg_color": "#FFFFFF",
            "padding": "25",
            "w": "1200",
            "status": 1,
            "st_name": "企鵝測試小組網站",
            "st_des": "企鵝測試小組網站",
            "stt_sid": "2"
        }
    }, null, { st_sid: 3 })
} 
// 排序特定小組網站順序
const _shiftSite = apis.shiftSite({ apiName: 'shiftSite' })
if (Number(cmd.xMode) === 73) {
    apisRecord.addApi = _shiftSite
    loop({
        api: _shiftSite,
        apisRecord,
    }).run({
        body: {
            "st_sort": 1
        }
    }, null, { st_sid: 3 })
}
// 移動特定小組網站位置
const _moveSite = apis.moveSite({ apiName: 'moveSite' })
if (Number(cmd.xMode) === 74) {
    apisRecord.addApi = _moveSite
    loop({
        api: _moveSite,
        apisRecord,
    }).run({
        body: {
            "pst_sid": 0
        }
    }, null, { st_sid: 4 })
} 
// 移動特定小組網站的特定組件到其他子頁面
const _moveSiteComponent = apis.moveSiteComponent({ apiName: 'moveSiteComponent' })
if (Number(cmd.xMode) === 75) {
    // apisRecord.addApi = _moveSiteComponent
    // loop({
    //     api: _moveSiteComponent,
    //     apisRecord,
    // }) 
} 
// 刪除特定小組網站
const _deleteSite = apis.deleteSite({ apiName: 'deleteSite' })
if (Number(cmd.xMode) === 76) {
    apisRecord.addApi = _deleteSite
    let idx = 0
    for (let i = 1; i <= repeat; i++) {
        _deleteSite
            .test({
                headers: {
                    Authorization,
                }
            }, null, { st_sid: 116 })
            .then(({ res_time, res }) => {
                idx = idx + 1
                console.log(idx)
                apisRecord.finish(i, res_time)
            })
            .catch((error) => {
                apisRecord.finish(i)
                console.log('error', error)
            })
    }
} 

// -----------------------------------------------------------------------------------------------------------

// 取得公告列表
const _getSiteannList = apis.getSiteannList({ apiName: 'getSiteannList' })
if (Number(cmd.xMode) === 77) {
    // apisRecord.addApi = _getSiteannList
    // loop({
    //     api: _getSiteannList,
    //     apisRecord,
    // }) 
} 
// 特定小組網站公告分類列表
const _getSiteannSubjectList = apis.getSiteannSubjectList({ apiName: 'getSiteannSubjectList' })
if (Number(cmd.xMode) === 78) {
    // apisRecord.addApi = _getSiteannSubjectList
    // loop({
    //     api: _getSiteannSubjectList,
    //     apisRecord,
    // }) 
} 
// 新增暫存公告並發佈
const _newPubSiteannouncement = apis.newPubSiteannouncement({ apiName: 'newPubSiteannouncement' })
if (Number(cmd.xMode) === 79) {
    // apisRecord.addApi = _newPubSiteannouncement
    // loop({
    //     api: _newPubSiteannouncement,
    //     apisRecord,
    // }) 
} 
// 新增暫存公告
const _newSavedSiteannouncement = apis.newSavedSiteannouncement({ apiName: 'newSavedSiteannouncement' })
if (Number(cmd.xMode) === 80) {
    // apisRecord.addApi = _newSavedSiteannouncement
    // loop({
    //     api: _newSavedSiteannouncement,
    //     apisRecord,
    // }) 
} 
// 取得個人公告未讀數量
const _getSiteannUnreadCount = apis.getSiteannUnreadCount({ apiName: 'getSiteannUnreadCount' })
if (Number(cmd.xMode) === 81) {
    // apisRecord.addApi = _getSiteannUnreadCount
    // loop({
    //     api: _getSiteannUnreadCount,
    //     apisRecord,
    // }) 
} 
// 批次公告稽催
const _expediteSiteannouncement = apis.expediteSiteannouncement({ apiName: 'expediteSiteannouncement' })
if (Number(cmd.xMode) === 82) {
    // apisRecord.addApi = _expediteSiteannouncement
    // loop({
    //     api: _expediteSiteannouncement,
    //     apisRecord,
    // }) 
} 
// 取得特定公告
const _getSitennDetail = apis.getSitennDetail({ apiName: 'getSitennDetail' })
if (Number(cmd.xMode) === 83) {
    // apisRecord.addApi = _getSitennDetail
    // loop({
    //     api: _getSitennDetail,
    //     apisRecord,
    // }) 
} 
// 修改暫存公告並發佈
const _updateAndPublishSiteann = apis.updateAndPublishSiteann({ apiName: 'updateAndPublishSiteann' })
if (Number(cmd.xMode) === 84) {
    // apisRecord.addApi = _updateAndPublishSiteann
    // loop({
    //     api: _updateAndPublishSiteann,
    //     apisRecord,
    // }) 
} 
// 修改暫存公告
const _updateAndSaveSiteann = apis.updateAndSaveSiteann({ apiName: 'updateAndSaveSiteann' })
if (Number(cmd.xMode) === 85) {
    // apisRecord.addApi = _updateAndSaveSiteann
    // loop({
    //     api: _updateAndSaveSiteann,
    //     apisRecord,
    // }) 
} 
// 刪除暫存公告
const _deleteSiteannouncement = apis.deleteSiteannouncement({ apiName: 'deleteSiteannouncement' })
if (Number(cmd.xMode) === 86) {
    // apisRecord.addApi = _deleteSiteannouncement
    // loop({
    //     api: _deleteSiteannouncement,
    //     apisRecord,
    // }) 
} 
// 下架公告
const _unpublishSiteann = apis.unpublishSiteann({ apiName: 'unpublishSiteann' })
if (Number(cmd.xMode) === 87) {
    // apisRecord.addApi = _unpublishSiteann
    // loop({
    //     api: _unpublishSiteann,
    //     apisRecord,
    // }) 
} 
// 特定公告閱讀紀錄
const _getSiteannLogList = apis.getSiteannLogList({ apiName: 'getSiteannLogList' })
if (Number(cmd.xMode) === 88) {
    // apisRecord.addApi = _getSiteannLogList
    // loop({
    //     api: _getSiteannLogList,
    //     apisRecord,
    // }) 
} 
// 特定公告附件列表
const _getSiteannAttachList = apis.getSiteannAttachList({ apiName: 'getSiteannAttachList' })
if (Number(cmd.xMode) === 89) {
    // apisRecord.addApi = _getSiteannAttachList
    // loop({
    //     api: _getSiteannAttachList,
    //     apisRecord,
    // }) 
} 
// 修改發布公告。複製公告並產生暫存公告 (重新發布公告)
const _copySiteann = apis.copySiteann({ apiName: 'copySiteann' })
if (Number(cmd.xMode) === 90) {
    // apisRecord.addApi = _copySiteann
    // loop({
    //     api: _copySiteann,
    //     apisRecord,
    // }) 
} 

// ------------------------------------------------------------------------------------------------------------------

// 取得行事曆事件列表
const _getSitecalendarList = apis.getSitecalendarList({ apiName: 'getSitecalendarList' })
if (Number(cmd.xMode) === 91) {
    // apisRecord.addApi = _getSitecalendarList
    // loop({
    //     api: _getSitecalendarList,
    //     apisRecord,
    // }) 
} 
// 特定行事曆事件
const _getSitecalendarDetail = apis.getSitecalendarDetail({ apiName: 'getSitecalendarDetail' })
if (Number(cmd.xMode) === 92) {
    // apisRecord.addApi = _getSitecalendarDetail
    // loop({
    //     api: _getSitecalendarDetail,
    //     apisRecord,
    // }) 
} 
// 新增行事曆事件
const _newSitecalendar = apis.newSitecalendar({ apiName: 'newSitecalendar' })
if (Number(cmd.xMode) === 93) {
    // apisRecord.addApi = _newSitecalendar
    // loop({
    //     api: _newSitecalendar,
    //     apisRecord,
    // }) 
} 
// 修改特定我的行事曆事件
const _updateSitecalendar = apis.updateSitecalendar({ apiName: 'updateSitecalendar' })
if (Number(cmd.xMode) === 94) {
    // apisRecord.addApi = _updateSitecalendar
    // loop({
    //     api: _updateSitecalendar,
    //     apisRecord,
    // }) 
} 
// 反饋特定行事曆事件(不一定是我的)
const _approveSitecalendar = apis.approveSitecalendar({ apiName: 'approveSitecalendar' })
if (Number(cmd.xMode) === 95) {
    // apisRecord.addApi = _approveSitecalendar
    // loop({
    //     api: _approveSitecalendar,
    //     apisRecord,
    // }) 
} 
// 批次修改我的特定行事曆事件參與人員列表
const _updateSitecalendarAttend = apis.updateSitecalendarAttend({ apiName: 'updateSitecalendarAttend' })
if (Number(cmd.xMode) === 96) {
    // apisRecord.addApi = _updateSitecalendarAttend
    // loop({
    //     api: _updateSitecalendarAttend,
    //     apisRecord,
    // }) 
} 
// 刪除特定我的行事曆事件
const _deleteSitecalendar = apis.deleteSitecalendar({ apiName: 'deleteSitecalendar' })
if (Number(cmd.xMode) === 97) {
    // apisRecord.addApi = _deleteSitecalendar
    // loop({
    //     api: _deleteSitecalendar,
    //     apisRecord,
    // }) 
} 

// ---------------------------------------------------------------------------------------------------------------

// 特定小組網站人員群組
const _getSitegroupDetail = apis.getSitegroupDetail({ apiName: 'getSitegroupDetail' })
if (Number(cmd.xMode) === 98) {
    // apisRecord.addApi = _getSitegroupDetail
    // loop({
    //     api: _getSitegroupDetail,
    //     apisRecord,
    // }) 
} 
// 小組網站人員群組列表
const _getSitegroupList = apis.getSitegroupList({ apiName: 'getSitegroupList' })
if (Number(cmd.xMode) === 99) {
    // apisRecord.addApi = _getSitegroupList
    // loop({
    //     api: _getSitegroupList,
    //     apisRecord,
    // }) 
} 
// 特定小組網站人員群組成員列表
const _getSitegroupMbrList = apis.getSitegroupMbrList({ apiName: 'getSitegroupMbrList' })
if (Number(cmd.xMode) === 100) {
    // apisRecord.addApi = _getSitegroupMbrList
    // loop({
    //     api: _getSitegroupMbrList,
    //     apisRecord,
    // }) 
} 
// 新增小組網站人員群組
const _newSitegroup = apis.newSitegroup({ apiName: 'newSitegroup' })
if (Number(cmd.xMode) === 101) {
    apisRecord.addApi = _newSitegroup
    loop({
        api: _newSitegroup,
        apisRecord,
    }).run({
        body: {
            "stg_name": "企鵝測試群組",
            "stg_des": "企鵝測試群組"
        }
    })
} 
// 批次修改特定小組網站人員群組成員
const _updateSitegroupMbr = apis.updateSitegroupMbr({ apiName: 'updateSitegroupMbr' })
if (Number(cmd.xMode) === 102) {
    apisRecord.addApi = _updateSitegroupMbr
    loop({
        api: _updateSitegroupMbr,
        apisRecord,
    }).run({
        body: {
            "member_list": [
                {
                    "aa_sid": 5,
                    "aa_id": "user1",
                    "aa_name": "使用者1",
                    "at_path": "1-1-1部門"
                }
            ]
        }
    }, null, { stg_sid: 2 })
} 

// 修改小組網站人員群組
const _updateSitegroup = apis.updateSitegroup({ apiName: 'updateSitegroup' })
if (Number(cmd.xMode) === 103) {
    apisRecord.addApi = _updateSitegroup
    loop({
        api: _updateSitegroup,
        apisRecord,
    }).run({
        body: {
            "stg_name": "企鵝測試群組1",
            "stg_des": "企鵝測試群組1"
        }
    }, null, { stg_sid: 2 })
} 

// 刪除小組網站人員群組
const _deleteSitegroup = apis.deleteSitegroup({ apiName: 'deleteSitegroup' })
if (Number(cmd.xMode) === 104) {
    apisRecord.addApi = _deleteSitegroup
    loop({
        api: _deleteSitegroup,
        apisRecord,
    }).run({}, null, { stg_sid: 503 })
} 

// ---------------------------------------------------------------------------------------------------------

// 取得跑馬燈列表
const _getSitemarqList = apis.getSitemarqList({ apiName: 'getSitemarqList' })
if (Number(cmd.xMode) === 105) {
    // apisRecord.addApi = _getSitemarqList
    // loop({
    //     api: _getSitemarqList,
    //     apisRecord,
    // }) 
} 
// 取得可以呈現的跑馬燈列表
const _getSitemarqPresentList = apis.getSitemarqPresentList({ apiName: 'getSitemarqPresentList' })
if (Number(cmd.xMode) === 106) {
    // apisRecord.addApi = _getSitemarqPresentList
    // loop({
    //     api: _getSitemarqPresentList,
    //     apisRecord,
    // }) 
} 
// 新增跑馬燈
const _newSitemarq = apis.newSitemarq({ apiName: 'newSitemarq' })
if (Number(cmd.xMode) === 107) {
    // apisRecord.addApi = _newSitemarq
    // loop({
    //     api: _newSitemarq,
    //     apisRecord,
    // }) 
} 
// 取得指定跑馬燈資訊
const _getSitemarqDetail = apis.getSitemarqDetail({ apiName: 'getSitemarqDetail' })
if (Number(cmd.xMode) === 108) {
    // apisRecord.addApi = _getSitemarqDetail
    // loop({
    //     api: _getSitemarqDetail,
    //     apisRecord,
    // }) 
} 
// 刪除指定跑馬燈
const _deleteSitemarq = apis.deleteSitemarq({ apiName: 'deleteSitemarq' })
if (Number(cmd.xMode) === 109) {
    // apisRecord.addApi = _deleteSitemarq
    // loop({
    //     api: _deleteSitemarq,
    //     apisRecord,
    // }) 
} 
// 更新指定跑馬燈資訊
const _updateSitemarq = apis.updateSitemarq({ apiName: 'updateSitemarq' })
if (Number(cmd.xMode) === 110) {
    // apisRecord.addApi = _updateSitemarq
    // loop({
    //     api: _updateSitemarq,
    //     apisRecord,
    // }) 
} 
// 特定特定小組網站跑馬燈指定排序
const _shiftSitemarq = apis.shiftSitemarq({ apiName: 'shiftSitemarq' })
if (Number(cmd.xMode) === 111) {
    // apisRecord.addApi = _shiftSitemarq
    // loop({
    //     api: _shiftSitemarq,
    //     apisRecord,
    // }) 
} 

// ---------------------------------------------------------------------------------------------------

// 取得問卷列表
const _getSitesurveyList = apis.getSitesurveyList({ apiName: 'getSitesurveyList' })
if (Number(cmd.xMode) === 112) {
    // apisRecord.addApi = _getSitesurveyList
    // loop({
    //     api: _getSitesurveyList,
    //     apisRecord,
    // }) 
} 
// 特定問卷細節
const _getSitesurveyDetail = apis.getSitesurveyDetail({ apiName: 'getSitesurveyDetail' })
if (Number(cmd.xMode) === 113) {
    // apisRecord.addApi = _getSitesurveyDetail
    // loop({
    //     api: _getSitesurveyDetail,
    //     apisRecord,
    // }) 
} 
// 得特定問卷的共同管理人員
const _getSitesurveyManagerList = apis.getSitesurveyManagerList({ apiName: 'getSitesurveyManagerList' })
if (Number(cmd.xMode) === 114) {
    // apisRecord.addApi = _getSitesurveyManagerList
    // loop({
    //     api: _getSitesurveyManagerList,
    //     apisRecord,
    // }) 
} 
// 取得特定問卷的參加人員列表
const _getSitesurveyAttendList = apis.getSitesurveyAttendList({ apiName: 'getSitesurveyAttendList' })
if (Number(cmd.xMode) === 115) {
    // apisRecord.addApi = _getSitesurveyAttendList
    // loop({
    //     api: _getSitesurveyAttendList,
    //     apisRecord,
    // }) 
} 
// 取得特定問卷的最終統計結果
const _getSitesurveyCountDetail = apis.getSitesurveyCountDetail({ apiName: 'getSitesurveyCountDetail' })
if (Number(cmd.xMode) === 116) {
    // apisRecord.addApi = _getSitesurveyCountDetail
    // loop({
    //     api: _getSitesurveyCountDetail,
    //     apisRecord,
    // }) 
} 
// 取得特定問卷及時狀態統計結果
const _getSitesurveyInsight = apis.getSitesurveyInsight({ apiName: 'getSitesurveyInsight' })
if (Number(cmd.xMode) === 117) {
    // apisRecord.addApi = _getSitesurveyInsight
    // loop({
    //     api: _getSitesurveyInsight,
    //     apisRecord,
    // }) 
} 
// 新增問卷並暫存
const _newSitesurvey = apis.newSitesurvey({ apiName: 'newSitesurvey' })
if (Number(cmd.xMode) === 118) {
    // apisRecord.addApi = _newSitesurvey
    // loop({
    //     api: _newSitesurvey,
    //     apisRecord,
    // }) 
} 
// 新增問卷並發佈
const _addpublishSitesurvey = apis.addpublishSitesurvey({ apiName: 'addpublishSitesurvey' })
if (Number(cmd.xMode) === 119) {
    // apisRecord.addApi = _addpublishSitesurvey
    // loop({
    //     api: _addpublishSitesurvey,
    //     apisRecord,
    // }) 
} 
// 修改並發佈特暫存問卷
const _publishSitesurvey = apis.publishSitesurvey({ apiName: 'publishSitesurvey' })
if (Number(cmd.xMode) === 120) {
    // apisRecord.addApi = _publishSitesurvey
    // loop({
    //     api: _publishSitesurvey,
    //     apisRecord,
    // }) 
} 
// 強制結束特定問卷
const _closeSitesurvey = apis.closeSitesurvey({ apiName: 'closeSitesurvey' })
if (Number(cmd.xMode) === 121) {
    // apisRecord.addApi = _closeSitesurvey
    // loop({
    //     api: _closeSitesurvey,
    //     apisRecord,
    // }) 
} 
// 統計並結算特定問卷
const _countSitesurvey = apis.countSitesurvey({ apiName: 'countSitesurvey' })
if (Number(cmd.xMode) === 122) {
    // apisRecord.addApi = _countSitesurvey
    // loop({
    //     api: _countSitesurvey,
    //     apisRecord,
    // }) 
} 
// 修改特定問卷並暫存
const _updateSitesurvey = apis.updateSitesurvey({ apiName: 'updateSitesurvey' })
if (Number(cmd.xMode) === 123) {
    // apisRecord.addApi = _updateSitesurvey
    // loop({
    //     api: _updateSitesurvey,
    //     apisRecord,
    // }) 
} 
// 批次修改特定問卷的共同管理人員
const _updateSitesurveyManager = apis.updateSitesurveyManager({ apiName: 'updateSitesurveyManager' })
if (Number(cmd.xMode) === 124) {
    // apisRecord.addApi = _updateSitesurveyManager
    // loop({
    //     api: _updateSitesurveyManager,
    //     apisRecord,
    // }) 
} 
// 刪除特定問卷
const _deleteSitesurvey = apis.deleteSitesurvey({ apiName: 'deleteSitesurvey' })
if (Number(cmd.xMode) === 125) {
    // apisRecord.addApi = _deleteSitesurvey
    // loop({
    //     api: _deleteSitesurvey,
    //     apisRecord,
    // }) 
} 

// ------------------------------------------------------------------------------------------------------------------

// 取得全組織小組網站類型
const _getSitetypeList = apis.getSitetypeList({ apiName: 'getSitetypeList' })
if (Number(cmd.xMode) === 126) {
    apisRecord.addApi = _getSitetypeList
    loop({
        api: _getSitetypeList,
        apisRecord,
    }).run()
} 
// 新增小組網站類型
const _newSitetype = apis.newSitetype({ apiName: 'newSitetype' })
if (Number(cmd.xMode) === 127) {
    apisRecord.addApi = _newSitetype
    loop({
        api: _newSitetype,
        apisRecord,
    }).run({
        body: {
            "stt_name": "企鵝測試類型",
            "stt_des": "企鵝測試類型"
        },
    })
} 

// 修改特定小組網站類型
const _updateSitetype = apis.updateSitetype({ apiName: 'updateSitetype' })
if (Number(cmd.xMode) === 128) {
    apisRecord.addApi = _updateSitetype
    loop({
        api: _updateSitetype,
        apisRecord,
    }).run({
        body: {
            "stt_name": "企鵝測試類型",
            "stt_des": "企鵝測試類型"
        },
    }, null, { stt_sid: 2 })
} 

// 特定小組網站類型的指定排序
const _shiftSitetype = apis.shiftSitetype({ apiName: 'shiftSitetype' })
if (Number(cmd.xMode) === 129) {
    apisRecord.addApi = _shiftSitetype
    loop({
        api: _shiftSitetype,
        apisRecord,
    })
        .run({
            body: {
                "stt_sort": 2
            }
        }, null, { stt_sid: 2 })
} 
// 刪除特定小組網站類型
const _deleteSitetype = apis.deleteSitetype({ apiName: 'deleteSitetype' })
if (Number(cmd.xMode) === 130) {
    apisRecord.addApi = _deleteSitetype
    let idx = 0
    for (let i = 1; i <= repeat; i++) {
        _deleteSitetype
            .test({
                headers: {
                    Authorization,
                }
            }, null, { stt_sid: 1451 - 500 + i })
            .then(({ res_time, res }) => {
                idx = idx + 1
                console.log(idx)
                apisRecord.finish(i, res_time)
            })
            .catch((error) => {
                apisRecord.finish(i)
                console.log('error', error)
            })
    }
} 

if (!cmd.xMode) {
    console.log('please set -x [number]')
}
