import React from 'react';



function Cardsproximas() {
  return (
    <div className='cards'>
      <h1 className='text-red'>Septiembre 10 y 11</h1>
      <h2 className='animate-pulse text-center text-lg text-indigo-400'>Ultimos lugares disponibles</h2>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <img
              src='images\evento1011.jpg'
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

export default Cardsproximas;