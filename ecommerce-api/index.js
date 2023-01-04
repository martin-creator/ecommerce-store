/* Express App Configuration */
const express = require('express');

const app = express();

const mongoose = require('mongoose');

const dotenv = require('dotenv');

dotenv.config();

/* Database connection */
mongoose.connect(
  process.env.MONGO_URL,
)
  .then(() => console.log('DBConnection Successful!'))
  .catch((err) => {
    console.log(err);
  });

app.get('/api/test', () => {
  console.log('Test is successful');
});

/* Port number */
app.listen(process.env.PORT || 5000, () => {
  console.log('Backend server is running!');
});
