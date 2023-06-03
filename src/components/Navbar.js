import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";

function NavBar() {
  return (
    <>
      <AppBar
        elevation={5}
        position="sticky"
        sx={{ backgroundColor: "rgb(35 48 66)", color: "white" }}
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
              MOVIE APP
            </Typography>

            <Box
              sx={{
                marginLeft: "auto",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Button
                variant="outlined"
                color="primary"
                component="a"
                href="/"
                sx={{ mr: 2, color: "inherit", textDecoration: "none" }}
              >
                Home
              </Button>
              <Button
                variant="outlined"
                color="primary"
                component="a"
                href="/moviecreation"
                sx={{ mr: 2, color: "inherit", textDecoration: "none" }}
              >
                Add Movie
              </Button>
              <Button
                variant="outlined"
                color="primary"
                component="a"
                href="/actorcreation"
                sx={{ mr: 2, color: "inherit", textDecoration: "none" }}
              >
                Add Actor
              </Button>
              <Button
                variant="outlined"
                color="primary"
                component="a"
                href="/producercreation"
                sx={{ mr: 2, color: "inherit", textDecoration: "none" }}
              >
                Actor Producer
              </Button>
              <Button
                variant="outlined"
                color="primary"
                component="a"
                href="/genrecreation"
                sx={{ mr: 2, color: "inherit", textDecoration: "none" }}
              >
                Add Genre
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}

export default NavBar;
