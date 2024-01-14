const express = require("express");
const multer = require("multer");
const path = require("path");

const { HttpError } = require("../helpers");

const destination = path.resolve("tmp");

const storage = multer.diskStorage({
  destination,
  filename: (req, file, cb) => {
    const uniquePrefix = `${Date.now()}_${Math.round(Math.random() * 1e9)}`;
    const fileName = `${uniquePrefix}_${file.originalname}`;
    cb(null, fileName);
  },
});

const limits = {
  fileSize: 1024 * 1024 * 5,
};

const fileFilter = (req, file, cb) => {
  const extention = req.originalname.split(".").pop();
  if (extention === "exe") {
    cb(HttpError(400, ".exe not valid"));
  }
};

const upload = multer({ storage, limits });

module.exports = { upload };
