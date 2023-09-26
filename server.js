const mongoose = require('mongoose');

const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });
const app = require('./app');

mongoose
  .connect(deanjustin81, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('DB connection successful!');
  });

// Server
const port = process.env.PORT || 5040;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
