const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql2');

const app = express();

app.use(cors());
app.use(bodyParser.json());

const connection = mysql.createConnection({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'epsilon-survey',
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL database');
});

app.post('/submit', (req, res) => {
  const formData = req.body;
  const brandsString = formData.q5.join(', ');

  const query = `
    INSERT INTO userinfo (name, email, q1, q2, q3, q4, q4Other, q5, q6, q7, q8, q9, emailConsent, analysisConsent)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;

  const values = [
    formData.name,
    formData.email,
    formData.q1,
    formData.q2,
    formData.q3,
    formData.q4,
    formData.q4Other,
    brandsString,
    formData.q6,
    formData.q7,
    formData.q8,
    formData.q9,
    formData.emailConsent,
    formData.analysisConsent
  ];

  connection.query(query, values, (err, results) => {
    if (err) {
      console.error('Error inserting data:', err);
      res.status(500).json({ error: 'An error occurred while inserting data.' });
    } else {
      console.log('Data inserted:', results);
      res.status(200).json({ message: 'Data inserted successfully.' });
    }
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
