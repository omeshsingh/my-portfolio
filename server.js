require("dotenv").config();
const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/contact", async (req, res) => {
    const { firstName, lastName, email, phone, message } = req.body;

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    const mailOptions = {
        from: email,
        to: process.env.EMAIL_TO, // Your email to receive messages
        subject: `New Contact Form Submission from ${firstName} ${lastName}`,
        text: `Name: ${firstName} ${lastName}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ code: 200, message: "Message sent successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ code: 500, message: "Error sending email" });
    }
});

app.listen(5000, () => console.log("Server running on port 5000"));
