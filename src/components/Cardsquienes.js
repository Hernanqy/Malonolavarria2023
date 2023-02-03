import React from 'react';
import './Cardsquienes.css';


function Cardsquienes() {
  return (
    <div className='cards bg-teal-500'>
    <h1 className='text-red'>Nuestro Equipo</h1>
    
    <div className='cards__container'>
      <div className='cards__wrapper'>
        <ul className='cards__items'>
          <img
            src='images\ficha javi.jpg'
            text='Monatanista con amplia experiencia en lideresgo de trekking.'
            label='Javier Moraga'
            path='/services' alt='evento'
          />
        </ul>
     
      </div>
    </div>
    <div className='cards__container'>
      <div className='cards__wrapper'>
        <ul className='cards__items'>
          <img
            src='images\ficha diego.jpg'
            text='Monatanista con amplia experiencia en lideresgo de trekking.'
            label='Javier Moraga'
            path='/services' alt='evento'
          />
        </ul>
     
      </div>
    </div>
    <div className='cards__container'>
      <div className='cards__wrapper'>
        <ul className='cards__items'>
          <img
            src='images\ficha hernan.jpg'
            text='Monatanista con amplia experiencia en lideresgo de trekking.'
            label='Javier Moraga'
            path='/services' alt='evento'
          />
        </ul>
     
      </div>
    </div>
  </div>
  );
}

export default Cardsquienes;