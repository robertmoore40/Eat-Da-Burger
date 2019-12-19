// Set up MySQL connection.
var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "rtzsaka6vivj2zp1.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "lbpysc5nly84qfrn",
  password: "k7u3vs17ma4bunu5",
  database: "kr1fs5xnefo7dbp6"
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;