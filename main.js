var fs = require('fs');
var sql = require('mssql');

var config = JSON.parse(fs.readFileSync("config.json"));

var conn = new sql.Connection(config, function(err) {
  console.log(err);

  var rq = conn.request();
  rq.query('select * from TechInventory_Staging', function(err, records) {
    fs.writeFileSync("output.json", JSON.stringify(records, null, 2));
    conn.close();
  });
});
