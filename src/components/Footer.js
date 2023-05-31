import { Grid, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import { styled } from "@mui/system";

const Image = styled("img")({
  borderRadius: "50%",
  width: 80,
  marginTop: "30px",
});

const Footer = () => {
  const img_url =
    "https://i.pinimg.com/736x/7c/32/cf/7c32cf179c28869753c33028b06d443b.jpg";

  return (
    <Container
      maxWidth="xl"
      sx={{ bgcolor: "black", height: 280 }}
      position="fixed"
      
    >
      <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Image src={img_url}></Image>
      </Box>

      <Box>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Box>
              <Typography variant="h6" sx={{ color: "#ffffff" }}>
                Welcome to Movie Management App
              </Typography>
            </Box>
          </Grid>

          <Grid
            item
            xs={6}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box>
              <Typography
                variant="h6"
                sx={{ color: "#ffffff", fontSize: "16px" }}
              >
                Some Links
              </Typography>
              <Box sx={{ mt: 1 }}>
                <Typography
                  variant="subtitle1"
                  sx={{ color: "#ffffff", fontSize: "14px" }}
                >
                  FAQ
                </Typography>
                <Typography
                  variant="subtitle1"
                  sx={{ color: "#ffffff", fontSize: "14px" }}
                >
                  Terms of Service
                </Typography>
                <Typography
                  variant="subtitle1"
                  sx={{ color: "#ffffff", fontSize: "14px" }}
                >
                  Support
                </Typography>
              </Box>
            </Box>
          </Grid>

          <Grid
            item
            xs={12}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              variant="h6"
              sx={{ color: "#ffffff", fontStyle: "italic" }}
            >
              © All Rights Reserved - Movie App{" "}
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Footer;
