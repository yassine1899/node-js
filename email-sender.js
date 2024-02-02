const nodemailer = require("nodemailer");

//
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "your_email@gmail.com",
    pass: "your_email_password",
  },
});

// 
const mailOptions = {
  from: "your_email@gmail.com",
  to: "your_email@gmail.com",
  subject: "Test Email",
  text: "This is a test email from Node.js",
};

//
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.log("Error:", error);
  }
  console.log("Email sent:", info.response);
});
