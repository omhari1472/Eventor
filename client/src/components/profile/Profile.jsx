import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Profile = () => {
  const [eventDetails, setEventDetails] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEventDetails = async () => {
      try {
        
        // Make a GET request using axios to your backend API endpoint

        const authToken = localStorage.getItem("authToken");
        
        const response = await axios.get(
          'http://localhost:4000/auth/event',
          {
            headers: {
              Authorization: `${authToken}`,
            },
          }
          );
        const data = response.data;

        // Set the event details array in state
        setEventDetails(data.eventDetails); // Assuming your events are under the "allEvents" property
        setLoading(false);
      } catch (error) {
        console.error('Error fetching event details:', error);
        setLoading(false);
      }
    };

    fetchEventDetails();
  }, []); // Empty dependency array ensures the effect runs only once on mount

  return (
    <div>
      {loading ? (
        <p>Loading event details...</p>
      ) : eventDetails.length > 0 ? (
        <div>
          <h2>Event Details:</h2>
          {eventDetails.map((event) => (
            <div key={event.eventID}>
              <h3>{event.eventName}</h3>
              <p>Date: {event.eventDate}</p>
              <p>Time: {event.eventTime}</p>
              <p>Description: {event.eventType}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>No event details available.</p>
      )}
    </div>
  );
};

export default Profile;
