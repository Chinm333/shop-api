const express = require('express');
const mongoose = require('mongoose');
const itemRoutes = require('./src/routes/itemRoutes');
const billRoutes = require('./src/routes/billRoutes');
const dotenv = require('dotenv').config();

const PORT = process.env.PORT || 3000;
const app = express();
app.use(express.json());

app.use('/api/items', itemRoutes);
app.use('/api/bills', billRoutes);

function connectToDB() {
  const url = process.env.MONGODB_URL;
  mongoose.connect(url)
    .then(() => console.log("Connected to DB"))
    .catch((err) => console.log(err));
}
connectToDB();

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;
