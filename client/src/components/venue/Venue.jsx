import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import Header from "../header/Header";

export default function Venue() {
  const [venues, setVenues] = useState([]);

  useEffect(() => {
    // Make a GET request to fetch venue data using axios
    axios
      .get("http://localhost:4000/auth/venue")
      .then((response) => {
        // Update the state with the fetched venue data
        setVenues(response.data.venues);
      })
      .catch((error) => {
        console.error("Error fetching venues:", error);
      });
  }, []); // The empty dependency array ensures that this effect runs only once, similar to componentDidMount

  return (
    <>
      <Header />
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          maxWidth: "100%",
          overflow: "hidden",
          justifyContent: "space-between",
          padding: "3rem",
        }}
      >
        {venues.map((venue, i) => (
          <Card
            style={{ margin: "1rem", width: "300px" }} // Set a fixed width for the cards
            key={venue.venueID}
            sx={{ maxWidth: 345 }}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                width="100%" // Set to 100% to ensure the image covers the entire area
                image={`./venueimg/${i + 1}.jpg`} // Replace with the actual image URL from your venue
                alt={venue.venueName}
                style={{ objectFit: "cover" }} // Ensure the image covers the entire area
              />
              <CardContent>
                <Typography variant="h6" component="div">
                  {venue.capacity}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {venue.address}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {venue.contactInfo}
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
    </>
  );
}
