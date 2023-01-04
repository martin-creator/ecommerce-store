/* Express App Configuration */
const express = require('express');

const app = express();

const mongoose = require('mongoose');

const dotenv = require('dotenv');

const userRoute = require('./routes/user');

dotenv.config();

/* Database connection */
mongoose.connect(
  process.env.MONGO_URL,
)
  .then(() => console.log('DBConnection Successful!'))
  .catch((err) => {
    console.log(err);
  });

app.use(express.json());
app.use('/api/users', userRoute);

/* Port number */
app.listen(process.env.PORT || 5000, () => {
  console.log('Backend server is running!');
});
