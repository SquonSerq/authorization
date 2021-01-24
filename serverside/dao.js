var sqlite3 = require('sqlite3');

class dao{

    constructor(path){
        this.db = new sqlite3.Database(path);
    }

    runQuery(query){
        this.db.run(query);
    }

    closeDb(){
        this.db.close();
    }

}

module.exports = dao;