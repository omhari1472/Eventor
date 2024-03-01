import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';

import usePrivateRoute from './usePrivateRoute';

 

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function LogIn({ setIsAuthenticated }) {

  const navigate = useNavigate();
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    try {
      const response = await axios.post('http://localhost:4000/auth/login', {
        email: data.get('email'),
        password: data.get('password'),
      });

      if (response.status === 200) {
        const { token, user } = response.data;

        // Save the token to localStorage
        localStorage.setItem('authToken', token);
  
        // You can also store other user-related information if needed
        localStorage.setItem('user', JSON.stringify(user));
  
        console.log("Authent",localStorage.getItem('authToken'));
        setIsAuthenticated(true);

        navigate('/home');        
         // Set isAuthenticated to true upon successful login
      } else {
        // Handle login failure, display an error message or take appropriate action
        console.error('Login unsuccessful:', response.data.error);
      }
    } catch (error) {
      // Handle errors
      console.error('Error during login:', error);
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
    margin:'auto',
    height:'70vh',

  };
  

  usePrivateRoute(true);


  return (
    <div style={{backgroundImage:`url(./images/background.jpg)`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height:'100vh',
    maxWidth:'100%',
    backgroundPosition: 'center',
    display:'flex',
    justifyContent:'center'
    }}>
    <ThemeProvider theme={defaultTheme}>

      <Grid container component="main"  sx={{ height: '100vh' }}>
        <CssBaseline />
       
        <Grid item xs={12} sm={8} md={5} style={containerStyle} component={Paper} elevation={6} square>
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
              Log in
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Log In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
    </div>
  );
}