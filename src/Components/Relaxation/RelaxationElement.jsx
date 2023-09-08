import { Container, Typography, styled, Box, CardContent, Card, Paper, Switch, Button  } from "@mui/material";


/* Relax Player Section */
export const RelaxationContainer = styled(Container)`
gap: 5rem;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: rgba(0, 0, 0, 0.1);
overflow: hidden;
background-image: url('https://images.pexels.com/photos/3816807/pexels-photo-3816807.jpeg');
background-repeat: no-repeat;
background-size: cover;
`;

export const RelaxationHeaderWrapper = styled(Box)`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding: 15px;


.meditation {
    position: relative;
    bottom: -10px;
}
`;

export const RelaxationHeader = styled(Typography)`
font-family: 'Rajdhani', sans-serif;
font-size: 6vh;
`;

export const RelaxationParagraph = styled(Typography)`
width: 80%;
font-size: 2vh;
font-family: 'Raleway', sans-serif;
border: thick double black;
border-radius: 5px;
padding: 10px;

@media screen and (max-width: 1200px) {  
    width: 100%;

}
`;

export const RelaxWrapper = styled(Box)`
display: flex;
flex-direction: column;
justify-content: center;  
align-items: center;
gap: 10px;
border-radius: 5px;
width: 28rem;
height: 17rem;
`;

export const TrySome = styled(Typography)`
display: flex;
align-self: center;
font-family: 'Rajdhani', sans-serif;
font-size: 3vh;

@media screen and (max-width: 360px) {
    font-size: 25px;
}
`;

export const RelaxPlayer = styled(Card)`
display: flex;
background: rgb(197,202,226);
background: radial-gradient(circle, rgba(197,202,226,1) 0%, rgba(189,252,201,1) 68%);
width: max-content;
border-radius: 5px;

@media screen and (max-width: 480px) {
    width: auto;
    height: auto;
    max-width: 350px;
}

@media screen and (max-width: 360px) {
width: auto;
height: auto;
max-width: 300px;
}
`;

export const RelaxLeftBox = styled(Box)`
display: flex;
flex-direction: column;
`;

export const RelaxContent = styled(CardContent)`
flex: 1 0 auto;
`;

export const MusicHeading = styled(Typography)`

@media screen and (max-width: 480px){
    font-size: 2.7vh;

    
}
`;

export const MusicSubHeading = styled(Typography)`
`;

export const RelaxLeftBottomBox = styled(Box)`
display: flex;
align-items: center;
`;


/* Breathing Section */
export const BreathingWrapper = styled(Box)`
display: flex;
justify-content: center;

.label {

@media screen and (max-width: 480px) {  
display: flex;
flex-direction: column;
align-items: center;
}

 }

`;

export const BreathingExercise = styled(Paper)`
background-color: #a1acb8;
padding: 15px;
position: relative;
width: 100%;

@media screen and (max-width: 480px) {
    width: 360px;
    height: auto;

}

@media screen and (max-width: 380px) {
    width: 300px;
    height: auto;
}

`;

export const ExerciseSwitch = styled(Switch)`
`;


export const BreathingContent = styled(Box)`
padding: 15px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;

export const BreathingHeader = styled(Typography)`
font-family: 'Rajdhani', sans-serif;
font-size: 4vh;
`;

export const BreathingInfo = styled(Typography)`
font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
text-align: center;
`;

export const BreathingList = styled('ol')`
line-height: 1.7rem;
width: 90%;
text-align: left;
`;

export const ListItem = styled('li')`
font-family: 'Montserrat', sans-serif;
font-size: 2vh;

@media screen  and (max-width: 360px) {
    font-size: 2.5vh;
    
}
`;

/* Mindful Section */
export const MindfulBox = styled(Box)`
display: flex;
width: 100%;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 70px;
`;

export const MindfulButton = styled(Button)`
font-family: 'Rajdhani', sans-serif;
font-size: 3vh;
color: #ffffff;
display: flex;
flex-direction: column;
border-radius: 15px;

@media screen and (min-width: 625px) {
&:hover {
    background-color: #b7ccce;
    color: #615d5d;
}
 }

@media screen and (max-width: 625px) {
        background-color: #b7ccce;
        color: #fffefe;
}
`;

export const MindfulBall = styled(Paper)`
display: flex;
justify-content: center;
align-items: center;
background: rgb(238,174,202);
background: radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(233,213,148,1) 100%);
width: 600px;
height: 600px;
border-radius: 50%;
padding: 20px;
position: relative;

@media screen  and (max-width: 710px) {
    width: 350px;
    height: 350px;
    
}

@media screen and (max-width: 360px) {
    width: 300px;
    height: 300px;
}
`;

export const MindfulContent = styled(Typography)`
color: white;
line-height: 1.5rem;
`;


