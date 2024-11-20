import React, { useState } from "react";
import {
  Box,
  Container,
  TextField,
  Typography,
  Button,
  Link,
  AppBar,
  Toolbar,
  Alert,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import axios from "axios";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSignIn = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        "https://dev-project-ecommerce.upgrad.dev/api/auth/signin",
        {
          email: email,
          password: password,
        }
      );

      // Handle success response
      alert(`Login Successful! Welcome, ${response.data.name}`);
      console.log("User details:", response.data);

      // Optionally redirect the user
      // window.location.href = "/dashboard";
    } catch (err) {
      // Handle error response
      setError(err.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div>
      {/* Header */}
      <AppBar position="static" sx={{ backgroundColor: "#3f51b5" }}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            upGrad E-Shop
          </Typography>
          <Link href="/login" underline="hover" sx={{ color: "white", mx: 2 }}>
            Login
          </Link>
          <Link href="/signup" underline="hover" sx={{ color: "white" }}>
            Sign Up
          </Link>
        </Toolbar>
      </AppBar>

      {/* Main Sign-In Form */}
      <Container maxWidth="sm" sx={{ mt: 8 }}>
        <Box
          sx={{
            textAlign: "center",
            border: "1px solid #ddd",
            borderRadius: 2,
            p: 4,
            boxShadow: 2,
          }}
        >
          {/* Lock Icon */}
          <Box
            sx={{
              backgroundColor: "#f50057",
              borderRadius: "50%",
              width: 50,
              height: 50,
              display: "inline-flex",
              justifyContent: "center",
              alignItems: "center",
              mb: 2,
            }}
          >
            <LockOutlinedIcon sx={{ color: "white" }} />
          </Box>

          {/* Title */}
          <Typography variant="h5" component="h1" gutterBottom>
            Sign in
          </Typography>

          {/* Error Message */}
          {error && (
            <Alert severity="error" sx={{ mb: 2 }}>
              {error}
            </Alert>
          )}

          {/* Form */}
          <Box component="form" sx={{ mt: 2 }} onSubmit={handleSignIn}>
            <TextField
              label="Email Address *"
              variant="outlined"
              fullWidth
              margin="normal"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <TextField
              label="Password *"
              type="password"
              variant="outlined"
              fullWidth
              margin="normal"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              sx={{ mt: 2 }}
            >
              SIGN IN
            </Button>
          </Box>

          {/* Sign-Up Link */}
          <Typography variant="body2" sx={{ mt: 2, color:"#111183",pr:31 }}>
            Don't have an account?{" "}
            <Link href="/signup" underline="hover">
              Sign Up
            </Link>
          </Typography>
        </Box>
      </Container>

      {/* Footer */}
      <Typography
        variant="body2"
        align="center"
        color="textSecondary"
        sx={{ mt: 8 }}
      >
        Copyright © <Link href="/">upGrad</Link> 2021.
      </Typography>
    </div>
  );
};

export default SignIn;
