import React, { useEffect, useState } from 'react';
import ExploreBgVideo from './BG1.mp4';
import { HeroContainer, HeroVideo, HeroLink, JoesphM, SmallText, ScrollDown, DrawerButton, HeroDrawer, DrawerBox } from './HeroElement';
import 'animate.css';
import { faAnglesDown } from '@fortawesome/free-solid-svg-icons';
import {RiMenuLine} from 'react-icons/ri';
import { HeroLink as HeroDrawerLink, LinkText as DrawerLinkText } from '../Nav/NavElement';



function Hero () {

const [mobileDrawerActive, setMobileDrawerActive] = useState(window.innerWidth <= 625);
const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  

const toggleDrawer = (open) => (event) => {
  if (
    event &&
    event.type === 'keydown' &&
    (event.key === 'Tab' || event.key === 'Shift')
  ) {
    return;
  }

  setIsDrawerOpen(open);
};

useEffect (() => {

  const windowResize = () => {
  
    if(window.innerWidth <= 625  ) {
      setMobileDrawerActive(true)
    } else {
      setMobileDrawerActive(false)
    }
  }

 window.addEventListener('resize', windowResize) 
 

 return () => { 
window.removeEventListener('resize', windowResize);

};
 }, []);


  return (
     <HeroContainer id='home' maxWidth disableGutters>
     <HeroVideo maxWidth autoPlay muted loop playsInline component='video' src={ExploreBgVideo} /> 
     <JoesphM  variant='h1' className='animate__animated animate__fadeInDown animate__delay-2s animate__slow'>Joesph Max</JoesphM>
     <SmallText className='animate__animated animate__fadeInUp animate__delay-1s'>All it takes is a <span id='push'>push</span></SmallText>

       {/* Mobile Drawer conditional render */}
      { mobileDrawerActive && (
      <DrawerButton onClick={toggleDrawer(true)}><RiMenuLine className='Ri' /></DrawerButton>
      )}

      <HeroLink to='explore' spy={true} smooth={true} offset={50} duration={900}>
      <ScrollDown className='animate__animated animate__pulse animate__infinite' icon={faAnglesDown}/>
      </HeroLink>
       
       {/* Mobile Drawer */}
      <HeroDrawer anchor="right" open={isDrawerOpen} onClose={toggleDrawer(false)} onOpen={toggleDrawer(true)}>
       <div role="presentation" onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
      <DrawerBox>
      <HeroDrawerLink onClick={toggleDrawer(false)} to='explore'  spy={true} smooth={true} offset={0} duration={900}><DrawerLinkText>Explore</DrawerLinkText></HeroDrawerLink>
      <HeroDrawerLink onClick={toggleDrawer(false)} to='goodFood' spy={true} smooth={true} offset={0} duration={900}><DrawerLinkText>Good Food</DrawerLinkText></HeroDrawerLink>
      <HeroDrawerLink onClick={toggleDrawer(false)} to='relaxation'spy={true} smooth={true} offset={0} duration={900}><DrawerLinkText>Relaxation</DrawerLinkText></HeroDrawerLink>
      </DrawerBox>
      </div>
      </HeroDrawer>

      </HeroContainer>
  )
}

export default Hero;