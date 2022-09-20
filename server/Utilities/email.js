const nodemailer = require('nodemailer');
const sendEmail = async(options)=>{
  console.log(options.email,options.message,options.subject)

const transport = nodemailer.createTransport({
  host:process.env.EMAIL_SERVICE,
  port: 2525,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.APP_PASSWORD
  }
});
    const mailOptions = {
        from: 'teammedsolve@gmail.com',
        to: options.email,
        subject: options.subject,
        text: options.message
      };
      await transport.sendMail(mailOptions)
}
module.exports = sendEmail;

