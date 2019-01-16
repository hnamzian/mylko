const model = require('../models/milk');

const dataObj = {
    date: new Date().toLocaleTimeString(), // for 100 days
    dairy: 'D-1', 
    section: 'S-2', 
    unit: 'U-3',  // 1-10
    goat: 'G-4', // 1-10
    vol: 12, //random [10-30]
    status: 'milking', //finalized
    chip: 93287429387, //10 specified ids
    temp: 324, //random [25-35]
}

model.createTable();

// for (let dateIndex=0; dateIndex < 100; dateIndex++) {
//     for (let u=1; u <= 5; u++) {
//         for (let g=1; g <= 5; g++) {
//             dataObj.date = generate_series(dateIndex);
//             dataObj.unit = 'U-' + u;
//             dataObj.goat = 'G-' + g;
//             dataObj.vol = getRandomInt(20) + 10;
//             dataObj.temp = getRandomInt(10) + 25;
//             model.addtoTable(dataObj);
//         }
//     }
// }

// model.getAllData()

function generate_series(step) {
    var dt = new Date(2018, 0, 1, 0, 0, 0, 0)
    dt.setHours(dt.getHours() + 24*step);
    return dt.toLocaleDateString('us-en', {year: 'numeric', day: '2-digit', month: '2-digit'});
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}