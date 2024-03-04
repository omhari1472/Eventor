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
    axios
      .get("http://localhost:4000/auth/venue")
      .then((response) => {
        setVenues(response.data.venues);
      })
      .catch((error) => {
        console.error("Error fetching venues:", error);
      });
  }, []);

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        overflowY: "auto", // Enable scrolling for the content
      }}
    >
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: `url(./images/3.jpg)`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: -1,
        }}
      />
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
        {venues.map((venue, i) => (
          <Card
            style={{ margin: "1rem", width: "300px" }}
            key={venue.venueID}
            sx={{ maxWidth: 345 }}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                width="100%"
                image={`./venueimg/${i + 1}.jpg`}
                alt={venue.venueName}
                style={{ objectFit: "cover" }}
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
    </div>
  );
}
