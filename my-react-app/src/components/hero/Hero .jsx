    
// Import Swiper React components
// eslint-disable-next-line no-unused-vars
import React from 'react';


// Import Swiper styles
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import {Grid,Container, Box } from '@mui/material';
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./slider.css";



const Hero  = () => {
  return (
<Container sx={{mt:5,}} >
<Grid container spacing={2} direction={"row"} className='border' sx={{mb:5}}>
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
    >
      <SwiperSlide>
    
    <img src='../../../public/assstes/banner-15.jpg' />
     </SwiperSlide>
      <SwiperSlide>
    
    <img src='../../../public/assstes/banner-25.jpg' />
     </SwiperSlide>
   </Swiper>
        </Grid>
        {/* right  side grid item */}

        <Grid item md={4}>
      <Box>
      <img src='../../../public/assstes/banner-17.jpg' />

      </Box>
      <Box>
      <img src='../../../public/assstes/banner-16.jpg' />
      

      </Box>
        </Grid>
      
      </Grid>

sssss
</Container>

  )
}

export default Hero 
