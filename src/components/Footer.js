import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Se protagonista 
        </p>
        <p className='footer-subscription-text'>
          Tus consultas son siempre bienvenidas.
        </p>
        <div className='input-areas'>
          <form>
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
            
          </form>
        </div>
      </section>
     
      
        <div class='social-media-wrap '>
          <div class='footer-logo '>
            <Link to='/' className='social-logo '>
             <p>
              Malon Grande Trekking
               </p>            
              
            </Link>
          </div>
          
        </div>
        <div className='text-center'>
          <small class='website-rights'>DesarrolladorYotti Web 2022</small>
         </div>
      
    </div>
  );
}

export default Footer;