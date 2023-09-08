import { styled, Container, Typography, Dialog, DialogTitle, DialogContent, DialogContentText, Button } from "@mui/material";


export const ExploreContainer = styled(Container)`
position: relative;
display: flex;
justify-content: center;
align-items: center;
height: 100vh;
overflow: hidden;
background-color: #fff;
transition: background-color 2s ease-in-out;

&:hover { 
background-color: #c4bebe;
transition: background-color 2s ease-in-out;
}

.swiper {
  width: 40vw;
  height: 40vw;
    
    @media screen and (max-width: 1200px) {  
      position: absolute;
      width: 53vw;
      height: 53vw;
      top: 7%;
    }

    @media screen and (max-width: 480px) {  
      position: absolute;
      width: 280px;
      height: 280px;
      top: 7%;
    }

    @media screen and (max-width: 320px) {
      width: 250px;
      height: 250px;
      top: 5%;
    }
}
  
  .swiper-slide {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    font-size: 22px;
    font-weight: bold;
    color: black;
    position: relative;
  }

  .swiper-slide img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
 `;

 export const ExploreHeading = styled('div')` 
position: absolute;
font-size: 50px;
letter-spacing: 62px;
text-align: center;
font-family: 'Arvo', serif;
transform: rotate(-90deg);
color: white;
transition: opacity 5s ease;
text-transform: uppercase;
z-index: 2;

#E {
    color: red;
}

@media screen and (max-width: 625px) {
  font-size: 35px;
  letter-spacing: 31px;
}
 `;

export const Meaning = styled(Typography)`
font-size: 20px;
color: white;
font-family: 'Arvo', serif;
text-align: center;
width: 65%;
text-transform: uppercase;
word-spacing: 1.3px;
padding: 10px;
cursor: default;

#Explore {
    color: red;
}

@media screen and (max-width: 1200px) {
  position: absolute;
  bottom: 0;
  padding: 15px;
  width: 100%;
  font-size: 1.8vh;
}

@media screen and (max-width: 480px) {  
font-size: 3.3vw;
}
@media screen and (max-width: 320px) {
  font-size: 9px;
}
 `;


export const SwiperText = styled(Typography)`
text-transform: uppercase;
position: absolute;
top: 0;
font-size: 2vw;
padding: 10px;


@media screen and (max-width: 625px) {  
  font-size: 3.5vw;
}

@media screen and (max-width: 320px) {  
  font-size: 4vw;
}
`;

export const AboutText = styled(Typography)`
text-transform: uppercase;
position: absolute;
bottom: 0;
font-size: 1.3vw;
padding: 10px;
color: black;
background-color: #d4cbcb;
width: 100%;
text-align: center;

@media screen and (max-width: 1200px) {
  font-size: 1.5vw;
}

@media screen and (max-width: 480px) {  
  font-size: 2.1vw;
}

@media screen and (max-width: 320px) {  
  font-size: 2.3vw;
}
`;

export const WeatherButton = styled(Button)`
position: absolute;
left: 2%;
bottom: 25%;
background-color: #d4cbcb;

@media screen and (max-width: 480px) {
  bottom: 27%;
}

&:hover {
  background-color: red;
}
`;

export const Weather = styled(Dialog)`
background-color: white;
opacity: 0.4;
`;

export const WeatherTitle = styled(DialogTitle)`
font-size: 25px;
`;

export const WeatherContent = styled(DialogContent)`
display: grid;
grid-template-columns: 1fr;
gap: 7px;
`;

export const WeatherText = styled(DialogContentText)`
font-size: 19px;
`;

export const AboutButton = styled(Button)`
position: absolute;
bottom: 25%;
right: 2%;
background-color: #d4cbcb;

@media screen and (max-width: 480px) {
  bottom: 27%;
}

&:hover {
  background-color: black;
}
`;