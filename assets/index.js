const express = require('express');
const mysql = require('mysql');
require('dotenv').config();
const app = express();

// app.use(express.static('client'));

app.get('/', (req, res) => {
  res.sendFile('/assets/index.html');
});

app.listen(process.env.PORT, (error) => {console.log("Running . . .")});