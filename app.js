const express = require('express');
const cors = require('cors');
const productRouter = require('./routes/productRoutes');
const compression = require('compression');

const app = express();
app.use(cors({ origin: 'http://localhost:5173' }));
app.use(express.json());
app.use(compression());

// Routes
app.use('/api/v1/products', productRouter);

module.exports = app;
