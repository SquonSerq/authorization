var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.database('./db/authorization.db');

//const bcrypt = require('bcrypt');
//const saltRounds = 10;

//const myPassword = 'iFuckedMyAssLoL';
//var hashPass = bcrypt.hashSync(myPassword, saltRounds);

db.serialize(() => {

    db.run('DROP TABLE users');

    db.run('CREATE TABLE users (userId INTEGER PRIMARY KEY, login TEXT, password TEXT)');

    //db.run("INSERT INTO users (login, password) VALUES ('squonserq', '"+hashPass+"' )");

    //db.get('SELECT password FROM users WHERE userId = 1', (err, row) =>{
        //console.log(bcrypt.compareSync(myPassword, row.password));
    //});
});

db.close();