const milkDB = require('../models/milk.js')

module.exports = function() {
    milkDB.createTable()
};