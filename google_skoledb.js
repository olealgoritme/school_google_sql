var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : '35.228.184.106',
  user     : 'skole',
  password : 'skole',
  database : 'skoledb'
});

connection.connect();
connection.query("CREATE TABLE IF NOT EXISTS skoleTable (PersonID int NOT NULL AUTO_INCREMENT PRIMARY KEY, Firstname varchar(255), Lastname varchar(255), Origin varchar(255));", function (error, results, fields) {
  if (error) throw error;
  console.log('The res:' + results);
});               

connection.query("INSERT INTO skoleTable (Firstname, Lastname, Origin) VALUES ('Ole', 'Jackson', 'Norway');");
connection.query("SELECT * FROM skoleTable", function(error, results, fields) {
	console.log(results);
});

connection.end();