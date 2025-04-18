import React from 'react';
import Slider from 'react-slick';
import { Box, Typography, IconButton } from '@mui/material';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import Slide_2024 from './change_comparisons/change_2023_2024.jpg'
import Slide_2025 from './change_comparisons/change_2023_2024.jpg'
import Slide_2026 from './change_comparisons/change_2024_2025.jpg'
import Slide_2027 from './change_comparisons/change_2025_2026.jpg'
import Slide_2028 from './change_comparisons/change_2026_2027.jpg'
import Slide_2029 from './change_comparisons/change_2027_2028.jpg'
import Slide_2030 from './change_comparisons/change_2028_2029.jpg'
import Slide_2031 from './change_comparisons/change_2029_2030.jpg'
import Slide_2032 from './change_comparisons/change_2030_2031.jpg'
import Slide_2033 from './change_comparisons/change_2030_2031.jpg'
const images = [
  { src: Slide_2024, text: 'Change in Jaipur Settlement in 2023 -2024' },
  { src: Slide_2025, text: 'Change in Jaipur Settlement in 2024 -2025' },
  { src: Slide_2026, text: 'Change in Jaipur Settlement in 2025 -2026' },
  { src: Slide_2027, text: 'Change in Jaipur Settlement in 2026 -2027'},
  { src: Slide_2028, text: 'Change in Jaipur Settlement in 2027 -2028' },
  { src: Slide_2029, text: 'Change in Jaipur Settlement in 2028 -2029' },
  { src: Slide_2030, text: 'Change in Jaipur Settlement in 2029 -2030' },
  { src: Slide_2031, text: 'Change in Jaipur Settlement in 2030 -2031' },
  { src: Slide_2032, text: 'Change in Jaipur Settlement in 2031 -2032' },
  { src: Slide_2033, text: 'Change in Jaipur Settlement in 2032 -2033' },
];

const NextArrow = ({ onClick }) => (
  <IconButton
    onClick={onClick}
    sx={{
      position: 'absolute',
      right: 10,
      top: '50%',
      transform: 'translateY(-50%)',
      zIndex: 2,
      backgroundColor: 'rgba(255,255,255,0.7)',
    }}
  >
    <ArrowForwardIos />
  </IconButton>
);

const PrevArrow = ({ onClick }) => (
  <IconButton
    onClick={onClick}
    sx={{
      position: 'absolute',
      left: 10,
      top: '50%',
      transform: 'translateY(-50%)',
      zIndex: 2,
      backgroundColor: 'rgba(255,255,255,0.7)',
    }}
  >
    <ArrowBackIos />
  </IconButton>
);

const CarouselComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <Box sx={{ width: '100%', margin: 'auto', mt: 4 ,marginBottom:5}}>
      <Slider {...settings}>
        {images.map((item, index) => (
          <Box key={index} sx={{ position: 'relative' }}>
            <img
              src={item.src}
              alt={`Slide ${index}`}
              style={{ width: '100%', height: '500px', objectFit: 'cover' }}
            />
            <Box
              sx={{
                position: 'absolute',
                bottom: 0,
                width: '100%',
                backgroundImage: 'linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0))',

                color: 'white',
                p: 2,
                textAlign: 'center',
              }}
            >
              <Typography variant="h6">{item.text}</Typography>
            </Box>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default CarouselComponent;
