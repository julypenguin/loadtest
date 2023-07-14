const loadtest = require("../lib/loadtest");
const fs = require('fs');

const repeat = 1

const login = loadtest({ url: '/core/login', method: 'POST', repeat, succResult: { result: true } })
const getAnnList = loadtest({ url: '/core/announcement?enable_state=1&is_read=-1', repeat })

const total_res_time_list = [] // 陣列紀錄所有下面一系列 api 分別總回傳時間
let fastest_total_res_time = 0 // 下面一系列 api 總回傳時間最快的
let slowest_total_res_time = 0 // 下面一系列 api 總回傳時間最慢的

for (let i = 1; i <= repeat; i++) {
    let total_res_time = 0 // 下面一系列 api 總回傳時間
    login
        .test({
            body: {
                account: ``,
                ao_sid: '',
                password: ''
            },
        })
        .then((res_time) => {
            total_res_time = total_res_time + res_time
            return getAnnList.test({
                headers: {
                    page: i,
                }
            }, login.cookie)
        })
        .then((res_time) => {
            total_res_time = total_res_time + res_time
            total_res_time_list.push(total_res_time)

            fastest_total_res_time = total_res_time < fastest_total_res_time || !fastest_total_res_time ? total_res_time : fastest_total_res_time
            slowest_total_res_time = total_res_time > slowest_total_res_time ? total_res_time : slowest_total_res_time

            if (total_res_time_list.length === repeat) {
                const avg_total_res_time = total_res_time_list.reduce((acc, time) => acc + time, 0) / repeat
                try {
                    fs.writeFileSync('../test.json', JSON.stringify({
                        login: { ...login, time_list: [], error_list: [] },
                        getAnnList: { ...getAnnList, time_list: [], error_list: [] },
                        fastest_total_res_time,
                        slowest_total_res_time,
                        avg_total_res_time,
                    }, null, "\t"));
                } catch (err) {
                    console.error(err);
                }

                try {
                    fs.writeFileSync('../test_row.json', JSON.stringify({
                        login: {
                            time_list: login.time_list,
                            error_list: login.error_list,
                        },
                        getAnnList: {
                            time_list: getAnnList.time_list,
                            error_list: getAnnList.error_list,
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
