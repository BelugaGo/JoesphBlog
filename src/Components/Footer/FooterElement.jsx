import { Container, styled, Grid, Typography  } from "@mui/material";

export const FooterContainer = styled(Container)`
display: flex;
flex-direction: column;
width: 100%;
justify-content: center;
align-items: center;
background-color: RGB(0, 0, 0, 0.7);
gap: 10px;
overflow: hidden;
`;

export const FooterGrid = styled(Grid)`
margin-top: 20px;
flex-wrap: nowrap;
align-items: center;
justify-content: center; 
gap: 15px;
`;

export const FooterItem = styled(Grid)`
`;

export const FooterLink = styled('a')`
color: black;
font-size: 1.9rem;

&:hover {
    color: #fff;
    transition: 0.3s ease-out;
}
`;

export const Lorem = styled(Typography)`
color: #fff;
text-align: center;
font-family: 'Rajdhani', sans-serif;
font-size: 15px;

&:nth-of-type(2) {
    color: rgb(116, 149, 180);
}
`;

