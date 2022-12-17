const mysql = require('mysql')
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'park'
})

const Sequelize = require("sequelize");
const sequelize = new Sequelize("park", "root", "", {
  dialect: "mysql",
  host: "localhost"
});

const PORT = config.get('port') || 3000;

var db;
function connectDb() {
    if (!db) {
        db = mysql.createConnection(connection);
        db.connect(function (err) {
            if (!err) {
                console.log("database connected success!!");
                console.log(connection);
            } else {
                console.log("Error database connect!!");
            }
        });
    }
    return db;
}

module.exports = connectDb();