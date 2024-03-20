import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { addDays } from "date-fns";
import { useNavigate } from "react-router-dom";
import {
  Button,
  CardActionArea,
  CardActions,
  Modal,
  Grid,
} from "@mui/material";
import Header from "../header/Header";
import usePrivateRoute from "../login/usePrivateRoute"; // Adjust the path as needed

export default function Venue({ isAuthenticated }) {
  usePrivateRoute(isAuthenticated);
  const navigate = useNavigate();

  const [venues, setVenues] = useState([]);
  const [selectedVenue, setSelectedVenue] = useState(null);
  const [excludedDates, setExcludedDates] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [availability, setAvailability] = useState([]);
  const [startDate, setStartDate] = useState(new Date()); // Set initial date to today

  useEffect(() => {
    axios
      .get("http://localhost:4000/auth/venue")
      .then((response) => {
        setVenues(response.data.venues);
      })
      .catch((error) => {
        console.error("Error fetching venues:", error);
      });
  }, []);

  useEffect(() => {
    // Fetch availability data for the selected venue
    if (selectedVenue) {
      axios
        .get(
          `http://localhost:4000/auth/venue/${selectedVenue.venueID}/availability`
        )
        .then((response) => {
          const formattedDates = response.data.availability.map(
            (item) => new Date(item.date)
          );
          console.log("gg", formattedDates);
          setExcludedDates(formattedDates);
        })
        .catch((error) => {
          console.error("Error fetching availability:", error);
        });
    }
  }, [selectedVenue]);

  const handleCardClick = (venue) => {
    setSelectedVenue(venue);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        overflowY: "auto", // Enable scrolling for the content
      }}
    >
      <Header />
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          maxWidth: "100%",
          justifyContent: "space-between",
          padding: "3rem",
        }}
      >
        {venues.map((venue) => (
          <Card
            key={venue.venueID}
            style={{ margin: "1rem", width: "300px", cursor: "pointer" }}
            sx={{ maxWidth: 345 }}
            onClick={() => handleCardClick(venue)}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                width="100%"
                image={`./venueimg/${venue.venueID}.jpg`}
                alt={venue.venueName}
                style={{ objectFit: "cover" }}
              />
              <CardContent>
                <Typography variant="h6" component="div">
                  {venue.venueName}
                </Typography>
                <Typography variant="body2" component="div">
                  Capacity: {venue.capacity}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Address: {venue.address}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Contact Details: {venue.contactInfo}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Price: {venue.price}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Read More...
              </Button>
            </CardActions>
          </Card>
        ))}
      </div>
      {/* Venue Details Modal */}
      <Modal
        open={isModalOpen}
        onClose={handleCloseModal}
        aria-labelledby="venue-modal-title"
        aria-describedby="venue-modal-description"
      >
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "#fff",
            padding: "2rem",
            borderRadius: "8px",
            maxWidth: "80%",
            maxHeight: "80%",
            overflow: "auto",
          }}
        >
          {selectedVenue && (
            <>
              <Typography variant="h5" id="venue-modal-title" gutterBottom>
                {selectedVenue.venueName}
              </Typography>
              {/* Add venue image */}
              <CardMedia
                component="img"
                height="140"
                width="100%"
                image={`./venueimg/${selectedVenue.venueID}.jpg`}
                alt={selectedVenue.venueName}
                style={{ objectFit: "cover", marginBottom: "1rem" }}
              />
              <Typography
                variant="body1"
                id="venue-modal-description"
                paragraph
              >
                Capacity: {selectedVenue.capacity}
              </Typography>
              <Typography
                variant="body1"
                id="venue-modal-description"
                paragraph
              >
                Address: {selectedVenue.address}
              </Typography>
              <Typography
                variant="body1"
                id="venue-modal-description"
                paragraph
              >
                Contact Details: {selectedVenue.contactInfo}
              </Typography>
              <Typography
                variant="body1"
                id="venue-modal-description"
                paragraph
              >
                Price: {selectedVenue.price}
              </Typography>
              <div>
                
              </div>
              <Typography
                variant="body1"
                id="venue-modal-description"
                paragraph
              >
                Availability Calendar
              </Typography>
              {/* Date picker */}
              <DatePicker
                selected={startDate}
                id="eventdate"
                label="eventdate"
                width="100%"
                name="eventdate"
                minDate={new Date()}
                maxDate={addDays(new Date(), 90)} // Set max date to 90 days from today
                excludeDates={excludedDates} // Use excludedDates directly
                onChange={(date) => setStartDate(date)}
                inline
                readOnly
              />
              {/* Close button */}
              <Button
                onClick={handleCloseModal}
                style={{ position: "absolute", top: "0.5rem", right: "0.5rem" }}
                color="primary"
              >
                Close
              </Button>
              {/* Book Now button */}
              <Button
                variant="contained"
                color="primary"
                style={{
                  position: "absolute",
                  bottom: "0.5rem",
                  right: "0.5rem",
                }}
                onClick={() => {
                  // Navigate to the event booking page
                  navigate("/event"); // Adjust the path as needed
                }}
              >
                Book Now
              </Button>
              ;
            </>
          )}
        </div>
      </Modal>
    </div>
  );
}
