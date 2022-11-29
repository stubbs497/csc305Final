const sqlite3 = require('sqlite3').verbose();

//let query = "SELECT * from Institution where id = 1;"

const dbopen = (dbpath) => {
  let db = new sqlite3.Database(dbpath, sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
      console.error(err.message);
    }
    else {
      console.info(`Connected to the ${dbpath} database.`);
    }
  });
  return db;
};

/*
db.all(query, [], (err, rows) => {
    if (err) {
      throw err;
    }

    let result = "<table>";
    rows.forEach((row) => {
      //console.log(row.schoolName);
      result += '<tr>';
      result += '<td>' + row.id + '</td>';
      result += '<td>' + row.orgCode + '</td>';
      result += '<td>' + row.schoolName + '</td>';
      result += '</tr>';
    });
    result += "</table>";
    console.log(result);
  });
*/  

// close the database connection
const dbclose = (db, afterCloseCallback) => { 
  db.close((err) => {
    if (err) {
      return console.error(err.message);
    }
    console.log('Closed the database connection.');
    afterCloseCallback();
  });
};

module.exports = { dbopen, dbclose };