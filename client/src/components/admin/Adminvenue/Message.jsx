import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Message = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:4000/auth/messages')
      .then(response => {
        // Flatten the array of arrays and set the messages state
        setMessages(response.data.flat());
        console.log('Fetched messages:', response.data.flat()); // Log the fetched messages
      })
      .catch(error => {
        console.error('Error fetching messages:', error);
      });
  }, []);

  return (
    <div>
      <h1>Messages</h1>
      <ul>
        {messages.map(message => (
          <li key={message.submissionId}>
            <p>Name: {message.name}</p>
            <p>Email: {message.email}</p>
            <p>Message: {message.message}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Message;
