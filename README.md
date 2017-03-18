# Organizer: angular-node-mysql

A Web Application for adding and displaying tasks to do using AngularJS, NodeJS, MySQL 

--------

Front-End: AngularJS

Back-End: NodeJS

Database: MySQL (local database)

-------

## Step 1: Create a MySQL Database

### 1. Install MySQL on local system

Download and Install MySQL community server on local machine
https://dev.mysql.com/downloads/mysql/

### 2. Create Database ad populate with entries

Database: organizer; Table: tasks
Open the MySQL command prompt and use the following commands:

CREATE DATABASE organizer;

USE organizer;

CREATE TABLE tasks(
   id INT NOT NULL AUTO_INCREMENT,
   description VARCHAR(100) NOT NULL,
   PRIMARY KEY ( id )
);

INSERT INTO tasks (description) VALUES ("Wake up at 6:00 AM");

SELECT * FROM tasks;

------------

## Step 2: Create a Node-MySQL Connection

### 1. clone this repository 

### 2. using terminal open the directory of the project (with the package.json file) and run following command:

npm install


       
npm install




