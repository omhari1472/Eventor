import React, { useState, useEffect } from "react";
import axios from "axios";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import HourglassEmptyIcon from "@mui/icons-material/HourglassEmpty";
import IconButton from "@mui/material/IconButton";
import CircularProgress from "@mui/material/CircularProgress";
import ResponsiveAppBar from "../header/Test";
import Header from "../header/Header";

const RSVPInvitation = ({
  guestName,
  eventName,
  eventDate,
  eventTime,
  eventVenue,
  rsvpLink,
}) => {
  const [guests, setGuests] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Make a GET request to fetch venue data using axios
    axios
      .get("http://localhost:4000/auth/guest")
      .then((response) => {
        // Update the state with the fetched venue data
        const updatedGuests = response.data.guests.map((guest) => ({
          ...guest,
          emailStatus: "pending", // Add emailStatus to track the status of the email
        }));
        setGuests(updatedGuests);
      })
      .catch((error) => {
        console.error("Error fetching guests:", error);
      });
  }, []);

  const handleRSVP = async () => {
    try {
      setLoading(true);

      // Make an API call to your server to send emails
      await axios.post("http://localhost:4000/auth/rsvp", { guests });

      // Update the status to "success" once emails are sent successfully
      const updatedGuests = guests.map((guest) => ({
        ...guest,
        emailStatus: "success",
      }));
      setGuests(updatedGuests);

      // Add any additional logic or feedback as needed
      console.log("Emails sent successfully!");
    } catch (error) {
      console.error("Error sending emails:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>

    <ResponsiveAppBar/>
    <Header/>
    <div className="max-w-2xl mx-auto bg-white p-8 rounded shadow-md mt-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold">RSVP Invitation</h1>
      </div>

      <div className="mb-6">
        <p>Dear {guestName},</p>
        <p>You are invited to our special event:</p>
        <ul className="list-disc ml-8">
          <li>
            <strong>Event Name:</strong> {eventName}
          </li>
          <li>
            <strong>Date:</strong> {eventDate}
          </li>
          <li>
            <strong>Time:</strong> {eventTime}
          </li>
          <li>
            <strong>Venue:</strong> {eventVenue}
          </li>
        </ul>
        <p>
          Please let us know if you can attend by clicking the RSVP button
          below:
        </p>
      </div>

      <button
        className="block w-full bg-blue-500 text-white py-2 px-4 rounded text-center"
        onClick={handleRSVP}
        rel="noopener noreferrer"
        disabled={loading}
      >
        {loading ? (
          <div>
            Sending...
            <CircularProgress size={20} style={{ color: "white" }} />
          </div>
        ) : (
          "RSVP Now"
        )}
      </button>

      <List
        sx={{
          width: "100%",
          maxWidth: 500,
          padding: "1rem",
          border: "2px solid grey",
          bgcolor: "background.paper",
        }}
      >
        <h1 style={{ fontSize: "2rem", color: "blueviolet" }}>Guest List</h1>
        {guests.map((guest) => (
          <ListItem
            key={guest.eventGuestID}
            disableGutters
            secondaryAction={
              <IconButton aria-label="comment">
                {guest.emailStatus === "pending" ? (
                  <HourglassEmptyIcon color="primary" />
                ) : (
                  <CheckCircleOutlineIcon color="success" />
                )}
              </IconButton>
            }
          >
             
            <ListItemText
              primary={guest.guestName}
              secondary={guest.guestEmail}
            />
          </ListItem>
        ))}
      </List>
    </div>
    </>
  );
};

export default RSVPInvitation;
