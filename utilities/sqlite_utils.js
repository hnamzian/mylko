var sqlite3 = require('sqlite3').verbose();

module.exports.connect = function(db_name) {
    return new sqlite3.Database(db_name, (err) => {
        if (err) return console.error(err.message);
        console.log(`Connected to the ${db_name} database.`);
    })
};