import * as React from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import usePrivateRoute from "./usePrivateRoute";

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function LogIn({ setIsAuthenticated }) {
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    try {
      const email = data.get("email");
      const password = data.get("password");

      if (!email || !password) {
        toast.error("Email and password are required");
        return;
      }

      const response = await axios.post("http://localhost:4000/auth/login", {
        email,
        password,
      });

      if (response.status === 200) {
        const { token, user } = response.data;

        localStorage.setItem("authToken", token);
        localStorage.setItem("user", JSON.stringify(user));
        setIsAuthenticated(true);

        toast.success("Login successful!");
        setTimeout(() => {
          if (user.role === 'admin') {
            navigate('/admin'); // Redirect to the admin page
          } else {
            navigate('/home'); // Redirect to the home page
          }
            }, 1000);
      } else {
        console.error("Login unsuccessful:", response.data.error);

        // Check if the error object has a response property
        if (response.data.error === "UserNotFound") {
          toast.error("User not found. Please check your email.");
        } else if (response.status === 401) {
          if (response.data.error === "IncorrectPassword") {
            toast.error("Incorrect password. Please try again.");
          } else {
            toast.error(
              "Invalid credentials. Please check your email and password."
            );
          }
        } else {
          console.error("Login unsuccessful:", response.data.error);
          toast.error(`An error occurred. Status Code: ${response.status}`);
        }
      }
    } catch (error) {
      console.error("Error during login:", error);

      // Check if the error object has a response property
      if (error.response) {
        // Log the entire response object for debugging purposes
        console.log("Response object:", error.response);

        // Extract the status code and provide specific messages based on it
        const statusCode = error.response.status;
        if (statusCode === 401) {
          console.error("Login unsuccessful:", error.response.data.error);

          if (error.response.data.error === "IncorrectPassword") {
            toast.error("Incorrect password. Please try again.");
          } else if (error.response.data.error === "UserNotFound") {
            toast.error("User not found. Please check your email.");
          } else {
            toast.error(
              "Invalid credentials. Please check your email and password."
            );
          }
        } else {
          console.error("Login unsuccessful:", error.response.data.error);
          toast.error(`An error occurred. Status Code: ${statusCode}`);
        }
      } else {
        // Log a general error message if the response property is not present
        console.log("Unexpected error:", error);
        toast.error("An unexpected error occurred. Please try again later.");
      }
    }
  };

  const containerStyle = {
    background: "rgba(255, 255, 255, 0.18)",
    borderRadius: "16px",
    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
    backdropFilter: "blur(3.5px)",
    WebkitBackdropFilter: "blur(3.5px)",
    border: "1px solid rgba(255, 255, 255, 0.69)",
    objectFit: "contain",
    color: "white",
    margin: "auto",
    height: "70vh",
  };

  usePrivateRoute(true);

  return (
    <div
      style={{
        backgroundImage: `url(./images/background.jpg)`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "100vh",
        maxWidth: "100%",
        backgroundPosition: "center",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <ToastContainer />

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
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Log in
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
                    <Link component={RouterLink} to="/signup" variant="body2">
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
