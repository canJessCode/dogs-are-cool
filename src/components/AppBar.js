import "../index.css";

import * as React from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import PetsIcon from "@mui/icons-material/Pets";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

// import Button from "@mui/material/Button";

// import MenuIcon from "@mui/icons-material/Menu";

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }} className="AppBar">
      <AppBar position="static">
        <Toolbar className="AppBar">
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 1 }}
          ></IconButton>
          <PetsIcon className="petsIcon" />
          <Typography
            marginLeft="50px"
            marginTop="15px"
            variant="h2"
            component="div"
            sx={{ flexGrow: 1 }}
          >
            ADOPT A DOGGIE AT OUR LOCAL SPCA
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
