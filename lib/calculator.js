function getStddev(data) {
    if (!Array.isArray(data) || data.length < 2) return '樣本數不足'
    const sum = (x, y) => x + y
    const square = x => x * x

    const mean = data.reduce(sum) / data.length
    const deviations = data.map(x => x - mean)
    const stddev = Math.sqrt(deviations.map(square).reduce(sum) / (data.length - 1))
    return Math.floor(stddev)
}

module.exports = {
    getStddev,
}
