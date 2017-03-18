# angular-node-mysql

A sample application for adding and displaying books in a personal library

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

Database: library; Table: library
Open the MySQL command prompt and use the following commands:

CREATE DATABASE library;

USE library;

CREATE TABLE library(
   book_id INT NOT NULL AUTO_INCREMENT,
   title VARCHAR(100) NOT NULL,
   author VARCHAR(40) NOT NULL,
   PRIMARY KEY ( book_id )
);

