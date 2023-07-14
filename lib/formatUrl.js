function formatUrl(url, data) {
    if (typeof data !== 'object' || !data) return url
    const qs = {}
    for (let key in data) {
        if (url.includes(`:${key}`)) {
            url = url.replace(`:${key}`, data[key])
        } else {
            qs[key] = data[key]
        }
    }

    if (!Object.keys(qs).length) return url
    return url += "?" + new URLSearchParams(qs).toString()
}

module.exports = formatUrl
