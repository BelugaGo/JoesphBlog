
import { styled, Container, CardMedia, Typography, Button, SwipeableDrawer, Box } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-scroll";


export const HeroContainer = styled(Container)`
    height: 100vh;
    overflow: hidden;
    position: relative;
    cursor: default;


    .Ri {
        position: absolute;
        font-size: 30px;
        color: red;
    }
`;

 export const HeroVideo = styled(CardMedia)`
    object-fit: cover; 
    width: 100vw;
    height: 100%;
    top: 50%; 
    left: 50%; 
    transform: translate(-50%, -50%);
    z-index: -1;
    position: absolute;
`; 

export const JoesphM = styled(Typography)`
position: absolute;
text-align: center;
width: 100%;
bottom: 50%;
letter-spacing: 2.7rem;
font-family: 'Rajdhani', sans-serif;
letter-spacing: .15em;
color: rgba(255,255,255,.3);
text-shadow: 0 0 15px rgba(255,255,255,.9), 0 0 10px rgba(255,255,255,.9);

@media screen and (max-width: 625px) {
    font-size: 73px;
}
`;

export const SmallText = styled(Typography)`
position: absolute;
text-align: center;
font-size: 24px;
width: 100%;
bottom: 46%;
text-transform: uppercase;
letter-spacing: 2.7rem;
color: #FFFFFF;
font-family: 'Rajdhani', sans-serif;
letter-spacing: .15em;

#push {
    color: red;
    font-weight: 700;
    opacity: 0;
    animation: customFade 7s ease-in-out forwards;

    @keyframes customFade {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
       
    }
}
`;

export const DrawerButton = styled(Button)`
position: absolute;
right: 0;
bottom: 96%;
z-index: 999;
`;

export const HeroLink = styled(Link)`
text-decoration: none;
padding: 30px ;
cursor: pointer;
`;

export const ScrollDown = styled(FontAwesomeIcon)`
position: absolute;
font-size: 40px;
bottom: 20%;
color: white;
left: 50%;
transform: translateX(-50%);
cursor: pointer;

&:hover {
color: red;
transition: 0.5s;
}

@media screen and (max-width:480px){
    bottom: 20%;
    left: 47%;
}
`;

export const HeroDrawer = styled(SwipeableDrawer)`

.MuiDrawer-paper {
    background-color: rgb(0, 0, 0, 0.7);
  }
`;

export const DrawerBox = styled(Box)`
display: flex;
height: 30vh;
flex-direction: column;
align-items: center;
`;


