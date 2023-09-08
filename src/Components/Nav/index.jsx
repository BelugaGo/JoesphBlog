import React from 'react'
import { HeroLink, LinkText, NavBar, NavContainer, JLogo } from './NavElement';
import JMLogo from './JMLogo.png';

function Nav() {
  
  return (
    <>
    <NavBar>
    <HeroLink to='home' spy={true} smooth={true} offset={-70} duration={900}><JLogo href='#' src={JMLogo} alt='logo' /></HeroLink>
    <NavContainer>
      <HeroLink to='explore'  spy={true} smooth={true} offset={-70} duration={900}><LinkText >Explore</LinkText></HeroLink>
      <HeroLink to='goodFood' spy={true} smooth={true} offset={-70} duration={900}><LinkText>Good Food</LinkText></HeroLink>
      <HeroLink to='relaxation'spy={true} smooth={true} offset={-70} duration={900}><LinkText>Relaxation</LinkText></HeroLink>
      </NavContainer>
      </NavBar>
      </>
  )
}

export default Nav;