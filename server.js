const app = require("./app");
const express = require("express");
// const cors = require("cors");
const mongoose = require("mongoose");
// require("dotenv").config();
// const app = express();

const { DB_HOST, PORT = 3000 } = process.env;
// console.log(process.env.DB_HOST);

// const DB_HOST = `mongodb+srv://ovchrk:Nastya03082017@cluster0.qaqm6vd.mongodb.net/db-contacts?retryWrites=true&w=majority`;

mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(PORT, () => {
      console.log("Database connection successful");
    });
  })
  .catch((err) => {
    console.log(err.message);
    process.exit(1);
  });
