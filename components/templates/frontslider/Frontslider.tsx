import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import Image from 'next/image'

const fadeImages = [
  {
    url: 'https://www.virtual-graphics.ch/wp-content/uploads/2023/08/immortal_slides01.jpg',
    caption: ''
  },
  {
    url: 'https://www.virtual-graphics.ch/wp-content/uploads/2023/08/immortal_slides02.jpg',
    caption: ''
  },
  {
    url: 'https://www.virtual-graphics.ch/wp-content/uploads/2023/08/immortal_slides03.jpg',
    caption: ''
  },

];

const FrontSlider = () => {
  return (
    <div className="slide-container mt-10">
      <Fade>
        {fadeImages.map((fadeImage, index) => (
          <div key={index}>
           <img style={{ width: '100%' }} src={fadeImage.url} alt="Slider"/>
            <h2>{fadeImage.caption}</h2>
          </div>
        ))}
      </Fade>
    </div>
  )
}

export default FrontSlider