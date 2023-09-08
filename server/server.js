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
    if (err) {
      console.error('Error executing query:', err);
      res.sendStatus(500);
    } else {
      res.json(results);
    }
  });
});

app.post('/api/data/product/add', (req, res) => {
  const { pet_prod_name, pet_prod_detail, pet_prod_price, pet_prod_origin, pet_prod_image, pet_prod_quantity } = req.body;

  // Kiểm tra dữ liệu đầu vào
  if (!pet_prod_name || !pet_prod_detail || !pet_prod_price || !pet_prod_origin || !pet_prod_image || !pet_prod_quantity) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const sql = 'INSERT INTO pet_product (pet_prod_name, pet_prod_detail, pet_prod_price, pet_prod_origin, pet_prod_image, pet_prod_quantity) VALUES (?, ?, ?, ?, ?, ?)';
  connection.query(sql, [pet_prod_name, pet_prod_detail, pet_prod_price, pet_prod_origin, pet_prod_image, pet_prod_quantity], (err, result) => {
    if (err) {
      console.error('Error executing query:', err);
      return res.status(500).json({ error: 'Internal Server Error' });
    } else {
      return res.status(201).json({ message: 'Product added successfully', productId: result.insertId });
    }
  });
});



app.listen(5000, () => {
  console.log('Server is running on port 5000');
});