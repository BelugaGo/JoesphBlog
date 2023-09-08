import { Link } from 'react-scroll';
import { Typography, styled, Container } from '@mui/material';


export const NavBar = styled('nav')`
height: 80px;
margin-top: -80px;
display: flex;
justify-content: center;
align-items: center;
position: sticky;
top: 0;
z-index: 10;
border-radius: 5px;
background-color: RGB(0, 31, 63, 0.9);

@media screen and (max-width: 625px) {
   background-color: transparent;
}
`;

export const JLogo = styled('img')`
width: 100px;
height: auto;

@media screen and (max-width: 625px) {
  position: absolute;
  left: 2px;
  top: 2px;
}
`;

export const NavContainer = styled(Container)`
display: flex;
justify-content: space-evenly;
height: 80px;
width: 100%;
padding: 0 24px;
max-width: 1100px;
z-index: 1;

@media screen and (max-width: 625px) {
   display: none;
}
`;


export const HeroLink = styled(Link)`
display: flex;
text-decoration: none;
align-items: center;
padding: 0 1rem;
height: 100%;
cursor: pointer;

@media screen and (min-width: 626px) {

&.active {
   border-bottom: 3px solid #ff0000;
}
 }

`;

export const LinkText = styled(Typography)`
font-family: 'Rajdhani', sans-serif;
text-transform: uppercase;
color: white;
font-size: 20px;
font-weight: 500;


&:hover {
color: red;
transition: 0.5s;
}
`;

