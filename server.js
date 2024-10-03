require('dotenv').config(); 
const express = require('express');
const db = require('./config/connection');
const userRoutes = require('./routes/userRoutes');
const thoughtRoutes = require('./routes/thoughtRoutes');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware for parsing JSON
app.use(express.json());

// Use the user routes
app.use('/api/users', userRoutes);
app.use('/api/thoughts', thoughtRoutes);

// Connect to the database and start the server
db.once('open', () => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
