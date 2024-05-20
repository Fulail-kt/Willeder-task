
// import { MailDataRequired } from '@sendgrid/mail';
// import sgMail from '@sendgrid/mail';

// // Debugging: Log environment variables to ensure they are loaded correctly
// console.log('SENDGRID_API_KEY:', process.env.SENDGRID_API_KEY);
// console.log('SENDGRID_FROM_EMAIL:', process.env.SENDGRID_FROM_EMAIL);

// const apiKey = process.env.SENDGRID_API_KEY;
// if (!apiKey || !apiKey.startsWith('SG.')) {
//   throw new Error('Invalid SendGrid API Key');
// }
// sgMail.setApiKey(apiKey);

// export const sendMessage = async (message: MailDataRequired) => {
//   try {
//     // TODO

//     return Promise.resolve();
//   } catch (err) {
//     // TODO
//     return Promise.reject(err);
//   }
// };

//------------------------------------------ MAIL GUN CONFIQURATION 

import formData from 'form-data';
import Mailgun from 'mailgun.js';

const mailgun = new Mailgun(formData);
const mailgun_Key=process.env.MAILGUN_API_KEY
const mg = mailgun.client({ username: 'api', key: mailgun_Key||"" });

export const sendMessage = async (message: {
  text: any; to: any; from?: string; subject?: string; html?: string; 
}) => {

  const data={
    from: process.env.MAILGUN_FROM_EMAIL,
    to: message.to,
    subject: "Hello",
    text: message.text,
    html: "<h1>Testing some Mailgun awesomeness!</h1>"
  }

  try {
    mg.messages.create('sandbox93dd724082604e8b935d528882aa7d22.mailgun.org', {
      from: '"doc2heal" <doc2heal.service@gmail.com>',
      to: message.to,
      subject: "Hello",
      text: "Testing some Mailgun awesomeness!",
      html: "<h1>Testing some Mailgun awesomeness!</h1>"
    })
    
    return Promise.resolve('Email sent successfully');
  } catch (err) {
    console.error('Error sending email:', err);
    return Promise.reject(err);
  }
};


const message = {
  to: 'aswinkalathur11@gmail.com',
  subject: 'Test Email',
  text: 'This is a test email',
  html: '<strong>This is a test email</strong>',
};

sendMessage(message)
.then((msg: any) => console.log(msg)) 
.catch((err: any) => console.log(err)); 