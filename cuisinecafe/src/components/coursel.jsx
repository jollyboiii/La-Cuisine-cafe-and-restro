import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CustomCard from '../components/CustomCard';
import specialites from '../components/specialites'; // Importing the array from specialites.js

function Coursel() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <div>
      <Carousel responsive={responsive}>
        {specialites.map((item, index) => (
          <CustomCard 
            key={index} 
            images={item.Image} 
            title={item.Title} 
            description={item.Description} 
          />
        ))}
      </Carousel>
    </div>
  );
}

export default Coursel;