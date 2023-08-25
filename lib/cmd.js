const commander = require('commander');

commander
    .option('-n, --requests <value>', 'Number of requests to send out.', 3)
    .option('-c, --concurrency <value>', 'How many requests will arrive concurrently to the server', 1)
    .option('-t, --timelimit <value>', 'Max number of seconds to wait until requests no longer go out.', 0)
    .option('-x, --xMode <value>', 'client only', 0)
    .parse(process.argv);

const options = commander.opts();

module.exports = options
