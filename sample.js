const loadtest = require("./loadtest");
const { exec } = require("child_process");

const repeat = 5

const login = loadtest({ url: '/core/login', method: 'POST', repeat })
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
            }
        })
        .then((res_time) => {
            total_res_time = total_res_time + res_time
            return getAnnList.test({ page: i }, login.cookie)
        })
        .then((res_time) => {
            total_res_time = total_res_time + res_time
            total_res_time_list.push(total_res_time)

            fastest_total_res_time = total_res_time < fastest_total_res_time || !fastest_total_res_time ? total_res_time : fastest_total_res_time
            slowest_total_res_time = total_res_time > slowest_total_res_time ? total_res_time : slowest_total_res_time

            if (total_res_time_list.length === repeat) {
                const avg_total_res_time = total_res_time_list.reduce((acc, time) => acc + time, 0) / repeat
                exec(`echo ${JSON.stringify({
                    login: { ...login, time_list: [] },
                    getAnnList: { ...getAnnList, time_list: [] },
                    fastest_total_res_time,
                    slowest_total_res_time,
                    avg_total_res_time,
                })} > test.json`)
                exec(`echo ${JSON.stringify({
                    login: login.time_list,
                    getAnnList: getAnnList.time_list,
                    total_res_time_list,
                })} > test_row.json`)
            }
        })
}
