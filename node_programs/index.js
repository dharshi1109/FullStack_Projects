var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: '11dharshi@gmail.com',
    pass: 'zqtt fpot orzv qiws'
  }
});

var mailOptions = {
  from: '11dharshi@gmail.com',
  to: 'maha9952127957@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, response){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + response.message);
  }
});