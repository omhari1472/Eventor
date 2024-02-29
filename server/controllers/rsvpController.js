import nodemailer from 'nodemailer';
import { executeQuery } from '../database/db.js';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  host: 'smtp.gmail.net',
  port: 465,
  secure: true,
  auth: {
    user: 'omhari1472@gmail.com',
    pass: 'bfyf nccv xgld aond',
  },
});

export async function sendInvitations() {
  try {
    // Fetch guest emails from the database
    const guests = await executeQuery('SELECT guestName, guestEmail, eventID FROM EventGuests');

    // Use Promise.all to wait for all emails to be sent
    await Promise.all(guests.map(async (guest) => {
      const { guestName, guestEmail, eventID } = guest;

      const mailOptions = {
        from: 'omhari1472@gmail.com',
        to: guestEmail,
        subject: 'RSVP Invitation',
        html: `<p>Dear ${guestName},</p>
               <p>You are invited to our event. Please RSVP by clicking the link below:</p>
               <a href="http://your-website.com/rsvp?eventId=${eventID}&guestEmail=${guestEmail}">RSVP Now</a>`,
      };

      await transporter.sendMail(mailOptions);

      // Log the guest's email to whom the invitation is sent
      console.log(`Invitation sent to: ${guestEmail}`);
    }));

    console.log('Invitations sent successfully');
    return 'Invitations sent successfully';
  } catch (error) {
    console.error('Error sending invitations:', error);
    throw error;
  } finally {
    // Close the transporter to terminate background processes
    transporter.close();
    // Exit the process after a short delay to ensure completion
    setTimeout(() => {
      process.exit();
    }, 1000); // Adjust as needed
  }
}

// Use a try-catch block to handle the response
try {
  const response = await sendInvitations();
  console.log(response); // Log the response
} catch (error) {
  console.error('Error:', error);
}
