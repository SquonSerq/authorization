var db = require('./dao');
var dbCon = new db('./db/authorization.db');

const bcrypt = require('bcrypt');
const saltRounds = 10;

const myPassword = 'iFuckedMyAssLoL';
var hashPass = bcrypt.hashSync(myPassword, saltRounds);

    //dbCon.runQuery('DROP TABLE users');

    dbCon.runQuery('CREATE TABLE users (userId INTEGER PRIMARY KEY, login TEXT NOT NULL UNIQUE, password TEXT, sessId TEXT UNIQUE)');

    //dbCon.getQuery("SELECT login FROM users", (err, rows)=>{});

    //db.get('SELECT password FROM users WHERE userId = 1', (err, row) =>{
        //console.log(bcrypt.compareSync(myPassword, row.password));
    //});

dbCon.closeDb();