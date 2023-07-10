require('isomorphic-fetch')
const { apiDomain } = require("./config.json");

function parseCookies(response) {
    const raw = response.headers.raw()['set-cookie'];
    return raw.map((entry) => {
        const parts = entry.split(';');
        const cookiePart = parts[0];
        return cookiePart;
    }).join(';');
}

function loadtest({ url = '/', method = 'GET', repeat }) {
    let total_time = 0 // 同一支 api 全部結束後的總回傳時間
    let fastest_time = 0 // 同一支 api 全部結束後，最快回傳的時間是多少
    let slowest_time = 0 // 同一支 api 全部結束後，最慢回傳的時間是多少
    let avg_time = 0 // 同一支 api 全部結束後，計算平均回傳時間是多少
    let time_list = [] // 同一支 api 全部結束後，把所有 api 回傳的時間用陣列紀錄
    let resIdx = 0 // 這支 api 已經進行了幾次
    let cookie = ''
    return {
        total_time,
        fastest_time,
        slowest_time,
        avg_time,
        time_list,
        resIdx,
        cookie,
        test(option, cookie) {
            if (!url) return new Promise(resolve => resolve)
            const start_time = Date.now()
            const headers = option.headers || {}
            const body = option.body || {}

            return fetch(`${apiDomain}${url}`, {
                method,
                ...option,
                headers: {
                    "Content-Type": "application/json",
                    ...headers,
                    cookie,
                },
                body: method.toUpperCase() === 'GET' ? undefined : JSON.stringify(body)
            })
                .then(res => {
                    if (!cookie) {
                        this.cookie = parseCookies(res)
                    }
                    const end_time = Date.now()
                    const res_time = end_time - start_time

                    this.total_time = this.total_time + res_time
                    this.resIdx = this.resIdx + 1
                    this.fastest_time = res_time < this.fastest_time || !this.fastest_time ? res_time : this.fastest_time
                    this.slowest_time = res_time > this.slowest_time ? res_time : this.slowest_time
                    this.time_list.push(res_time)

                    if (!repeat) this.avg_time = this.total_time / this.resIdx

                    if (repeat === this.resIdx) {
                        this.avg_time = this.total_time / this.resIdx
                    }
                    return res_time
                })
                .catch(error => {
                    console.log(url, error)
                })
        }
    }
}

module.exports = loadtest
