import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import img1 from '../../assets/images/banner/1.jpg'
import img2 from '../../assets/images/banner/2.jpg'
import img3 from '../../assets/images/banner/3.jpg'
import img4 from '../../assets/images/banner/4.jpg'
import img5 from '../../assets/images/banner/5.jpg'
import img6 from '../../assets/images/banner/6.jpg'

const Banner = () => {
  return (
    <div>
      <Carousel>
        <div>
          <img src={img1} />
          <p>Legend 1</p>
        </div>
        <div>
          <img src={img2} />
          <p className="">Legend 2</p>
        </div>
        <div>
          <img src={img3} />
          <p className="">Legend 3</p>
        </div>
        <div>
          <img src={img4} />
          <p className="">Legend 3</p>
        </div>
        <div>
          <img src={img5} />
          <p className="">Legend 3</p>
        </div>
        <div>
          <img src={img6} />
          <p className="">Legend 3</p>
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;