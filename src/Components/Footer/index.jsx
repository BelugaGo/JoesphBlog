import React from 'react'
import { FooterContainer, FooterGrid, FooterLink, FooterItem, Lorem } from './FooterElement';
import { RiPinterestLine, RiInstagramLine, RiTwitterLine, RiLinkedinBoxLine, RiFacebookBoxLine } from 'react-icons/ri';
import { Box } from '@mui/material';

function Footer() {
  return (
    <FooterContainer maxWidth disableGutters>
      <FooterGrid container>
        <FooterItem item>
        <FooterLink href=''><RiPinterestLine /></FooterLink>
        </FooterItem>
        <FooterItem item>
        <FooterLink href=''><RiInstagramLine /></FooterLink>
        </FooterItem>
        <FooterItem item>
        <FooterLink href=''><RiTwitterLine /></FooterLink>
        </FooterItem>
        <FooterItem item>
        <FooterLink href=''><RiLinkedinBoxLine /></FooterLink>
        </FooterItem>
        <FooterItem item>
        <FooterLink href=''><RiFacebookBoxLine /></FooterLink>
        </FooterItem>
      </FooterGrid>
      <Box sx={{ marginBottom: '10px' }}>
      <Lorem>Lorem Lorem Lorem</Lorem>
      <Lorem>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio adipisci cumque tempora.</Lorem>
      </Box>
    </FooterContainer>

  )
}

export default Footer;