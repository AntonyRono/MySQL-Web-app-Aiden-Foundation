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
  4. 