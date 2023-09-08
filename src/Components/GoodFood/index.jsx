import React from 'react'
import { GoodFoodContainer, FoodHeadingWrapper, FoodHeadingText, GoodFoodMeaning, AboutFoodText, FoodCard, FoodContent, FoodHeader, FoodMedia, CountryLogo, FoodGrid, FoodItems, FoodLocation, FoodConclusion, FoodLCWrapper } from './GoodFoodElement';
import { RiRestaurantLine } from "react-icons/ri";
import { Avatar, CardActions, SpeedDial, SpeedDialAction } from '@mui/material';
import { RiShareLine, RiFacebookBoxLine, RiTwitterLine, RiInstagramLine } from 'react-icons/ri';

import Thailand from './thailand.png';
import PadThai from './Pad Thai.jpg';
import KhaoPad from './Khao Pad.jpg';
import MangoStickyRice from './Mango Sticky Rice.jpg';
import MassamanCurry from './Massaman Curry.jpg';

import Germany from './germany.png';
import HandkäseMitMusik from './handkäse mit musik.jpg';
import FrankfurterRippchen from './Frankfurter Rippchen.jpg';
import Bethmannchen from './Bethmannchen.jpg';
import GruneSosse from './Grune Sosse.jpg';

import Peru from './peru.png';
import CuyAlHorno from './Cuy Al Horno.jpg';
import AjiDeGallina from './Aji De Gallina.jpg';
import RocotoRelleno from './Rocoto Relleno.jpg';
import ChichaMorada from './Chicha Morada.webp';

