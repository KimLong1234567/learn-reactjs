const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();

app.use(cors());

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'petshop',
});


connection.connect((err) => {
    if (err) {
      console.error('Error connecting to database:', err);
    } else {
      console.log('Connected to database');
    }
  });
  
  app.get('/api/data', (req, res) => {
    connection.query('SELECT * FROM users', (err, results) => {
      if (err) {
        console.error('Error executing query:', err);
        res.sendStatus(500);
      } else {
        res.json(results);
      }
    });
  });

  app.get('/api/data/product', (req, res) => {
    connection.query('SELECT * FROM pet_product', (err, results) => {
      if(err){
        console.error('Error executing query:', err);
        res.sendStatus(500);
      } else{
        res.json(results);
      }
    });
  });


  
  app.listen(5000, () => {
    console.log('Server is running on port 5000');
  });