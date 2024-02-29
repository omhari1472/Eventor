import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  host: 'smtp.gmail.net',
  port: 465,
  secure: true,
  auth: {
    // TODO: replace `user` and `pass` values from <https://forwardemail.net>
    user: 'omhari1472@gmail.com',
    pass: 'bfyf nccv xgld aond',
  },
});

// async..await is not allowed in the global scope, must use a wrapper
async function main() {
  try {
    // send mail with defined transport object
    const mailOptions = {
        from: 'omhari1472@gmail.com',
        to: 'omhari8252@gmail.com',
        subject: 'RSVP Invitation',
        html: `<p>Dear {guestName},</p>
               <p>You are invited to our event. Please RSVP by clicking the link below:</p>
               <a href="http://your-website.com/rsvp?eventId={eventId}&guestEmail={guestEmail}">RSVP Now</a>`,
      };

      const info = await transporter.sendMail(mailOptions);


    console.log('Message sent:', info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com
  } catch (error) {
    console.error('Error sending email:', error);
  }
}

main();
