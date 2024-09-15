import express from 'express';
import nodemailer from 'nodemailer';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors()); // Allow CORS from React frontend

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'gokulraj482@gmail.com',
        pass: 'czpd mfow jmlh wdum'
    }
});

// Route to handle email sending
app.post('/send', (req, res) => {
    const { name, email, message } = req.body;

    const mailOptions = {
        from: email, // sender address
        to: 'gokulraj482@gmail.com', // list of receivers
        subject: `Message from ${name}`, // Subject line
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`, // Plain text body
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).send({ success: false, message: 'Error sending email', error });
        }
        res.status(200).send({ success: true, message: 'Email sent successfully', info });
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
