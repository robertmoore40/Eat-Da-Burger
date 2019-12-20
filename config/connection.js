// Set up MySQL connection.
var mysql = require("mysql");
var connection;
// var connection = mysql.createConnection({
//   host: "rtzsaka6vivj2zp1.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
//   port: 3306,
//   user: "lbpysc5nly84qfrn",
//   password: "k7u3vs17ma4bunu5",
//   database: "kr1fs5xnefo7dbp6"
// });
// var connection = mysql.createConnection(process.env.mysql:lbpysc5nly84qfrn:k7u3vs17ma4bunu5@rtzsaka6vivj2zp1.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/kr1fs5xnefo7dbp6)

if (process.env.JAWSDB_URL){
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password:'Gokatie1',
    database: 'burgers_db'
  })
}


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