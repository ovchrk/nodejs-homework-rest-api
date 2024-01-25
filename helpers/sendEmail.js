const nodemailer = require("nodemailer");
require("dotenv").config();

const { UKRNET_PASSWORD, UKRNET_FROM } = process.env;

const nodemailerConfig = {
  host: "smtp.ukr.net",
  port: 465,
  secure: true,
  auth: {
    user: process.env.UKRNET_FROM,
    pass: process.env.UKRNET_PASSWORD,
  },
};

const transport = nodemailer.createTransport(nodemailerConfig);

// const email = {
//   from: process.env.UKRNET_FROM, // sender address
//   to: "vekop88220@tsderp.com", // list of receivers
//   subject: "Test ✔", // Subject line
//   html: "<b>Hello world?</b>", // html body
// };

const sendEmail = async (data) => {
  const email = { ...data, from: process.env.UKRNET_FROM };
  await transport.sendMail(email);
  return true;
};

module.exports = { sendEmail };
