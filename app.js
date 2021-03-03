//Make a new folder/directory for the project and change the working directory to this folder.
//enter npm.init in the cmd, which creates a package.json file that acts a log file of everything that has been installed
//(Note that it is interactive, where you specify the name, version, description etc. Press enter if you don't want to change/update anything)
// Install express, faker, mysql, ejs  and body-parser packages by entering npm install [package name1] [package name2] --save (--save is added so as to save a record of the install in the package.json)
// (Note: To install all packages used that are used in a project(in package.json), just enter npm install in cmd (Useful if you want to reconstruct/clone an someone else's project))
//Create an app.js file, where we'll write our codes
// Connect to the database and define a get route which calls the count of the current member,and post which will insert data into our database
// Switch the view engine to EJS templating - Create a sub-directory called "Views", and create an ejs file (view engine), which you will call. Note that by default, the ejs file is looked for in the views folder
// Link the EJS file to the routes
// Stlye the app: Create a directory called "public", and within it create a file app.css
// Link the css file to the EJS file, and then js file in confiiguration

////// Laoding Packages //////
const express = require('express'); // Express Framework
// const faker = require('faker'); // To generate random entries
const mysql = require('mysql'); // To connect to MySQL
const ejs = require('ejs'); // To generate HTML markup with plain JavaScript
const bodyParser = require('body-parser'); // To extract information from POST requests

// Creating an Express Object
var app = express();

// Configuring Express Object
app.set("view engine", "ejs"); // Changing the view engine to ejs template
app.use(bodyParser.urlencoded({ extended: true })); // Use BodyParser to Extract information from POST request
app.use(express.static(__dirname + "/public")); // Take all contents and serve them so that they are accessible by our veiew(EJS file)


///// Connecting to MySQL ///////
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root', // your root username
    password: "Burn@2020$",
    database: 'aiden_foundation' // the name of your db
});


//// Starting a server session ////.
app.listen(3000, function() {
    console.log("App listening on port 3000!"); //http://localhost:3000/ to view in browser
});

////// Adding Routes /////////////
app.get("/", function(req, res) {
    var q = 'SELECT COUNT(*) AS count FROM members'
    connection.query(q, function(error, results) {
        if (error) throw error;
        var count = results[0].count;
        console.log(results);
        console.log(error);
        //res.send("We have " + count + " registered members in our organisation");
        res.render("home", { data: count });
    })
});


app.post("/register", function(req, res) {
    entry = {
        first_name: req.body.fname,
        last_name: req.body.lname,
        job_title: req.body.job
    };

    //console.log(req.body.fname)
    connection.query("INSERT INTO members SET ?", entry, function(error, results) {
        if (error) throw error;
        console.log(results);
        console.log(error);
        res.redirect("/")
    });
})