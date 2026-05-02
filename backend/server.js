const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware — lets server read JSON and accept frontend requests
app.use(cors());
app.use(express.json());

// Test route — just to confirm server works
app.get('/', (req, res) => {
  res.send('Server is running!');
});

// Connect to MongoDB, then start server
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('MongoDB connected');
    app.listen(process.env.PORT, () => {
      console.log(`Server running on port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log('Connection failed:', err.message);
  });