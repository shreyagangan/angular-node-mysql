// server.js

    // set up ========================
    var express  = require('express');
    var app      = express();                               // create our app w/ express
    var morgan = require('morgan');             // log requests to the console (express4)
    var bodyParser = require('body-parser');    // pull information from HTML POST (express4)
    var methodOverride = require('method-override'); // simulate DELETE and PUT (express4)

    // configuration =================

    //Connect to mySQL DB
    var mysql      = require('mysql');
    var connection = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: 'hermione',
      database: 'organizer'
    });

    connection.connect();

    app.use(express.static(__dirname + '/front-end'));                 // set the static files location /public/img will be /img for users
    app.use(morgan('dev'));                                         // log every request to the console
    app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
    app.use(bodyParser.json());                                     // parse application/json
    app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
    app.use(methodOverride());

    // listen (start app with node server.js) ======================================
    app.listen(8080);
    console.log("App listening on port 8080");



    // routes ======================================================================

    // api ---------------------------------------------------------------------
    // get all tasks    
    app.get('/api/tasks', function(req, res) {

        var tasks=[];
        console.log(req.body);
        connection.query('SELECT * from tasks', function(err, rows, fields) {

            for (var i = 0;i < rows.length; i++) {
                tasks.push(rows[i]);
            }
            res.json(tasks);
            if (!err)
                console.log('The solution is: ', rows);
            else
                console.log('Error while performing Query.');
        });

    });

    

    // create task and send back all tasks after creation
    app.post('/api/create_tasks', function(req, res)
    {
        var id_num=0;
        // create a task, information comes from AJAX request from Angular
        connection.query('SELECT id from tasks ORDER BY id DESC LIMIT 1', function(err, rows, fields) {
            id_num=rows[0].id;
            console.log(id_num);
            if (!err)
                console.log('The solution is: ', rows);
            else
                console.log('Error while performing Query.');
        });
        console.log(req);
        var task={
            id: id_num,
            description: req.body.desc
        };       
        
        var query = connection.query('insert into tasks set ?', task, function (err, result) {
          if (err) {
            console.error(err);
            return;
          }
          
        var tasks=[];
        console.log(req.body);
        connection.query('SELECT * from tasks', function(err, rows, fields) {

            for (var i = 0;i < rows.length; i++) {
                tasks.push(rows[i]);
            }
            res.json(tasks);
            if (!err)
                console.log('The solution is: ', rows);
            else
                console.log('Error while performing Query.');
        });
          

          console.error(result);
        });

    });

  
    // application -------------------------------------------------------------
    app.get('*', function(req, res) {
        res.sendfile('./front-end/index.html'); // load the single view file (angular will handle the page changes on the front-end)
    });