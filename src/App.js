import logo from './logo.jpg';
import './App.css';
import Typography from '@mui/material/Typography'
import back from "./sky.jpg"
import { Grid, IconButton, Paper, Stack } from '@mui/material';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import CarouselComponent from './CarouselComponent';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import Road_2017 from './change_comparisons/road_2017.jpg'
import Road_2018 from './change_comparisons/road_2018.jpg'
import Road_2019 from './change_comparisons/road_2019.jpg'
import Road_2020 from './change_comparisons/road_2020.jpg'
import Road_2021 from './change_comparisons/road_2021.jpg'
import Road_2022 from './change_comparisons/road_2022.jpg'
import Road_2023 from './change_comparisons/road_2023.jpg'
import Road_2024 from './change_comparisons/road_2024.jpg'
import Road_2025 from './change_comparisons/road_2025.jpg'
import Road_2026 from './change_comparisons/road_2026.jpg'
import Road_2027 from './change_comparisons/road_2027.jpg'
import Road_2028 from './change_comparisons/road_2028.jpg'
import Road_2029 from './change_comparisons/road_2029.jpg'
import Road_2030 from './change_comparisons/road_2030.jpg'
import Road_2031 from './change_comparisons/road_2031.jpg'
import Road_2032 from './change_comparisons/road_2032.jpg'
import Road_2033 from './change_comparisons/road_2033.jpg'
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
import Model from './change_comparisons/Frame 1.jpg'
import { useState } from 'react';
const backgroundStyle = {
  backgroundImage: `url(${back})`, // ✅ Corrected line
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '100vh',
};

function App() {
  let roadImage;
  const [a, seta] = useState(17);
  if (a <= 17) roadImage = Road_2017;
  else if (a === 18) roadImage = Road_2018;
  else if (a === 19) roadImage = Road_2019;
  else if (a === 20) roadImage = Road_2020;
  else if (a === 21) roadImage = Road_2021;
  else if (a === 22) roadImage = Road_2022;
  else if (a === 23) roadImage = Road_2023;
  else if (a === 24) roadImage = Road_2024;
  else if (a === 25) roadImage = Road_2025;
  else if (a === 26) roadImage = Road_2026;
  else if (a === 27) roadImage = Road_2027;
  else if (a === 28) roadImage = Road_2028;
  else if (a === 29) roadImage = Road_2029;
  else if (a === 30) roadImage = Road_2030;
  else if (a === 31) roadImage = Road_2031;
  else if (a === 32) roadImage = Road_2032;
  else roadImage = Road_2033; // for a >= 33
  

  return (
    <div className="App"  >
    <Grid container >
      <Grid
        item
        xs={6}
        style={{

        }}
      >
<Typography
  variant="body1"
  style={{
    fontFamily: '"Playfair Display", serif',
    fontSize: 30,
    fontWeight: 'bolder',
    textAlign: 'center',
    padding:15
  }}
>
  Evolution Of The Pink City : JAIPUR
</Typography>

      </Grid>
      <Grid item xs={6}>
        {/* <img src={logo} alt="logo" style={{height:50,width:'50vw'}} /> */}
      </Grid>
    </Grid>
    <Grid  spacing={2} mx={2} my={2}>
        <Paper elevation={3} style={{ padding: 16 }}>
    <CarouselComponent />
    </Paper>
    </Grid>
    <Grid container justifyContent="center" spacing={2}>
      <Grid item xs={12} md={6}>
        <Paper elevation={3} style={{ padding: 16 }}>
          <Stack direction="column" spacing={2} alignItems="center">
          <Stack direction="row" spacing={2} alignItems="stretch">
            {a>=17?
              <IconButton size="small" sx={{ height: 25 }} onClick={() => seta(a > 17 ? a - 1 : a)}
>
            <ArrowBackIos/>
            </IconButton>:null}
            <Typography variant="h6">
              RoadWays Analyses Development of Year : <b>20{a}</b>
            </Typography>
            {a<=33?
              <IconButton size="small" sx={{ height: 25 }} onClick={() => seta(a <33  ? a + 1 : a)}
>
            <ArrowForwardIos/>
            </IconButton>:null}
</Stack>
<img
  src={roadImage}
  alt={`Roadways ${a}`}
  style={{ height: 650, width: 700, objectFit: 'cover' }}
/>
          </Stack>
        </Paper>
      </Grid>
      <Grid item xs={12} md={6}>
        <Paper elevation={3} style={{ padding: 16 }}>
          <Stack direction="column" spacing={2} alignItems="center">
            <Typography variant="h6">
              Model Growth Depiction
            </Typography>

            <img
              src={Model}
              alt="Roadways 2017"
              style={{ height: 650, width: 700, objectFit: 'cover' }}
            />
          </Stack>
        </Paper>
      </Grid>
    </Grid>

    </div>
  );
}

export default App;
