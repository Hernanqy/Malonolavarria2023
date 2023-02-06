import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'> 
  
      <img src="../build/images/logo.png" alt='logo' />
    
      <video src='../videos/Sendero - 119781.mp4' autoPlay loop muted />
     
      
      
      
      <div className='hero-btns'>
        
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          Consultas? Contactanos ahora.
        </Button>
        <div
          className='btns1'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          <a href="https://wa.me/542284554038/">
    <img className='imgwa'src="images\pngwing.com.png" alt='logowa'/>
 </a>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;