const nodemailer = require("nodemailer");

function sendingEmail(txtfrom, txtto, txtsubject, txtmessage, callback) {
    let transporter = nodemailer.createTransport({
        service: "gmail",
        host: "smtp.gmail.com",
        ignoreTLS: false,
        secure: false,
        auth: {
            user: "dev.valerian@gmail.com",
            pass: "pfkoxuhjtdfeygea",
        },
    });

    let message = {
        from: txtfrom,
        to: txtto,
        subject: txtsubject,
        text: txtmessage,
    };

    transporter.sendMail(message, (err, info) => {
        if (!err) {
            return callback(null, JSON.stringify(info));
        } else {
            return callback(err, JSON.stringify(info));
        }
    });
}

module.exports = { sendingEmail };
