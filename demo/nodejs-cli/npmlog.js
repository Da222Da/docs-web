const npmlog = require('npmlog');
const colors = require('colors');

colors.setTheme({
    error: 'red',
    warn: 'yellow',
    info: 'green',
    debug: 'blue'
});

npmlog.info('prefix', 'hello world', 'suffix'.error);