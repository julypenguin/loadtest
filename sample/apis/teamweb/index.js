const calendar = require('./calendar')
const drivetask = require('./drivetask')
const forumpost = require('./forumpost')
const fs = require('./fs')
const fsdir = require('./fsdir')
const hyperlink = require('./hyperlink')
const me = require('./me')
const meetingroom = require('./meetingroom')
const mysitesurvey = require('./mysitesurvey')
const share = require('./share')
const site = require('./site')
const siteann = require('./siteann')
const sitecalendar = require('./sitecalendar')
const sitegroup = require('./sitegroup')
const sitemarq = require('./sitemarq')
const sitesurvey = require('./sitesurvey')
const sitetype = require('./sitetype')

module.exports = {
    ...calendar,
    ...drivetask,
    ...forumpost,
    ...fs,
    ...fsdir,
    ...hyperlink,
    ...me,
    ...meetingroom,
    ...mysitesurvey,
    ...share,
    ...site,
    ...siteann,
    ...sitecalendar,
    ...sitegroup,
    ...sitemarq,
    ...sitesurvey,
    ...sitetype,
}