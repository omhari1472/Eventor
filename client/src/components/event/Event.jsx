import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import axios from "axios";
import usePrivateRoute from "../login/usePrivateRoute"; // Adjust the path as needed
// import { useNavigate } from 'react-router-dom';
import { MenuItem } from "@mui/material";
import Header from "../header/Header";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";

const defaultTheme = createTheme();

export default function Event({ isAuthenticated }) {
  usePrivateRoute(isAuthenticated);
  // console.log("Authent", localStorage.getItem("authToken"));

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
  
    // Check for empty fields
    const requiredFields = ["eventname", "eventtype", "eventdate", "eventtime", "venueid"];
    const emptyFields = requiredFields.filter((field) => !data.get(field));
  
    if (emptyFields.length > 0) {
      // Display specific error messages for empty fields
      emptyFields.forEach((field) => {
        toast.error(`${field.charAt(0).toUpperCase() + field.slice(1)} is required.`);
      });
      return;
    }
  
    try {
      const eventData = {
        eventName: data.get("eventname"),
        eventType: data.get("eventtype"),
        eventDate: data.get("eventdate"),
        eventTime: data.get("eventtime"),
        venueID: data.get("venueid"),
      };
  
      
      const authToken = localStorage.getItem("authToken");
  
      const response = await axios.post(
        "http://localhost:4000/auth/event",
        eventData,
        {
          headers: {
            Authorization: `${authToken}`,
          },
        }
      );
  
      // Handle the response as needed
      toast.success("Event created successfully!");
      console.log("Response from server:", response.data);
      localStorage.setItem('eventData', eventData);
      setTimeout(() => {
        navigate("/checkout"); 
      }, 2000);
    } catch (error) {
      // Handle errors
      console.error("Error submitting form:", error);
      toast.error("An error occurred while creating the event.");
    }
  };
  
  const containerStyle = {
    background: 'rgba(255, 255, 255, 0.18)',
    borderRadius: '16px',
    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
    backdropFilter: 'blur(3.5px)',
    WebkitBackdropFilter: 'blur(3.5px)',
    border: '1px solid rgba(255, 255, 255, 0.69)',
    objectFit:'contain',
    color:'white',
    margin:'0 auto',
    height:'83vh',
    zIndex:'1',

  };
  usePrivateRoute(true);

  return (
    <div
    style={{
      position: "relative",
      backgroundImage: `url(./images/3.jpg)`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      maxWidth: "100%",
      backgroundPosition: "center",
      overflow: 'hidden',
      minWidth:'100%',
      background:'trasparent',
      height: '100vh',
    }}
  >
      <ToastContainer style={{margin:'0 auto'}} />
      <Header style={{ zIndex: '1' }} />
      <ThemeProvider theme={defaultTheme}>
        <Grid container component="main" sx={{ height: "100vh" }}>
          <CssBaseline />
          <Grid
            item
            xs={12}
            sm={8}
            md={5}
            style={containerStyle}
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
                <EventAvailableIcon />
              </Avatar>
              <Typography component="h1" style={{color:'black'}}  variant="h5">
                Create Your Event
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
                  id="eventname"
                  label="Event Name"
                  name="eventname"
                  autoComplete="off"
                  autoFocus
                />
                <TextField
                  select
                  margin="normal"
                  required
                  fullWidth
                  id="eventtype"
                  label="Event Type"
                  name="eventtype"
                  autoComplete="off"
                  autoFocus
                >
                  <MenuItem value="Wedding">Wedding</MenuItem>
                  <MenuItem value="Birthday Paries">Birthday Paries</MenuItem>
                  <MenuItem value="Annivesaries">Annivesaries</MenuItem>
                  <MenuItem value="Graduation parties">
                    Graduation parties
                  </MenuItem>
                  <MenuItem value="Exhibtions">Exhibtions</MenuItem>
                  <MenuItem value="Conferences">Conferences</MenuItem>
                  <MenuItem value="Seminars">Seminars</MenuItem>
                </TextField>

                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="eventdate"
                  label="Event Date"
                  name="eventdate"
                  type="date"
                  autoComplete="off"
                  autoFocus
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="eventtime"
                  label="Event Time"
                  type="time"
                  name="eventtime"
                  autoComplete="off"
                  autoFocus
                />

                <TextField
                  select
                  margin="normal"
                  required
                  fullWidth
                  id="venueid"
                  label="Venue"
                  name="venueid"
                  autoComplete="off"
                  autoFocus
                >
                  <MenuItem value="1">Wedding</MenuItem>
                  <MenuItem value="2">Birthday Paries</MenuItem>
                  <MenuItem value="3">Annivesaries</MenuItem>
                  <MenuItem value="4">Graduation parties</MenuItem>
                  <MenuItem value="5">Exhibtions</MenuItem>
                  <MenuItem value="6">Conferences</MenuItem>
                  <MenuItem value="7">Seminars</MenuItem>
                </TextField>

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Create Event
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </ThemeProvider>
    </div>
  );
}
