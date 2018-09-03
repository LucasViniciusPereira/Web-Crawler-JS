const CronJob = require('cron').CronJob;

const job = new CronJob('1 * * * * *', () => {
    require('./job-loteria.js');
}, null, true, 'America/Sao_Paulo')
