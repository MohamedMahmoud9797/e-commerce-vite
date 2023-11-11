// Import Swiper React components
// eslint-disable-next-line no-unused-vars
import React from "react";

// Import Swiper styles
import { Swiper, SwiperSlide } from "swiper/react";
import {  Pagination, } from "swiper/modules";
import { Grid, Container, Box, Typography, Button, Stack, useTheme } from "@mui/material";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./slider.css";
const Hero = () => {
  const theme = useTheme();
  const sliderData = [
    {text: "Men", image: "../../../public/assstes/banner-15.jpg"},
    {text: "Women", image: "../../../public/assstes/banner-25.jpg"},
  ]

  return (
    <Box sx={{ backgroundColor: theme.palette.grey.main }}>
      <Container sx={{ mt: 5 }}>
        <Grid container spacing={2} direction={"row"} sx={{ mb: 5 }}>
          {/* left side grid item */}
          <Grid item md={8} xs={12}>
          <Swiper
          loop={true}
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {sliderData.map((item) => {
            return (
              <SwiperSlide key={item.link} className="parent-slider">
                <img src={item.image} alt="" />
                <Box
                  sx={{
                    [theme.breakpoints.up("sm")]: {
                      position: "absolute",
                      left: "10%",
                      textAlign: "left",
                    },

                    [theme.breakpoints.down("sm")]: {
                      pt: 4,
                      pb: 6,
                    },
                  }}
                >
                  <Typography
                    sx={{
                      color: "#222",
                    }}
                    variant="h5"
                  >
                    LIFESTYLE COLLECTION
                  </Typography>

                  <Typography
                    sx={{
                      color: "#222",
                      fontWeight: 500,
                      my: 1,
                    }}
                    variant="h3"
                  >
                    {item.text}
                  </Typography>

                  <Stack
                    sx={{
                      justifyContent: { xs: "center", sm: "left" },
                    }}
                    direction={"row"}
                    alignItems={"center"}
                  >
                    <Typography color={"#333"} mr={1} variant="h4">
                      SALE UP TO
                    </Typography>
                    <Typography color={"#D23F57"} variant="h4">
                      30% OFF
                    </Typography>
                  </Stack>
                  <Typography
                    sx={{
                      color: "#000",
                      fontWeight: 300,
                      my: 1,
                    }}
                    variant="body1"
                  >
                    Get Free Shipping on orders over $99.00
                  </Typography>

                  <Button
                    sx={{
                      px: 5,
                      py: 1,
                      mt: 2,
                      backgroundColor: "#222",
                      boxShadow: "0px 4px 16px rgba(43, 52, 69, 0.1)",
                      color: "#fff",
                      borderRadius: "1px",
                      "&:hover": {
                        bgcolor: "#151515",
                        boxShadow: "0px 4px 16px rgba(43, 52, 69, 0.1)",
                      },
                    }}
                    variant="contained"
                  >
                    shop now
                  </Button>
                </Box>
              </SwiperSlide>
            );
          })}
        </Swiper>

          </Grid>

          {/* right  side grid item */}
          <Grid item md={4}>
            <Grid   
            >
              <Box>
                <img
                  src="../../../public/assstes/banner-17.jpg"
                  width={"100%"}
                />
              </Box>
              <Box>
                <img
                  src="../../../public/assstes/banner-16.jpg"
                  width={"100%"}
                />
              </Box>
            </Grid>
          </Grid>
        </Grid>
        sssss
      </Container>
    </Box>
  );
};

export default Hero;
