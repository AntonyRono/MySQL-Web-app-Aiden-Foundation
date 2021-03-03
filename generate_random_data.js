//Make a new folder/directory for the project and change the working directory to this folder.
//enter npm.init in the cmd, which creates a package.json file that acts a log file of everything that has been installed
//(Note that it is interactive, where you specify the name, version, description etc. Press enter if you don't want to change/update anything)
// Install faker, mysqlvpackages by entering npm install [package name1] [package name2] --save (--save is added so as to save a record of the install in the package.json)
// (Note: To install all packages used that are used in a project(in package.json), just enter npm install in cmd (Useful if you want to reconstruct/clone an someone else's project))


////// Loading Packagees //////
const faker = require('faker'); // To generate random entries
const mysql = require('mysql'); // To connect to MySQL


///// Connecting to MySQL ///////
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root', // your root username
    password: "Your password",
    database: 'aiden_foundation' // the name of your db
});

///// Inserting Preliminary Data into MySQL ///////

//Creating Data
var data = []; // Empty Array

for (var i = 0; i < 300; i++) { // Adding and array of 300 into the empty array
    data.push([
        faker.name.firstName(),
        faker.name.lastName(),
        faker.name.jobTitle(),
        faker.date.past()
    ])
};

//Inserting the data to Database

var q = 'INSERT INTO members(first_name, last_name, job_title, joined_at) VALUES ?'

connection.query(q, [data], function(error, results) {
    if (error) throw error;
    console.log(results)
});

//Closing Connection
connection.end(function(err) {
    if (err) {
        return console.log('error:' + err.message);
    }
    console.log('Closed the database connection.');
});