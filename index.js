#!/usr/bin/env node

const url = 'https://b00tc4mp.com'

import('open')
    .then(({ default: open }) => open(url, { wait: false }))
    .then(() => console.log(`Opening ${url}`))