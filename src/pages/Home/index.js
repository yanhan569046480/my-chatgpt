import React, { useContext, useEffect, useRef, useState } from 'react';
import { Box, Breadcrumbs, Typography } from '@mui/material';
import { breadcrumbsStyles } from '../../utils/utils';
import AwesomeSwiper from 'react-awesome-swiper';

export default function Home() {
  const swiperRef = useRef();

  return (
    <Box>
      <Breadcrumbs aria-label="breadcrumb" sx={breadcrumbsStyles.breadcrumbs}>
        <Typography sx={breadcrumbsStyles.typo}>Home</Typography>
      </Breadcrumbs>

      <AwesomeSwiper
        ref={swiperRef}
        config={{
          loop: true,
          autoplay: {
            delay: 3000,
            stopOnLastSlide: false,
            disableOnInteraction: true,
          },
          // Disable preloading of all images
          preloadImages: false,
          // Enable lazy loading
          lazy: true,
          speed: 500,
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
          pagination: {
            el: '.swiper-pagination',
            bulletElement: 'li',
            hideOnClick: true,
            clickable: true,
          },
          on: {
            slideChange: function () {
              console.log(this.activeIndex);
            },
          },
        }}
        className="your-classname"
      >
        <div className="swiper-wrapper">
          <div className="swiper-slide">slider1</div>
          <div className="swiper-slide">slider2</div>
          <div className="swiper-slide">slider3</div>
        </div>
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
        <div className="swiper-pagination"></div>
      </AwesomeSwiper>
    </Box>
  );
}
