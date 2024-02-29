import React from 'react';

const RSVPInvitation = ({ guestName, eventName, eventDate, eventTime, eventVenue, rsvpLink }) => {
  return (
    <div className="max-w-2xl mx-auto bg-white p-8 rounded shadow-md mt-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold">RSVP Invitation</h1>
      </div>

      <div className="mb-6">
        <p>Dear {guestName},</p>
        <p>You are invited to our special event:</p>
        <ul className="list-disc ml-8">
          <li><strong>Event Name:</strong> {eventName}</li>
          <li><strong>Date:</strong> {eventDate}</li>
          <li><strong>Time:</strong> {eventTime}</li>
          <li><strong>Venue:</strong> {eventVenue}</li>
        </ul>
        <p>Please let us know if you can attend by clicking the RSVP button below:</p>
      </div>

      <a
        href={rsvpLink}
        className="block w-full bg-blue-500 text-white py-2 px-4 rounded text-center"
        target="_blank"
        rel="noopener noreferrer"
      >
        RSVP Now
      </a>
    </div>
  );
};

export default RSVPInvitation;
