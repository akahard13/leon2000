import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from "../../assets/imagen1.jpg"
import image2 from "../../assets/imagen2.jpg"
import image3 from "../../assets/imagen3.jpg"
import image4 from "../../assets/imagen4.jpg"
import "./slider.css"
function CustomSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    adaptiveHeight: true,
  };

  const images = [
    image1, image2, image3, image4
  ];

  return (
    <div style={{ width: '100%', overflow: 'hidden' }}>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} style={{ overflow: 'hidden' }}>
            <img src={image} alt={`Slide ${index}`} style={{ objectFit: 'cover' }} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default CustomSlider;
