var sqlite3 = require('sqlite3');

class dao{

    constructor(path){
        this.db = new sqlite3.Database(path);
    }

    runQuery(query){
        return this.db.run(query, (res, err) =>{
            if(err){
                console.log(err);
            }
        });
    }

    getQuery(query, cb){
        this.db.get(query, cb);
    }

    closeDb(){
        this.db.close();
    }

}

module.exports = dao;