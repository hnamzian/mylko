const milking = require('../mqtt/milking.js')
var mors = require('mors')
var app = mors()

app.use('milk/:unit?/:id?', milking)

app.listen(1881)
