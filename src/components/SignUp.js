import React from "react";
import {
  Box,
  Container,
  TextField,
  Typography,
  Button,
  Link,
  AppBar,
  Toolbar,
 
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

const SignUp = () => {
  // const [formData, setFormData] = useState({
  //   firstName: "",
  //   lastName: "",
  //   email: "",
  //   password: "",
  //   confirmPassword: "",
  //   contactNumber: "",
  // });
  // const [error, setError] = useState(null);
  // const [success, setSuccess] = useState(null);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSignUp = async (event) => {
//     event.preventDefault();
  
//     const { firstName, lastName, email, password, confirmPassword, contactNumber } = formData;
  
//     // Simple validation
//     if (password !== confirmPassword) {
//       setError("Passwords do not match");
//       return;
//     }
  
//     try {
//       const response = await axios.post(
//         "https://dev-project-ecommerce.upgrad.dev/api/auth/signup",
//         {
//           firstName,
//           lastName,
//           email,
//           password,
//           contactNumber,
//         }
//       );
  
//       setSuccess("Sign-up successful! Please log in.");
//       setError(null);
  
//       // Clear the form
//       setFormData({
//         firstName: "",
//         lastName: "",
//         email: "",
//         password: "",
//         confirmPassword: "",
//         contactNumber: "",
//       });
  
//       // Optionally redirect
//       // window.location.href = "/login";
//     } catch (err) {
//       setError(err.response?.data?.message || "Something went wrong");
//       setSuccess(null);
//     }
//   };
  

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

      {/* Main Sign-Up Form */}
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
            Sign up
          </Typography>

          {/* Error Message */}
          {/* {error && (
            <Alert severity="error" sx={{ mb: 2 }}>
              {error}
            </Alert>
          )} */}

          {/* Success Message */}
          {/* {success && (
            <Alert severity="success" sx={{ mb: 2 }}>
              {success}
            </Alert>
          )} */}

          {/* Form */} {/*onSubmit={handleSignUp}  onChange={handleChange} */}
          <Box component="form" sx={{ mt: 2 }} >
            <TextField
              label="First Name *"
              name="firstName"
              variant="outlined"
              fullWidth
              margin="normal"
              // value={formData.firstName}
             
              required
            />
            <TextField
              label="Last Name *"
              name="lastName"
              variant="outlined"
              fullWidth
              margin="normal"
              // value={formData.lastName}
              
              required
            />
            <TextField
              label="Email Address *"
              name="email"
              type="email"
              variant="outlined"
              fullWidth
              margin="normal"
              // value={formData.email}
             
              required
            />
            <TextField
              label="Password *"
              name="password"
              type="password"
              variant="outlined"
              fullWidth
              margin="normal"
              // value={formData.password}
             
              required
            />
            <TextField
              label="Confirm Password *"
              name="confirmPassword"
              type="password"
              variant="outlined"
              fullWidth
              margin="normal"
              // value={formData.confirmPassword}
              
              required
            />
            <TextField
              label="Contact Number *"
              name="contactNumber"
              type="tel"
              variant="outlined"
              fullWidth
              margin="normal"
              // value={formData.contactNumber}
             
              required
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              sx={{ mt: 2 }}
            >
              SIGN UP
            </Button>
          </Box>

          {/* Login Link */}
          <Typography variant="body2" sx={{ mt: 2 }}>
            Already have an account?{" "}
            <Link href="/login" underline="hover">
              Sign in
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

export default SignUp;
