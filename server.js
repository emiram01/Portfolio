//staring server

const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

const port = process.env.PORT || 8080;

const sendMail = require('./public/js/mail.js');

app.use(express.urlencoded({
    extended: false
}))
app.use(express.json());

app.use(express.static('public'));

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'));
})

router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/error.html'));
})

app.use('/', router);

app.listen(port, () => {
    console.log('server on port ', port);
})

//sending email

app.post('/email', (req, res) => {
    const { subject, email, text } = req.body;
    // console.log('data: ', req.body);
    sendMail(email, subject, text, (err, data) => {
        if(err)
            res.status(500).json({message: 'Internal Error'});
        else
            res.json({message: 'email sent'});
    });
})