const sgMail = require('@sendgrid/mail');
const { SENDGRID_API_KEY } = require('../config/keys');
sgMail.setApiKey(SENDGRID_API_KEY);

function sendEmail(mailOptions) {
    return new Promise((resolve, reject) => {
        sgMail.send(mailOptions, (error, result) => {
            if (error) return reject(error);
            return resolve(result);
        });
    });
}

module.exports = { sendEmail };