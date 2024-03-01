import React, { useState, useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import PersonAddAlt1OutlinedIcon from "@mui/icons-material/PersonAddAlt1Outlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import axios from "axios";
import usePrivateRoute from "../login/usePrivateRoute"; // Adjust the path as needed
// import { useNavigate } from 'react-router-dom';
import Header from "../header/Header";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';import IconButton from "@mui/material/IconButton";
const defaultTheme = createTheme();

export default function EventGuest({ isAuthenticated }) {
  usePrivateRoute(isAuthenticated);
  console.log("Authent", localStorage.getItem("authToken"));

  // const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    try {
      const eventData = {
        guestName: data.get("guestname"),
        guestEmail: data.get("guestemail"), // Fix: Use 'guestemail' for email field
      };

      const authToken = localStorage.getItem("authToken");

      const response = await axios.post(
        "http://localhost:4000/auth/guest",
        eventData,
        {
          headers: {
            Authorization: `${authToken}`,
          },
        }
      );
      console.log("Response from server:", response.data);

      const newGuest = response.data.newGuest;
      const updatedGuests = [...guests, newGuest];
      console.log("Updated guests:", updatedGuests);
      console.log("Updated guest:", response.data.newGuest);
      setGuests(updatedGuests);
  
      
      toast.success("Guest Added Successfully");

      // Handle the response as needed
      console.log("Response from server:", response.data);
    } catch (error) {
      // Handle errors
      console.error("Error submitting form:", error);
    }
  };

  const [guests, setGuests] = useState([]);

  useEffect(() => {
    // Make a GET request to fetch venue data using axios
    axios
      .get("http://localhost:4000/auth/guest")
      .then((response) => {
        // Update the state with the fetched venue data
        setGuests(response.data.guests);
      })
      .catch((error) => {
        console.error("Error fetching guests:", error);
      });
  }, []);

// Example code where you call the delete function
const handleDelete = async (eventGuestID) => {
  try {
    // Make a DELETE request to delete the guest
    const response = await axios.delete(`http://localhost:4000/auth/guest/${eventGuestID}`);
    console.log('Response after deleting:', response.data);

    // Update the state to remove the deleted guest
    toast.error("Guest Deleted successfully");
    const updatedGuests = guests.filter(guest => guest.eventGuestID !== eventGuestID);
    setGuests(updatedGuests);
  } catch (error) {
    console.error('Error deleting guest:', error);
    // Handle error
  }
};


  usePrivateRoute(true);

  return (
    <>
      <ToastContainer />
      <Header />
      <div style={{ display: "flex" }}>
        <ThemeProvider theme={defaultTheme}>
          <Grid container component="main" sx={{ height: "100vh" }}>
            <CssBaseline />
            <Grid
            style={{minWidth:'100%'}}  
              item
              xs={12}
              sm={8}
              md={5}
              component={Paper}
              elevation={6}
              square
            >
              <Box
                sx={{
                  my: 8,
                  mx: 4,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                  <PersonAddAlt1OutlinedIcon />
                </Avatar>

                <Typography component="h1" variant="h5">
                  Add Guest
                </Typography>
                <Box
                  component="form"
                  noValidate
                  onSubmit={handleSubmit}
                  sx={{ mt: 1 }}
                >
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="guestname"
                    label="Guest Name"
                    name="guestname"
                    autoComplete="off"
                    autoFocus
                  />
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="guestemail"
                    label="Guest Email"
                    name="guestemail"
                    autoComplete="off"
                    autoFocus
                  />

                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                  >
                    Add Guest
                  </Button>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </ThemeProvider>
        <List
          sx={{ width: "100%", maxWidth: 500, padding:'1rem',border:'2px solid grey', bgcolor: "background.paper" }}
        >
        <h1 style={{fontSize:'2rem',color:"blueviolet"}}>
          Guest List
        </h1>
          {guests.map((guest) => (
            <ListItem
              key={guest.eventGuestID}
              disableGutters
              secondaryAction={
                <IconButton aria-label="comment" onClick={() => handleDelete(guest.eventGuestID)}>
                  <DeleteOutlineOutlinedIcon />
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
}
