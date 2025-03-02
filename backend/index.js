require('dotenv').config();
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();
app.use(cors());
app.use(express.json());

app.post('/send-email', async (req, res) => {
  const { name, email, feesPaid, startDate, endDate } = req.body;

  console.log(' Email Sending Request:', req.body); // Debugging 

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER, 
      pass: process.env.EMAIL_PASS, 
    },
    tls: {
      rejectUnauthorized: false, // SSL Error fix
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: 'Library Fees Payment Confirmation',
    text: `Hello ${name},\n\nYour library fees of Rs. ${feesPaid} has been received.\nValid from: ${startDate} to ${endDate}.\n\nThank you!`,
  };

    try {
      const info = await transporter.sendMail(mailOptions);
      console.log(' Email Sent Successfully:', info.response);
      res.status(200).json({ message: 'Email sent successfully!' });
    } catch (error) {
      console.error(' Email Sending Failed:', error);
      res.status(500).json({
        message: 'Email sending failed',
        error: error.message,
        stack: error.stack, // Full error print 
      });
    }

});

app.listen(5000, () => {
  console.log(' Server running on http://localhost:5000');
});
