# angular-node-mysql

A web organizer application for adding and displaying tasks 

--------

Front-End: AngularJS

Back-End: NodeJS

Database: MySQL (local database)

-------

## Step 1: Create a MySQL Database

1. Install MySQL on local system

Download and Install MySQL community server on local machine
https://dev.mysql.com/downloads/mysql/

2. Create Database ad populate with entries

Database: organizer; Table: tasks
Open the MySQL command prompt and use the following commands:

CREATE DATABASE organizer;

USE organizer;

CREATE TABLE tasks(
   task_id INT NOT NULL AUTO_INCREMENT,
   desc VARCHAR(100) NOT NULL,
   PRIMARY KEY ( task_id )
);

INSERT INTO tasks (desc) VALUES ("Wake up at 6:00 AM");

SELECT * FROM tasks;

------------

## Step 2: Create a Node-MySQL Connection






