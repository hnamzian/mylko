const milking = require('../mqtt/milking.js')
const mors = require('mors');
const broker = mors()

module.exports = function () {   
    broker.use('milk/:unit?/:id?', milking)
    return broker
}