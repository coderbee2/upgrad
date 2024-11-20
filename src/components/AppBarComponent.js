import React from "react";

import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  InputBase,
  Box,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";

const AppBarComponent = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: "#3949ab" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* Left Section */}
        <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <ShoppingCartIcon />
          <Typography
            variant="h6"
            sx={{
              fontSize:"0.75rem",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            UpGrad E-Shop
          </Typography>
        </Box>

        {/* Search Bar */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            backgroundColor: "#f1f1f1",
            borderRadius: "4px",
            padding: "0 8px",
            width: "50%",
          }}
        >
          <SearchIcon sx={{ color: "gray" }} />
          <InputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
            sx={{ ml: 1, flex: 1 }}
          />
        </Box>

        {/* Right Section */}
        <Box sx={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <Typography variant="button" sx={{ cursor: "pointer", textDecoration:"underline",  fontSize:"0.75rem", }}>
            Home
          </Typography>
          <Typography variant="button" sx={{ cursor: "pointer", textDecoration:"underline",  fontSize:"0.75rem", }}>
            Add Product
          </Typography>
          <Button variant="contained" color="error" sx={{ fontWeight: "bold" }}>
            LOGOUT
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default AppBarComponent;
