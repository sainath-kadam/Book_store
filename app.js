const express = require('express');
const connectDB = require('./config/db');
var cors = require('cors');
const router = express.Router();
const books = require('./routes/api/books');
 
const app = express();

// Connect Database
connectDB();
 
// cors
app.use(cors({ origin: true, credentials: true }));

app.use('/api/books', books);

const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));