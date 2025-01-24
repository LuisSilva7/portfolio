import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from "./carousel.module.css";

const CustomCarousel = ({ images }) => {
  return (
    <div className={styles.carouselContainer}>
      <Carousel
        showArrows={true}
        showThumbs={false}
        showIndicators={true}
        infiniteLoop={true}
        autoPlay={true}
        interval={3000}
        stopOnHover={true}
        dynamicHeight={false}
      >
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Carousel ${index + 1}`} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CustomCarousel;
