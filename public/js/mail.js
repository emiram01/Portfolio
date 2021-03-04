const nodemailer = require('nodemailer');
const mailgun = require('nodemailer-mailgun-transport');
require('dotenv').config();

const auth = {
    auth: {
        api_key: process.env.MAILGUN_API_KEY,
        domain: process.env.MAILGUN_DOMIAIN
    }
}

const transporter = nodemailer.createTransport(mailgun(auth));

const sendMail = (email, subject, text, cb) => {
    const mailOptions = {
        from: email,
        to: process.env.EMAIL,
        subject,
        text
    }

    transporter.sendMail(mailOptions, (err, data) => {
        if(err)
            cb(err, null);
        else
            cb(null, data);
    })
}

module.exports = sendMail;