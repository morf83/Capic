module.exports= executeQuery;

const mysql = require ("mysql");
const connection = mysql.createConnection({
  host     : '127.0.0.1',
  user     : 'root',
  password : '',
  database : 'capic'
});

function executeQuery(sql, callback){
  connection.connect();
  connection.query(sql, callback);
connection.end();

}
