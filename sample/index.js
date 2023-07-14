const fs = require('fs');
const apis = require('./apis/index')

const repeat = 1

const _getAbout = apis.getAbout()
const _getAnnList = apis.getAnnList({}, { aa_sid: 123, bb_sid: 456, cc_sid: 789 })

const total_res_time_list = [] // 陣列紀錄所有下面一系列 api 分別總回傳時間
let fastest_total_res_time = 0 // 下面一系列 api 總回傳時間最快的
let slowest_total_res_time = 0 // 下面一系列 api 總回傳時間最慢的

for (let i = 1; i <= repeat; i++) {
    let total_res_time = 0 // 下面一系列 api 總回傳時間
    _getAnnList
        .test()
        // .then((res_time) => {
        //     total_res_time = total_res_time + res_time
        //     return getAnnList.test({
        //         headers: {
        //             page: i,
        //         }
        //     }, login.cookie)
        // })
        .then((res_time) => {
            total_res_time = total_res_time + res_time
            total_res_time_list.push(total_res_time)

            fastest_total_res_time = total_res_time < fastest_total_res_time || !fastest_total_res_time ? total_res_time : fastest_total_res_time
            slowest_total_res_time = total_res_time > slowest_total_res_time ? total_res_time : slowest_total_res_time

            if (total_res_time_list.length === repeat) {
                const avg_total_res_time = total_res_time_list.reduce((acc, time) => acc + time, 0) / repeat
                try {
                    fs.writeFileSync('../test.json', JSON.stringify({
                        getAbout: { ..._getAbout, time_list: [] },
                        fastest_total_res_time,
                        slowest_total_res_time,
                        avg_total_res_time,
                    }, null, "\t"));
                } catch (err) {
                    console.error(err);
                }

                try {
                    fs.writeFileSync('../test_row.json', JSON.stringify({
                        getAbout: {
                            time_list: _getAbout.time_list,
                            error_list: _getAbout.error_list,
                        },
                        total_res_time_list,
                    }, null, "\t"));
                } catch (err) {
                    console.error(err);
                }
            }
        })
        .catch(error => {

        })
}
