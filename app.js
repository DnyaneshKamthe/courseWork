const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require("body-parser");
const sequelize = require('./db');
const userRoutes = require("./routes/userRoutes");

app.use(bodyParser.json());
app.use(cors()); // Invoke cors middleware

// Sync models with the database
sequelize.sync()
  .then(() => {
    console.log('Database synchronized');
  })
  .catch(error => {
    console.error('Unable to sync database:', error);
  });

app.use("/api/user", userRoutes);

app.listen(3000, () => {
  console.log("Server started");
});