function GoodEats() {

  const actions = [
    { icon: <RiFacebookBoxLine />, name: 'FaceBook' },
    { icon: <RiTwitterLine />, name: 'Twitter' },
    { icon: <RiInstagramLine />, name: 'Instagram' },
  ];


  const MySpeedDial = () => {
    return (
      <SpeedDial
        direction='down'        
        ariaLabel="SpeedDial"
        sx={{ position: 'absolute', top: 9, right: 11 }}
        icon={<RiShareLine />}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
          />
        ))}
      </SpeedDial>
    );
  }

  return (
    <GoodFoodContainer maxWidth disableGutters  id='goodFood'>
       <FoodHeadingWrapper>
        <FoodHeadingText>Good Food <RiRestaurantLine /></FoodHeadingText>
        <GoodFoodMeaning><span className='good'>"Good Food"</span> transcends nourishment; it's a journey that unfolds cultures, tells stories, and creates cherished memories. Each bite is a step into the rich tapestry of culinary traditions, a universal language that speaks to our senses and souls.</GoodFoodMeaning>
       </FoodHeadingWrapper>

       {/*  Thailand  */}
       <FoodGrid container maxWidth p={2} spacing={3}>

       <FoodLCWrapper>
       <FoodLocation>Bangkok, Thailand</FoodLocation>
       <FoodConclusion>These taste <span style={{ color: 'white', backgroundColor:'RGB(206, 17, 38)', borderRadius: '3px' }}>experiences</span> capture the essence of Bangkok's diverse and <span style={{ backgroundColor: 'RGB(255, 255, 255)', borderRadius: '3px' }}>flavorful</span> cuisine, offering a glimpse into the exciting world of Thai street food and <span style={{ color: 'white', backgroundColor: 'RGB(0, 56, 168)', borderRadius: '3px' }}>traditional</span> dishes.</FoodConclusion>
       </FoodLCWrapper>

       <FoodItems item xs={12} sm={6} md={5} lg={2.9}>
        <FoodCard raised className='slight'>
        <FoodHeader title='Pad Thai' avatar={<Avatar><CountryLogo src={Thailand} /></Avatar>} />
        <FoodMedia component='img' image={PadThai} />
        <FoodContent>
          <AboutFoodText>
          Enjoy the perfect harmony of chewy rice noodles, tender shrimp or chicken, and the balanced contrast of sweet, tangy tamarind sauce, topped with crushed peanuts and fresh lime.
          </AboutFoodText>
          <CardActions>
         <MySpeedDial />
          </CardActions>
        </FoodContent>
        </FoodCard>
        </FoodItems>

        <FoodItems item xs={12} sm={6} md={5} lg={2.9}>
        <FoodCard raised className='slight'>
        <FoodHeader title='Khao Pad' avatar={<Avatar><CountryLogo src={Thailand} /></Avatar>}/>
        <FoodMedia component='img' image={KhaoPad}/>
        <FoodContent>
         <AboutFoodText>
          Savor the irresistible blend of fragrant jasmine rice sizzling in the wok with an array of ingredients like succulent meat, fresh vegetables, and the umami richness of soy sauce.
         </AboutFoodText>
         <CardActions>
         <MySpeedDial />
          </CardActions>
        </FoodContent>
        </FoodCard>
        </FoodItems>

        <FoodItems item xs={12} sm={6} md={5} lg={2.9}>
        <FoodCard raised className='slight'>
        <FoodHeader title='Mango Sticky Rice' avatar={<Avatar><CountryLogo src={Thailand} /></Avatar>}/>
        <FoodMedia component='img' image={MangoStickyRice} />
        <FoodContent>
         <AboutFoodText>
          End your culinary journey on a sweet note with the exquisite combination of sticky rice soaked in coconut milk, topped with the luscious sweetness of ripe mango slices. It's a heavenly dessert that leaves a lasting impression.
         </AboutFoodText>
         <CardActions>
         <MySpeedDial />
          </CardActions>
        </FoodContent>
        </FoodCard>
        </FoodItems>

        <FoodItems item xs={12} sm={6} md={5} lg={2.9}>
        <FoodCard raised className='slight'>
        <FoodHeader title='Massaman Curry' avatar={<Avatar><CountryLogo src={Thailand} /></Avatar>} />
        <FoodMedia component='img' image={MassamanCurry} />
        <FoodContent>
          <AboutFoodText>
          Imagine the comforting aroma of roasted peanuts and spices wafting through the air. As you savor this curry, your taste buds are treated to a complex interplay of creaminess, nuttiness, and a hint of sweetness.
          </AboutFoodText>
          <CardActions>
         <MySpeedDial />
          </CardActions>
        </FoodContent>
        </FoodCard>
        </FoodItems>

       </FoodGrid>

       {/*  Germany  */}
       <FoodGrid container maxWidth p={2} spacing={3}>

       <FoodLCWrapper>
       <FoodLocation>Frankfurt am Main, Deutschland</FoodLocation>
       <FoodConclusion>Remember that <span style={{ backgroundColor:  'RGB(0, 0, 0)', color: 'white', borderRadius: '3px' }}>taste</span> is subjective, and your experience of these <span style={{ backgroundColor: ' RGB(206, 17, 38)', borderRadius: '3px' }}>foods</span> might vary. It's a good idea to try them for yourself to fully appreciate the local flavors of <span style={{ backgroundColor: 'RGB(255, 206, 0)', borderRadius: '3px' }}>Frankfurt</span>.</FoodConclusion>
       </FoodLCWrapper>

        <FoodItems item xs={12} sm={6} md={5} lg={2.9}>
        <FoodCard raised className='move'>
        <FoodHeader title='Handkäse Mit Musik' subheader='Hand Cheese with Music' avatar={<Avatar><CountryLogo src={Germany} /></Avatar>} />
        <FoodMedia component='img' image={HandkäseMitMusik} />
        <FoodContent>
          <AboutFoodText>
          A strong-smelling cheese served with a dressing of onions, vinegar, and oil. Its taste is pungent and tangy, and the "music" refers to the onions giving it a kick.
          </AboutFoodText>
          <CardActions>
         <MySpeedDial />
          </CardActions>
        </FoodContent>
        </FoodCard>
        </FoodItems>

        <FoodItems item xs={12} sm={6} md={5} lg={2.9}>
        <FoodCard raised className='move'>
        <FoodHeader title='Frankfurter Rippchen' avatar={<Avatar><CountryLogo src={Germany} /></Avatar>}/>
        <FoodMedia component='img' image={FrankfurterRippchen}/>
        <FoodContent>
         <AboutFoodText>
         These are seasoned and boiled pork chops that have a tender texture and are typically served with sauerkraut or mashed potatoes.
         </AboutFoodText>
         <CardActions>
         <MySpeedDial />
          </CardActions>
        </FoodContent>
        </FoodCard>
        </FoodItems>

        <FoodItems item xs={12} sm={6} md={5} lg={2.9}>
        <FoodCard raised className='move'>
        <FoodHeader title='Bethmannchen' avatar={<Avatar><CountryLogo src={Germany} /></Avatar>}/>
        <FoodMedia component='img' image={Bethmannchen} />
        <FoodContent>
         <AboutFoodText>
         A small marzipan pastry, often shaped like a person, which has a sweet almond flavor and is commonly enjoyed during Christmas.
         </AboutFoodText>
         <CardActions>
         <MySpeedDial />
          </CardActions>
        </FoodContent>
        </FoodCard>
        </FoodItems>

        <FoodItems item xs={12} sm={6} md={5} lg={2.9}>
        <FoodCard raised className='move'>
        <FoodHeader title='Grune Sosse' subheader='Green Sauce' avatar={<Avatar><CountryLogo src={Germany} /></Avatar>} />
        <FoodMedia component='img' image={GruneSosse} />
        <FoodContent>
          <AboutFoodText>
          This cold herbal sauce is made from a mixture of seven fresh herbs, yogurt, and sour cream. It has a tangy and herby taste that pairs well with boiled potatoes or eggs.
          </AboutFoodText>
          <CardActions>
         <MySpeedDial />
          </CardActions>
        </FoodContent>
        </FoodCard>
        </FoodItems>

       {/*  Peru  */}
       </FoodGrid>

       <FoodGrid container maxWidth p={2} spacing={3}>

       <FoodLCWrapper>
       <FoodLocation>Cusco, Peru</FoodLocation>
       <FoodConclusion>These dishes showcase the rich culinary <span style={{ backgroundColor: 'RGB(206, 17, 38)', borderRadius: '3px' }}>heritage</span> of Cusco and the diverse <span style={{ backgroundColor: 'RGB(255, 255, 255)', borderRadius: '3px' }}>flavors</span> of Peruvian cuisine. Keep in mind that the taste experiences can vary, but trying these dishes is a <span style={{ backgroundColor: 'RGB(206, 17, 38)', borderRadius: '3px' }}>wonderful</span> way to immerse yourself in the local food <span style={{ backgroundColor: 'RGB(255, 255, 255)', borderRadius: '3px' }}>culture</span>.</FoodConclusion>
       </FoodLCWrapper>

       <FoodItems item xs={12} sm={6} md={5} lg={2.9}>
        <FoodCard raised className='move'>
        <FoodHeader title='Cuy al Horno' subheader='Roasted Guinea Pig' avatar={<Avatar><CountryLogo src={Peru} /></Avatar>} />
        <FoodMedia component='img' image={CuyAlHorno} />
        <FoodContent>
          <AboutFoodText>
          A traditional Andean delicacy, cuy is roasted to perfection, offering crispy skin and tender, flavorful meat with a unique taste similar to poultry.
          </AboutFoodText>
          <CardActions>
         <MySpeedDial />
          </CardActions>
        </FoodContent>
        </FoodCard>
        </FoodItems>

        <FoodItems item xs={12} sm={6} md={5} lg={2.9}>
        <FoodCard raised className='move'>
        <FoodHeader title='Aji de Gallina' avatar={<Avatar><CountryLogo src={Peru} /></Avatar>}/>
        <FoodMedia component='img' image={AjiDeGallina}/>
        <FoodContent>
         <AboutFoodText>
         This creamy chicken stew is made with aji peppers, nuts, and cheese. Its flavor profile is a delightful blend of spicy and creamy, with a touch of earthiness.
         </AboutFoodText>
         <CardActions>
         <MySpeedDial />
          </CardActions>
        </FoodContent>
        </FoodCard>
        </FoodItems>

        <FoodItems item xs={12} sm={6} md={5} lg={2.9}>
        <FoodCard raised className='move'>
        <FoodHeader title='Rocoto Relleno' avatar={<Avatar><CountryLogo src={Peru} /></Avatar>}/>
        <FoodMedia component='img' image={RocotoRelleno} />
        <FoodContent>
         <AboutFoodText>
         A stuffed spicy pepper filled with minced meat, onions, and cheese. It's spicy and flavorful, with the cheese providing a creamy contrast.
         </AboutFoodText>
         <CardActions>
         <MySpeedDial />
          </CardActions>
        </FoodContent>
        </FoodCard>
        </FoodItems>

        <FoodItems item xs={12} sm={6} md={5} lg={2.9}>
        <FoodCard raised className='move'>
        <FoodHeader title='Chicha Morada' avatar={<Avatar><CountryLogo src={Peru} /></Avatar>} />
        <FoodMedia component='img' image={ChichaMorada} />
        <FoodContent>
          <AboutFoodText>
          While not a food, this drink is made from purple corn and spiced with cinnamon and cloves. It offers a refreshing and slightly sweet taste, often enjoyed as a cooling beverage.
          </AboutFoodText>
           <CardActions>
         <MySpeedDial />
          </CardActions>
        </FoodContent>
        </FoodCard>
        </FoodItems>

       </FoodGrid>

    </GoodFoodContainer>
  )
}

export default GoodEats;