const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const app = express();

// Middleware
app.use(express.json());

// Database connection
mongoose.connect('mongodb+srv://enayet:KqmvPyJGW3wApjUj@cluster0.ktgpsav.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('Connected to the database');
});

// Routes
app.use('/api', routes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});