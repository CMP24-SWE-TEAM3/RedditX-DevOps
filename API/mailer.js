const ejs = require("ejs");
const nodeoutlook = require('nodejs-nodemailer-outlook');
require('dotenv').config();

const ENV = process.env;
const emailTypes = ['signup', 'forget_username', 'forget_password'];
const emailSubjects = {
    'signup': 'Verify your email address',
    'forget_username': 'Forgot my username',
    'forget_password': 'Reset password'
}

const sendEmail = (email, type, url) => {
    return new Promise((resolve, reject) => {
        if (emailTypes.indexOf(type) === -1) reject('Invalid email type');
        if (!email) reject('Invalid empty email');
    
        ejs.renderFile(__dirname + `/index_${type}.ejs`, { confirmationLink: url }).then(htmlFile => {
            nodeoutlook.sendEmail({
                auth: {
                    user: ENV.EMAIL_USER_NAME,
                    pass: ENV.EMAIL_PASSWORD
                },
                from: ENV.EMAIL_USER_NAME,
                to: email,
                subject: emailSubjects[type],
                html: htmlFile,
                text: 'TEXT TO APPEAR IN CASE THAT THE HTML WAS NOT DELIVERED CORRECTLY',
                attachments: [{
                    filename: 'text3.txt',
                    path: '/path/to/file.txt'
                }],
                onError: (e) => {
                    console.log(e);
                    reject(e);
                },
                onSuccess: (i) => {
                    console.log(i);
                    resolve(i);
                }
            });
        }).catch(err => {
            console.log(err);
            reject(err);
        });
    });
}