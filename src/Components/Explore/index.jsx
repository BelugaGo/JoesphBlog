import { Box, CircularProgress } from '@mui/material';
import { ExploreContainer, ExploreHeading, Meaning, SwiperText, AboutText, Weather, WeatherContent, WeatherTitle, WeatherText, WeatherButton, AboutButton } from './ExploreElement';
import React, { useState, useEffect, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards'
import { EffectCards } from 'swiper/modules';
import Bangkok from './Bangkok, Thailand.jpg';
import Cusco from './Cusco, Peru.jpg';
import Frankfurt from './Frankfurt am Main, HE, Deutschland.jpg';
import SanJuan from './San Juan Bautista, PM, Spain.jpg';
import Tyrol from './Tyrol, Austria.jpg';
import axios from 'axios';

function Explore() {
  const exploreRef = useRef(null);

  const [openWeather, setOpenWeather] = useState(false); 
  const [weatherData, setWeatherData] = useState({});
  const [location , setLocation] = useState('');
  const weatherIconLocation = weatherData[location];
  const weatherIcon = weatherIconLocation ? `https://openweathermap.org/img/wn/${weatherIconLocation.weather[0].icon}.png` : '';

  const handleLocation = (cityName) => {
    setLocation(cityName);
  };


  const handleOpenWeather = (location) => {
    setOpenWeather((prevOpen) => ({
      ...prevOpen,
      [location]: true,

    }))
  }
  const handleCloseWeather = (location) => {
    setOpenWeather((prevOpen) => ({
      ...prevOpen,
      [location]: false,
    }))
  };
  

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=a5753d7ebf4e09f2ff9f9d89383cf51b`
      )
      .then((res) => {
        setWeatherData((prevData) => ({
          ...prevData,
          [location]: res.data,
        }));
      })
      .catch((err) => {
        console.log(err);
      });
  }, [location]);

  useEffect(() => {
    const explore = exploreRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            explore.style.opacity = "0";
          } else {
            explore.style.opacity = "1";
          }
        });
      },
      {
        threshold: 0.50,
      }
    );

    if (explore) {
      observer.observe(explore);
    }

    return () => {
      if (explore) {
        observer.unobserve(explore);
      }
    };
  }, []);

   const WeatherComponent =  <WeatherContent>
    {weatherData[location]?.main ? (
    <>
      <WeatherTitle>{weatherData[location]?.name + ', ' + weatherData[location]?.sys?.country}</WeatherTitle>
      <WeatherText>Temp: {weatherData[location].main.temp.toFixed()}°F</WeatherText>
      <WeatherText>Feels Like: {weatherData[location].main.feels_like.toFixed()}°F</WeatherText>
      <WeatherText>Winds: {weatherData[location].wind.speed.toFixed()} MPH</WeatherText>
      <WeatherText> Sky: {weatherData[location].weather[0].main}</WeatherText>
      <img src={weatherIcon} alt="Weather Icon" />
    </>
  ) :( <WeatherText><CircularProgress sx={{ color: 'grey.500' }} /></WeatherText>
    )}
  </WeatherContent>;

  return (
    <ExploreContainer maxWidth disableGutters id="explore">
      <ExploreHeading ref={exploreRef}>
        <span id="E">E</span>xplore
      </ExploreHeading>
       <Meaning><span id='Explore'>"Explore"</span> embodies the boundless human spirit of curiosity and discovery. It represents the unwavering desire to venture beyond the familiar, to delve into the unknown realms of the world and beyond. The word invokes a sense of adventure, inspiring individuals to journey through uncharted territories, both physically and metaphorically. To explore is to seek knowledge, broaden horizons, and uncover hidden treasures, whether they are found in the depths of a dense forest, at the heart of a bustling city, or within the complexities of one's own thoughts. This quest for exploration transcends geographical boundaries, pushing humanity to continually unravel the mysteries of the universe, and embrace the transformative power of new experiences.</Meaning>
    <Box id='contain' sx={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <Swiper
    effect={'cards'}
    grabCursor={true}
    loop={true}
    modules={[EffectCards]}
    className='mySwiper'>

      {/* Bangkok, Thailand */}
      <SwiperSlide>
        <img src={Bangkok} />
        <SwiperText>Bangkok, Thailand</SwiperText>
        <AboutText>Bangkok, Thailand, captivates with its vibrant blend of rich cultural heritage, bustling urban life, and exquisite culinary experiences.</AboutText>
        <WeatherButton variant='contained' size='small' onClick={ () => { handleOpenWeather('Bangkok'); handleLocation('Bangkok');} }>Weather</WeatherButton>
        <AboutButton href='https://www.britannica.com/place/Bangkok' target='blank_' variant='contained' size='small'>About</AboutButton>
        <Weather open={openWeather[location]} onClose={() => handleCloseWeather(location)}>
        {WeatherComponent}
       </Weather>
      </SwiperSlide>

      {/* Cusco, Peru */}
      <SwiperSlide>
        <img src={Cusco} />
        <SwiperText>Cusco, Peru</SwiperText>
        <AboutText>Cusco, Peru, is a city in the Peruvian Andes that was once the capital of the Inca Empire, and is now known for its archaeological remains and Spanish colonial architecture.</AboutText>
        <WeatherButton variant='contained' size='small' onClick={ () => { handleOpenWeather('Cusco, Peru'); handleLocation('Cusco, Peru');} }>Weather</WeatherButton>
        <AboutButton href='https://www.britannica.com/place/Cuzco' target='blank_' variant='contained' size='small'>About</AboutButton>
        <Weather open={openWeather[location]} onClose={ () => handleCloseWeather(location)}>
           {WeatherComponent}
        </Weather>
      </SwiperSlide>

      {/* Frankfurt, Deutschland */}
      <SwiperSlide>
        <img src={Frankfurt} />
        <SwiperText>Frankfurt Main, Deutschland</SwiperText>
        <AboutText>Frankfurt Main, Deutschland, is a metropolis and the largest city of the German state of Hesse. Its skyline is dominated by high-rise buildings, earning it the nickname "Mainhattan".</AboutText>
        <WeatherButton variant='contained' size='small' onClick={ () => { handleOpenWeather('Frankfurt, Deutschland'); handleLocation('Frankfurt, Deutschland');} }>Weather</WeatherButton>
        <AboutButton href='https://www.britannica.com/place/Frankfurt-am-Main' target='blank_' variant='contained' size='small'>About</AboutButton>
        <Weather open={openWeather[location]} onClose={ () => handleCloseWeather(location)}>
            {WeatherComponent}
        </Weather>
        </SwiperSlide>
      <SwiperSlide>
        <img src={SanJuan} />
        <SwiperText>Ibiza Town, Spain</SwiperText>
        <AboutText>Ibiza Town, Spain, is a municipality located in the province of Palencia, Castile and León, Spain. According to the 2004 census, the municipality has a population of 1,000 inhabitants.</AboutText>
        <WeatherButton variant='contained' size='small' onClick={ () => { handleOpenWeather('Ibiza Town, Spain'); handleLocation('Ibiza Town, Spain');} }>Weather</WeatherButton>
        <AboutButton href='https://www.britannica.com/place/Ibiza-island-Spain' target='blank_' variant='contained' size='small'>About</AboutButton>
        <Weather open={openWeather[location]} onClose={ () => handleCloseWeather(location)}>
            {WeatherComponent}
        </Weather>
        </SwiperSlide>

      {/* Tyrol, Austria */}
      <SwiperSlide>
        <img src={Tyrol} />
        <SwiperText>Tyrol, Austria</SwiperText>
        <AboutText>Tyrol, Austria, unfolds as a picturesque Alpine paradise, inviting adventure seekers to explore its majestic peaks and alpine villages.</AboutText>
        <WeatherButton variant='contained' size='small' onClick={ () => { handleOpenWeather('Tyrol, Austria'); handleLocation('Tyrol, Austria');} }>Weather</WeatherButton>
        <AboutButton href='https://www.britannica.com/place/Tirol-state-Austria' target='blank_' variant='contained' size='small'>About</AboutButton>
        <Weather open={openWeather[location]} onClose={ () => handleCloseWeather(location)}>
        {WeatherComponent}
        </Weather>
        </SwiperSlide>
 </Swiper>
    </Box>
    </ExploreContainer>
  );
}

export default Explore;