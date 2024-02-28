import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';
import usePrivateRoute from '../login/usePrivateRoute'; // Adjust the path as needed
import { useNavigate } from 'react-router-dom';
import { MenuItem } from '@mui/material';


const defaultTheme = createTheme();

export default function Event({isAuthenticated}){
  usePrivateRoute(isAuthenticated);
  console.log("Authent",localStorage.getItem('authToken'));

  // const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
  
    try {
      const eventData = {
        eventName: data.get('eventname'),
        eventType: data.get('eventtype'),
        eventDate: data.get('eventdate'),
        eventTime: data.get('eventtime'),
        venueID: data.get('venueid'),
      };
  
      const authToken = localStorage.getItem('authToken');

      const response = await axios.post('http://localhost:4000/auth/event', eventData, {
        headers: {
          Authorization: `${authToken}`,
        },
      });
      
  
      // Handle the response as needed
      console.log('Response from server:', response.data);
    } catch (error) {
      // Handle errors
      console.error('Error submitting form:', error);
    }
  };
  
  
  usePrivateRoute(true);


  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Create Your Event
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
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
                <MenuItem value="Graduation parties">Graduation parties</MenuItem>
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
                type='date'
                autoComplete="off"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="eventtime"
                label="Event Time"
                type='time'
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
  );
}