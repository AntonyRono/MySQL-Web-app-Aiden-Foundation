# Introduction

This is a platform that allows users to register for membership in an organisation.
It is built of top of a MYSQL Database, and has two main functionalities:
* Displaying the current membership count (SELECT statement)
*  Registering new members (INSERT INTO statement)
  
  # Workflow
  The basic steps in building the app are as follows:
  1. Create a Database, called "aiden_foundation" in MySQL (aiden_foundation.sql)
  2. Create a table inside this database which we'll call "members". This table has three columns:
     1. **id** which will act as the index/primary key
     2. **first_name** which is the members's first name
     3. **last_name** which is the members's last name
     4. **profession** which is the members's profession
     5. **created_at** which is the date of registration
  3. Generate random data and insert into the table (generate_random_data.js"). We have done this in javascript and using the faker(for random data generation) and msyql(to connect to MySQL) javascript packages
  4. Create our main javasacript file -app.js-, an EJS file -/views/home.ejs- (which is just HTML file that allows us to right javascript codes) and CSS file -public/app.css- for styling. Switch the view engine in our main js ile to EJS template
  5. Create two route inside our main js file:
     1. GET route to execute the SELECT statement to display the total nummber of members.
     2. POST route to execute the INSERT INTO statement
  6. Link the js file to the ejs

# Final Output
<!-- ![alt text]("ui.png") -->
<p align="center">
  <img src="ui.png" width="750" title="alt text">
</p>

