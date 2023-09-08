import { styled, Container, Box, Typography, Card, CardContent, CardMedia, CardHeader, Grid } from "@mui/material";


export const GoodFoodContainer = styled(Container)`
background-color: rgba(189, 224, 189, 0.2);
border-radius: 10px;
`;
export const FoodHeadingWrapper = styled(Box)`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding: 15px;
`;

export const FoodGrid = styled(Grid)`
margin: 0 auto;
justify-content: center;
background-color: rgba(224, 220, 189, 0.9);
border-radius: 10px;
`;

export const FoodLCWrapper = styled('div')`
width: 100%;
display: flex; 
flex-direction: column;

`;

export const FoodLocation = styled(Typography)`
width: 100%;
text-align: center;
font-family: 'Urbanist', sans-serif;
font-size: 2.5vh;
`;

export const FoodConclusion = styled(Typography)`
font-family: 'Rajdhani', sans-serif;
font-size: 2.5vh;
width: 80%;
text-align: center;  
margin: 0 auto;


@media screen and (min-width: 890px) {     
text-wrap: wrap;    
width: 50%;
height: fit-content;

}
`;

export const FoodItems = styled(Grid)`
margin: 0 auto;
`;

export const FoodHeadingText = styled(Typography)`
font-size: 6vh;
font-family: 'Rajdhani', sans-serif;
`;

export const GoodFoodMeaning = styled(Typography)`
width: 50%;
font-size: 2vh;
font-family: 'Raleway', sans-serif;
border: thick double black;
border-radius: 5px;
padding: 10px;

.good {
color: red;
font-weight: 700;
}

@media screen and (max-width: 1200px) {
width: 100%;
font-size: 1.7vh;
}
`;

export const AboutFoodText = styled(Typography)`
font-family: 'Rajdhani', sans-serif;
`;


export const FoodCard = styled(Card)`
height: 80%;
overflow: scroll;
max-width: 340px;
margin: 0 auto;
transform: translateX(-3%);

::-webkit-scrollbar {
display: none;
}

@media screen and (max-width: 480px) {
    transform: translateX(-4%);
 }

`;

export const FoodContent = styled(CardContent)`

@media screen and (min-width: 850px) {
  

  .MuiSpeedDial-fab {
    background-color: #3c4a50;
    font-size: 20px;
  
    &:hover {
  background-color: red;
    }
  }
  
  .MuiSpeedDialAction-fab {
  font-size: 20px;
  }
  
  }

  @media screen and (max-width: 860px) {
  

  .MuiSpeedDial-fab {
    background-color: #3c4a50;
    font-size: 20px;

    &:hover {
  background-color: #3c4a50;
    }
  }
  
  .MuiSpeedDialAction-fab {
  font-size: 20px;
  }
  
  }


`;

export const FoodHeader = styled(CardHeader)`
font-family: 'Rajdhani', sans-serif;

.MuiCardHeader-title {
font-size: 1.4vh;
font-family: 'Arvo', serif;

@media screen and (max-width: 480px) {
    font-size: 15px;
}

@media screen and (max-width: 320px) {
    font-size: 11px;
} 
 }
`;

export const FoodMedia = styled(CardMedia)`
height: 190px;
`;

export const CountryLogo = styled('img')`
width: 100%;
`;

