const opn = require('opn')

const url = 'https://b00tc4mp.com'

opn(url, { wait: false }).then(() => console.log(`Opening ${url}`))