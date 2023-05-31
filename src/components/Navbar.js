import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";

function NavBar() {
  return (
    <>
      <AppBar
        elevation={5}
        position="sticky"
        sx={{ backgroundColor: "black", color: "white" }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            {/* <IconButton size="large" sx={{ p: 1 }}>
                <Avatar  alt="IIITV" src={img_url}/>
              </IconButton> */}

            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 1000,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              IMDB APP
            </Typography>

            <Box
              sx={{
                marginLeft: "auto",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
            <Typography
            variant="body1"
                component="a"
                href="/"
                sx={{ mr: 2, color: "inherit", textDecoration: "none" }}>Home

            </Typography>
              <Typography
                variant="body1"
                component="a"
                href="/moviecreation"
                sx={{ mr: 2, color: "inherit", textDecoration: "none" }}
              >
                Add Movie
              </Typography>

              <Typography
                variant="body1"
                component="a"
                href="/actorcreation"
                sx={{ mr: 2, color: "inherit", textDecoration: "none" }}
              >
                Add Actor
              </Typography>
              <Typography
                variant="body1"
                component="a"
                href="/producercreation"
                sx={{ mr: 2, color: "inherit", textDecoration: "none" }}
              >
                Add Producer
              </Typography>
              <Typography
                variant="body1"
                component="a"
                href="/genrecreation"
                sx={{ mr: 2, color: "inherit", textDecoration: "none" }}
              >
                Add Genre
              </Typography>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}

export default NavBar;
