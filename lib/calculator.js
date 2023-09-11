function getStddev(data) {
    if (!Array.isArray(data) || data.length < 2) return 0
    const sum = (x, y) => x + y
    const square = x => x * x

    const mean = data.reduce(sum) / data.length
    const deviations = data.map(x => x - mean)
    const stddev = Math.sqrt(deviations.map(square).reduce(sum) / (data.length - 1))
    return Math.floor(stddev)
}

function timeCalculator(start_time) {
    return Date.now() - start_time
}

function getAvg(total, count) {
    if (isNaN(parseInt(total, 10)) || isNaN(parseInt(count, 10))) return 0
    return Math.floor(total / count)
}

module.exports = {
    getStddev,
    timeCalculator,
    getAvg,
}
