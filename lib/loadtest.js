require('isomorphic-fetch')
const { apiDomain } = require("../config.json");

function parseCookies(response) {
    const raw = !!response.headers && response.headers.raw()['set-cookie'];
    if (!Array.isArray(raw)) return ''
    return raw.map((entry) => {
        const parts = entry.split(';');
        const cookiePart = parts[0];
        return cookiePart;
    }).join(';');
}

function timeCalculator(start_time) {
    return Date.now() - start_time
}

function loadtest(setting = {}) {
    if (!setting || typeof setting !== 'object') {
        setting = {}
    }
    const {
        url = '/',
        method = 'GET',
        repeat, // 有此值才會在 call 此值得次數時計算平均回傳時間，無此值時每次 call api 都會計算回傳時間 (選填)
        customAPI, // 替換 apiDomain (選填)
        failResult, // 若此值和 response.body 的某個值相同時，就判斷為錯誤 (選填)
        succResult, // response.body 必須要有此值才會成功
    } = setting
    let total_time = 0 // 同一支 api 全部結束後的總回傳時間
    let fastest_time = 0 // 同一支 api 全部結束後，最快回傳的時間是多少
    let slowest_time = 0 // 同一支 api 全部結束後，最慢回傳的時間是多少
    let avg_time = 0 // 同一支 api 全部結束後，計算平均回傳時間是多少
    let time_list = [] // 同一支 api 全部結束後，把所有 api 回傳的時間用陣列紀錄
    let error = {} // 紀錄發生錯誤的 api 回傳各 status code 筆數
    let error_list = [] // 同一支 api 全部結束後，把所有發生錯誤的 api 回傳時間、status code、回傳內容用陣列紀錄
    let resIdx = 0 // 這支 api 已經進行了幾次
    let cookie = ''
    const usingApi = customAPI || apiDomain

    return {
        total_time,
        fastest_time,
        slowest_time,
        avg_time,
        time_list,
        error,
        error_list,
        resIdx,
        cookie,
        setError({ statusCode, res, res_time }) {
            this.error[statusCode] = !this.error[statusCode] ? 1 : this.error[statusCode] + 1
            const errorStatus = {
                res_time,
                statusCode,
                content: res,
            }
            this.error_list = [...this.error_list, errorStatus]
        },
        test(option = {}, cookie) {
            if (!usingApi) {
                console.error('Missing apiDomain in config.json');
                return new Promise(resolve => resolve)
            }
            if (!usingApi.startsWith('/') && !usingApi.startsWith('http://') && !usingApi.startsWith('https://') && !usingApi.startsWith('ws://')) {
                console.error('Invalid apiDomain %s, must be /, http://, https:// or ws://', usingApi);
                return new Promise(resolve => resolve)
            }

            const start_time = Date.now()
            const headers = option.headers || {}
            const body = option.body || {}
            let statusCode = 0

            return fetch(`${usingApi}${url}`, {
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
                    if (!res.ok) statusCode = res.status
                    if (!cookie) this.cookie = parseCookies(res)

                    return res.text()
                })
                .then(res => {
                    const res_time = timeCalculator(start_time)
                    let result = {}
                    try {
                        result = JSON.parse(res)
                    }
                    catch { }

                    if (!!statusCode) {
                        this.setError({ statusCode, res, res_time })
                        throw new Error('statusCode: ' + statusCode)
                    }

                    // 有包含錯誤的文字、或未包含必須的文字，則判斷為 fail
                    if ((typeof failResult === 'string' && res.includes(failResult)) || (typeof succResult === 'string' && !res.includes(succResult))) {
                        this.setError({ statusCode: -1, res, res_time })
                        throw new Error('res: ' + res)
                    }

                    // 配對成功，判斷為失敗
                    if (typeof failResult === 'object' && !!failResult) {
                        for (let key in failResult) {
                            if (result[key] === failResult[key]) {
                                this.setError({ statusCode: -1, res, res_time })
                                throw new Error(`res.${key}: ` + result[key])
                            }
                        }
                    }

                    // 配對成功，判斷為成功
                    if (typeof succResult === 'object' && !!succResult) {
                        let isSuccess = false
                        for (let key in succResult) {
                            if (result[key] === succResult[key]) {
                                isSuccess = true
                            }
                        }
                        if (!isSuccess) {
                            this.setError({ statusCode: -1, res, res_time })
                            throw new Error('succResult not match')
                        }
                    }

                    this.resIdx = this.resIdx + 1
                    this.total_time = this.total_time + res_time
                    this.fastest_time = res_time < this.fastest_time || !this.fastest_time ? res_time : this.fastest_time
                    this.slowest_time = res_time > this.slowest_time ? res_time : this.slowest_time
                    this.time_list.push(res_time)

                    if (!repeat) this.avg_time = this.total_time / this.time_list.length

                    if (repeat === this.resIdx) {
                        this.avg_time = this.total_time / this.time_list.length
                    }
                    return res_time
                })
                .catch(error => {
                    this.resIdx = this.resIdx + 1

                    console.log(url, error)
                })
        }
    }
}

module.exports = loadtest
