import React, { useEffect, useRef, useState } from 'react'
import { RelaxationContainer, RelaxationHeader, RelaxationHeaderWrapper, RelaxationParagraph, RelaxWrapper, RelaxPlayer, RelaxLeftBox, RelaxContent, MusicHeading, MusicSubHeading, RelaxLeftBottomBox, TrySome, BreathingWrapper, BreathingContent, BreathingExercise, BreathingHeader, BreathingInfo, BreathingList, ListItem, ExerciseSwitch, MindfulBall, MindfulBox, MindfulButton, MindfulContent } from './RelaxationElement';
import { GiMeditation  } from 'react-icons/gi';
import { IconButton, CardMedia, useTheme, FormControlLabel, Box, Typography } from '@mui/material';
import { MdOutlineSkipNext, MdOutlineSkipPrevious, MdPlayArrow, MdPause  } from 'react-icons/md';

function Relaxation() {

const mindfulRef = useRef(null);
const theme = useTheme();
const audioRef = useRef(new Audio());

const [relaxation, setRelaxation] = useState(true);
const [relaxation2, setRelaxation2] = useState(false);
const [relaxation3, setRelaxation3] = useState(false);
const [randomRelax, setRandomRelax] = useState(' ')
const [isPlaying, setIsPlaying] = useState(false);
const [currentSongIndex, setCurrentSongIndex] = useState(0);


const handleRelaxation = () => {
  setRelaxation(!relaxation);
}

const handleRelaxation2 = () => {
  setRelaxation2(!relaxation2);
}

const handleRelaxation3 = () => {
  setRelaxation3(!relaxation3);
}

const mindful8 = [
  "Deep Belly Breathing: Inhale deeply through your nose, allowing your abdomen to rise, and exhale slowly through your mouth.",
  "Body Scan Meditation: Close your eyes and mentally scan your body, focusing on each part and releasing tension.",
  "Gratitude Journaling: Write down three things you're grateful for today.",
  "Five Senses Exercise: Notice five things you can see, four things you can touch, three things you can hear, two things you can smell, and one thing you can taste.",
  "Loving-Kindness Meditation: Send well wishes to yourself, loved ones, and even those you may have conflicts with.",
  "Nature Connection: Spend time in nature and observe the sights, sounds, and textures around you.",
  "Mindful Walking: Take a slow, deliberate walk, paying attention to each step and your surroundings.",
  "Tea Meditation: Brew a cup of tea and savor each sip, paying attention to the taste and warmth.",
  "Progressive Muscle Relaxation: Tense and then release each muscle group in your body, starting from your toes and working up to your head.",
  "Breath Awareness: Focus your attention on your breath, observing it without trying to change it.",
  "Mindful Eating: Eat a meal without distractions, savoring each bite and paying attention to the flavors and textures.",
  "Visualization: Close your eyes and visualize a peaceful, serene place where you feel completely relaxed.",
  "Body-Mind Check-In: Ask yourself, 'How am I feeling physically and emotionally right now?' Acknowledge your sensations and emotions without judgment.",
  "Three-Minute Breathing Space: Spend three minutes observing your thoughts, feelings, and sensations without trying to change them.",
  "Digital Detox: Disconnect from screens and digital devices for an hour or more.",
  "Self-Compassion Break: Offer yourself kind and comforting words during moments of self-doubt or difficulty.",
  "Raisin Meditation: Examine a raisin with all your senses before eating it slowly and mindfully.",
  "Grass Meditation: Lie down on the grass and watch the clouds go by, letting go of any worries.",
  "Coloring: Engage in coloring a mandala or coloring book mindfully, focusing on each stroke.",
  "Breath Counting: Count your breaths from 1 to 10, then start over. If your mind wanders, begin again at 1.",
  "Silent Sitting: Sit quietly and simply observe your thoughts, sensations, and surroundings without reacting.",
  "Affirmations: Repeat positive affirmations or mantras to promote self-empowerment and positivity.",
  "Breath of Joy: Inhale deeply three times, raising your arms with each breath, then exhale forcefully as you lower your arms.",
  "Unplug for an Hour: Turn off all electronic devices and spend an hour in analog activities like reading a physical book or taking a walk.",
  "Smile Practice: Smile genuinely, even if you don't feel like it, and notice how it affects your mood.",
  "One-Minute Mindfulness: Pause for one minute to bring your full attention to your breath and bodily sensations.",
  "Water Meditation: Sit by a body of water and watch the ripples or waves, allowing your mind to settle.",
  "Breath Visualization: Imagine your breath as a wave, inhaling as the wave rises, and exhaling as it falls.",
  "Random Act of Kindness: Perform a small act of kindness for someone without expecting anything in return.",
  "Listening Meditation: Spend time listening to calming music or sounds, such as rain, birdsong, or waves crashing."
];

useEffect(() => {

const handleMindful = () => {
const random = Math.floor(Math.random() * mindful8.length);
const string = mindful8[random];
setRandomRelax(string)
const mindfulBall = document.querySelector('.mindfulBall')
mindfulBall.classList.add('animate__shakeX', 'animate__animated');

setTimeout(() => {
    mindfulBall.classList.remove('animate__shakeX', 'animate__animated')
    }, 1000)

  }

const mind = mindfulRef.current;

mind.addEventListener('click', handleMindful) 

return () => {
mind.removeEventListener('click', handleMindful)
}

}, []);



const relaxAudio = [
  { audio: 'https://cdn.pixabay.com/download/audio/2022/09/10/audio_113b247b69.mp3?filename=campfire-crackling-fireplace-sound-119594.mp3', title: 'Fireplace Fire Crackling', artist: 'SoundsForYou', cover: "https://i.ibb.co/pxb7rPL/Fireplace.jpg" },
  { audio: 'https://cdn.pixabay.com/download/audio/2021/08/09/audio_6b294070f5.mp3?filename=forest-with-small-river-birds-and-nature-field-recording-6735.mp3', title: 'Forest', artist: 'SoundsForYou', cover: "https://i.ibb.co/wdcgDsc/Forest.png" },
  { audio: 'https://cdn.pixabay.com/download/audio/2022/07/04/audio_f52a5754b1.mp3?filename=light-rain-ambient-114354.mp3', title: 'Light Rain', artist: 'SoundsForYou', cover: "https://i.ibb.co/c8KvM72/Light-Rain.jpg" },
  { audio: 'https://cdn.pixabay.com/download/audio/2022/09/30/audio_147bbf836d.mp3?filename=ocean-sea-soft-waves-121349.mp3', title: 'Ocean Soft Waves', artist: 'SoundsForYou', cover: "https://i.ibb.co/88LRKZY/Ocean-Soft-Waves.jpg" },
  ];


const handleTogglePlay = () => {
  if (isPlaying) {
    audioRef.current.pause();
  } else {
    audioRef.current.play();
  }
  setIsPlaying(!isPlaying);
};

const handleNextSong = () => {
  if (currentSongIndex >= relaxAudio.length - 1) {
    setCurrentSongIndex(0);
  } else {
    setCurrentSongIndex(currentSongIndex + 1);
  }
};


const handlePreviousSong = () => {
  if (currentSongIndex <= 0) {
    setCurrentSongIndex(relaxAudio.length - 1);
  } else {
    setCurrentSongIndex(currentSongIndex - 1);
  }
};


useEffect(() => {
  audioRef.current.src = relaxAudio[currentSongIndex].audio;

  if (isPlaying) {
    audioRef.current.play().catch((error) => {
      alert("Failed to play audio:", error);
    });
  } else {
    audioRef.current.pause();
  }

return () => {
  audioRef.current.pause();
  audioRef.current.currentTime = 0;
};
}, [currentSongIndex, isPlaying ]);


  return (
   <RelaxationContainer maxWidth disableGutters id='relaxation'>


    {/* Relaxing sounds */}

    <RelaxationHeaderWrapper>
    <RelaxationHeader >Relax<GiMeditation className='meditation' />ation</RelaxationHeader>
    <RelaxationParagraph ><span id='relax' style={{ color:'red' }}>"Relaxation"</span> Relaxation is a refuge of calm amidst life's hustle, a haven where worries dissolve and serenity blooms. It's a chance to breathe, to let go, and to find solace in the gentle rhythm of the present moment,  an art of unwinding, a respite for the mind and body to renew their harmonious balance. In its embrace, stress ebbs away, making space for rejuvenation and a tranquil inner clarity.</RelaxationParagraph>
    </RelaxationHeaderWrapper>

     <RelaxWrapper>
      <TrySome>Relaxing Sounds</TrySome>
      <RelaxPlayer elevation={5}>

        <RelaxLeftBox>
          <RelaxContent>
            <MusicHeading component='div' variant='h5'>
            {relaxAudio[currentSongIndex].title}
            </MusicHeading>
            <MusicSubHeading variant='subtitle1' component='div'>
             {relaxAudio[currentSongIndex].artist}
            </MusicSubHeading>
          </RelaxContent>

          <RelaxLeftBottomBox sx={{ p1: 1, pb: 1 }}>
            <IconButton onClick={handleNextSong}>
              {theme.direction === 'rtl' ? <MdOutlineSkipNext /> : <MdOutlineSkipPrevious />}
            </IconButton>
            <IconButton onClick={handleTogglePlay}>
             {isPlaying ? <MdPause fontSize='2.5rem'/> : <MdPlayArrow fontSize='2.5rem' />  }
            </IconButton>
            <IconButton onClick={handlePreviousSong}>
              {theme.direction === 'rtl' ? <MdOutlineSkipPrevious /> : <MdOutlineSkipNext />}
            </IconButton>
          </RelaxLeftBottomBox>
        </RelaxLeftBox>

        <CardMedia
          component='img'
          sx={{ width: 141 }}
          image={relaxAudio[currentSongIndex].cover}
          alt={relaxAudio[currentSongIndex].title} />

      </RelaxPlayer>
     </RelaxWrapper>

      {/* Breathing Exercise */}

     <BreathingWrapper>
       <BreathingExercise elevation={5}>
        
        <Typography  variant='h5' sx={{ textAlign: 'center', letterSpacing: '17px', textTransform: 'uppercase' }}>Breathing</Typography>
        <br />
       <Box className='six' sx={{ width: '100%', display: 'flex', justifyContent: 'space-evenly', borderBottom: '3px solid white' }}>
      
       <FormControlLabel
          className='label'
          value="1st"
          control={<ExerciseSwitch  defaultChecked color='default' onClick={ handleRelaxation } />}
          label="4-7-8 Breathing"
          labelPlacement="start"
        />

        <FormControlLabel
          className='label'
          value="2nd"
          control={<ExerciseSwitch color='secondary' onClick={ handleRelaxation2 } />}
          label="Deep Belly Breathing"
          labelPlacement="start"
        />

        <FormControlLabel
          className='label'
          value="3rd"
          control={<ExerciseSwitch color='warning' onClick={ handleRelaxation3 } />}
          label="Box Breathing"
          labelPlacement="start"
        />
        </Box>

        
      
        { relaxation ? true &&  (
         <BreathingContent sx={{ borderBottom: '3px solid grey' }}>
            <BreathingHeader>4-7-8 Breathing Technique</BreathingHeader>
            <BreathingInfo>Before starting the breathing pattern, adopt a comfortable sitting position and place the tip of the tongue on the tissue right behind the top front teeth.</BreathingInfo>
            <br />
            <BreathingList>
            <ListItem>emptying the lungs of air</ListItem>
            <ListItem>breathing in quietly through the nose for 4 seconds</ListItem>
            <ListItem>holding the breath for a count of 7 seconds</ListItem>
            <ListItem>exhaling forcefully through the mouth, pursing the lips, and making a “whoosh” sound for 8 seconds</ListItem>
            <br />
            <Typography sx={{  textDecoration: 'underline' }}>Repeat This cycle up to 4 times</Typography>
         </BreathingList>
         <br />
         <BreathingInfo>
         Benefits:
         The 4-7-8 breathing technique is effective for reducing anxiety, calming the mind, and aiding in falling asleep. It can also help regulate your nervous system and improve concentration.
         </BreathingInfo>
         </BreathingContent>
          ) : null }


          { relaxation2 ? true &&  (
          <BreathingContent sx={{ borderBottom: '3px solid purple' }} >
            <BreathingHeader>Deep Belly Breathing</BreathingHeader>
            <BreathingInfo>Find a comfortable seated or lying position.</BreathingInfo>
            <br />
            <BreathingList>
            <ListItem>Place one hand on your chest and the other on your abdomen.</ListItem>
            <ListItem>Inhale deeply through your nose, allowing your abdomen to rise as you fill your lungs</ListItem>
            <ListItem> Exhale slowly through your mouth, feeling your abdomen fall.</ListItem>
            <br />
            <Typography sx={{  textDecoration: 'underline' }}>Repeat for 5-10 minutes.</Typography>
         </BreathingList>
         <br />
         <BreathingInfo>
         Benefits:
         Deep belly breathing promotes relaxation, reduces stress, and lowers your heart rate. It helps increase oxygen supply to the body and can improve overall lung function.
         </BreathingInfo>
         </BreathingContent>
          ) : null }


          { relaxation3 ? true &&  (
         <BreathingContent sx={{ borderBottom: '3px solid orange' }}>
            <BreathingHeader>Box Breathing</BreathingHeader>
            <BreathingInfo>Find a comfortable seated or lying position.</BreathingInfo>
            <br />
            <BreathingList>
            <ListItem>Close your eyes and take a slow, deep breath in through your nose for a count of 4 seconds.</ListItem>
            <ListItem>Hold your breath for a count of 4 seconds.</ListItem>
            <ListItem>Exhale slowly and completely through your mouth for a count of 4 seconds.</ListItem>
            <ListItem>Pause and keep your breath out for a count of 4 seconds.</ListItem>
            <br />
            <Typography sx={{  textDecoration: 'underline' }}>Repeat this cycle for 4 rounds.</Typography>
         </BreathingList>
          <br />
         <BreathingInfo>
         Benefits:
         Box breathing is a quick and effective technique for reducing stress, improving focus, and calming your nervous system. It can be done anytime, anywhere, to regain composure and mental clarity.
         </BreathingInfo>
         </BreathingContent>
          ) : null }

       </BreathingExercise>
     </BreathingWrapper>

     {/* Mindful8Ball */}


     <MindfulBox>
      <MindfulButton ref={mindfulRef}>Mindful 8 Ball<Typography fontSize='10px' sx={{ color: 'white' }}>clicking me will generate mindful activities</Typography></MindfulButton>
      <br />
      <MindfulBall className='mindfulBall' elevation={5}>
      <MindfulContent p={2} variant='h7' sx={{ textAlign: 'center', letterSpacing: '3px', textTransform: 'uppercase' }}>{randomRelax}</MindfulContent>
      </MindfulBall>
      </MindfulBox>

    
   </RelaxationContainer>
  )
}

export default Relaxation;