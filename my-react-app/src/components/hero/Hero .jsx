// Import Swiper React components
// eslint-disable-next-line no-unused-vars
import React from "react";

// Import Swiper styles
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
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
              pagination={{
                dynamicBullets: true,
              }}
              className="mySwiper"
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              modules={[Autoplay, Pagination, Navigation]}
              navigation={true}
              sx={{}}
              
            >
            {sliderData.map((data) => (
              <SwiperSlide key={data.text} position={"relative"} className="parent-slider" >
              <img src={data.image} />
                <Box
                  className="border"
                  sx={{
                    position: "absolute",
                    top: "20%",
                    left: "40%",
                    transform: "translate(-60%)",
                    textAlign: "start",
                    py: 4,
                    textTransform: "uppercase",
                    px: 2,
                  }}
                >
                  <Typography variant="h5" sx={{ color: "#000" }}>
                    LIFE STYLE COLLECTION FOR MEN{" "}
                  </Typography>
                  <Typography
                    variant="h3"
                    sx={{
                      fontWeight: "bold",
                      mb: 2,
                      textAlign: "start",
                      color: "#000",
                    }}
                  >
                    {data.text}
                  </Typography>
                  <Stack direction={"row"} spacing={1} alignItems={"center"}>
                    <Typography variant="h6" sx={{ color: "#000" }}>
                      sale up to{" "}
                    </Typography>
                    <Typography
                      className="sale-percent"
                      variant="h6"
                      color={"red"}
                    >
                      30% off
                    </Typography>
                  </Stack>
                  <Typography
                    variant="h7"
                    sx={{ fontSize: "15px", color: "#333" }}
                  >
                    get free shippig on order{" "}
                  </Typography>
                  <br />
                  <Button display={"block"} variant="contained">
                    Success
                  </Button>
                </Box>
              </SwiperSlide>
            ))}
            </Swiper>
          </Grid>

          {/* right  side grid item */}
          <Grid item md={4}>
            <Grid
              xs={{
                display: "flex",
                direction: "row",
                justifyContent: "space-between",
              }}
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
