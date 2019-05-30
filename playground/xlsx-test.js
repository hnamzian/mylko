const Excel = require("exceljs");

var workbook = new Excel.Workbook();
workbook.xlsx.readFile("./Book.xlsx").then(function() {
  var worksheet = workbook.getWorksheet(1);
  worksheet.eachRow({ includeEmpty: true }, function(row, rowNumber) {
    console.log("Row " + rowNumber + " = " + JSON.stringify(row.values));
  });
});
