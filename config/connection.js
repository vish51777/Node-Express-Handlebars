// this is all about mysql connection

var mysql = require("mysql");

var connection;

// for JawsDB MySQL add-on in heroku (needed to deploy the app)
if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "ichiro51",
        database: "burgers_db"
    });
;}

connection.connect(function(err) {
    if (err) throw err;
    console.log("Successfully connected to MySQL! Connected as ID: " + connection.threadId);
});

// export connection to ORM
module.exports = connection;