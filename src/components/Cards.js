import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Conoce nuestra propuesta integral</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images\WhatsApp Image 2022-08-06 at 3.55.58 PM.jpeg'
              text='Explora junto a nosotros senderos llenos de historias milenarias'
              label='Trekking'
              path='/services'
            />
            <CardItem
              src='images\buencomer.jpeg'
              text='Comida de campo elaborada por nuestro chef'
              label='Gastronomia'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images\piedras3.jpeg'
              text='Conoce el pasado prehistorico, los increibles animales que habitaron la region, como vivian los primeros humanos hace 10.000 años y la historia reciente de los pueblos originarios'
              label='Viaje en el tiempo'
              path='/services'
            />
            <CardItem
              src='images\dormis.jpeg'
              text='Comodos dormis para descansar. '
              label='Dormis'
              path='/products'
            />
            <CardItem
              src='images\legendarios.jpg'
              text='Somos amigos desde hace mas de 30 años. Javier Moraga,montanista con una basta experiencia en coordinacion de grupos de Trekking.
              Diego Capri chef y propietario del restorant Pepino Longo con mas de 20 años de experiencia en el rubro gastronomico. Hernan Yotti especialista en patrimonio cultural y natural, estudiante de arqueologia.'
              label='Nuestro equipo'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
      <h1 className='text-red mt-10 mb-5'>¿Donde estamos?</h1>
      <div class="flex justify-center">
  <div class="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
    <img class=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg" src="images\Argentina_-_Buenos_Aires_-_Olavarría.svg.png" alt="" />
    <div class="p-6 flex flex-col justify-start">
      <h5 class="text-gray-900 text-xl font-medium mb-2">Partido de Olavarria, Provincia de Buenos Aires, Republica Argentina.</h5>
      <p class="text-gray-700 text-base mb-4">
          Nuestra base esta localizada a 15 km del casco urbano en el paraje Bella Vista al pie de las sierras chicas en un entorno natural.
          Se puede llegar por la ruta 226 hasta el paraje Bella Vista donde se toma un tramo de 2km de camino entoscado.
             
      </p>
      <p class="text-gray-600 text-xs">Zona donde realizamos nuestro Trekking</p>
      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d12755.968263876188!2d-60.16531510359038!3d-36.93835683609128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sar!4v1661125196802!5m2!1ses!2sar" title='googlemaps' width="350" height="350"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
  </div>
</div>
     


      
    
 
    </div>
    
  );
}

export default Cards;