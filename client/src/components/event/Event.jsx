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
import usePrivateRoute from '../login/usePrivateRoute';
import { useNavigate } from 'react-router-dom';
import { MenuItem } from '@mui/material';


const defaultTheme = createTheme();

export default function Event(){
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    try {
      const response = await axios.post('http://localhost:4000/auth/register', {
        username: data.get('username'),
        email: data.get('email'),
        password: data.get('password'),
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
                id="eventName"
                label="Event Name"
                name="eventName"
                autoComplete="off"
                autoFocus
              />
              <TextField
                select
                margin="normal"
                required
                fullWidth
                id="eventType"
                label="Event Type"
                name="eventType"
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
                id="eventDate"
                label="Event Date"
                name="eventDate"
                type='date'
                autoComplete="off"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="eventTime"
                label="Event Time"
                type='time'
                name="eventTime"
                autoComplete="off"
                autoFocus
              />
            
            <TextField
                select
                margin="normal"
                required
                fullWidth
                id="venueId"
                label="Venue"
                name="venueId"
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