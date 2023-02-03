import React from 'react';



function Cardsefecto() {
  return (
<div id="carouselExampleSlidesOnly" className="carousel slide relative" data-bs-ride="carousel">
  <div className="carousel-inner relative w-full overflow-hidden">
    <div className="carousel-item active relative float-left w-full">
      
      <img
        src="images/flyerpiedrasancestrales.jpg"
        className="block w-full opacity-15 p-1 m-1"
        alt="Wild Landscape"
      />
    </div>
    <div className="carousel-item relative float-left w-full">
      <img
        src="images/flyerantiguos.jpg"
        className="block w-full m-1 p-1"
        alt="Camera"
      />
    </div>
    <div className="carousel-item relative float-left w-full">
      <img
        src="images/flyermega.jpg"
        className="block w-full m-1 p-1"
        alt="Camera"
      />
    </div>
    <div className="carousel-item relative float-left w-full">
      <img
        src="images/flyerbatalla.jpg"
        className="block w-full m-1 p-1"
        alt="Exotic Fruits"
      />
    </div>
  </div>
</div>


  );
}

export default Cardsefecto;