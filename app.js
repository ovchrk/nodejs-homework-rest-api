const express = require("express");
const logger = require("morgan");
const cors = require("cors");

const contacts = require("./models/contacts");

const contactsRouter = require("./routes/api/contacts");

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

app.use("/api/contacts", contactsRouter);

// app.get("/", (req, res) => {
//   // res.send("<h2>Home Page</h2>");
// });

// app.get("/api/contacts", (req, res) => {
//   res.json(contacts);
// });

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Server error!" } = err;
  res.status(status).json({ message });
});

module.exports = app;
