const nodemailer = require('nodemailer');
const sendEmail = async(options)=>{
 const transport = nodemailer.createTransport({
        host:process.env.EMAIL_SERVICES,
        port:process.env.EMAIL_PORT,
        auth: {
          user:process.env.EMAIL_USER,
          pass:process.env.APP_PASSWORD
        },
    tls: 
    {
	    rejectUnauthorized: false
    }
      });
    const mailOptions = {
        from: 'teammedsolve@gmail.com',
        to: options.email,
        subject: options.subject,
        text: options.message
      };
      await transport.sendMail(mailOptions)
    console.log(options.email,options.message,options.subject)
}
module.exports = sendEmail;