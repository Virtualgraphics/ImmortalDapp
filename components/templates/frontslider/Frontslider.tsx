import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import Image from 'next/image'

const fadeImages = [
  {
    url: 'https://www.virtual-graphics.ch/wp-content/uploads/2024/06/immortal_slideNEW07.jpg',
    caption: ''
  },
  {
    url: 'https://www.virtual-graphics.ch/wp-content/uploads/2024/05/immortal_slideNEW06.jpg',
    caption: ''
  },
  {
    url: 'https://www.virtual-graphics.ch/wp-content/uploads/2024/05/immortal_slideNEW04.jpg',
    caption: ''
  },

  {
    url: 'https://www.virtual-graphics.ch/wp-content/uploads/2024/05/immortal_slideNEW05.jpg',
    caption: ''
  },

];

const FrontSlider = () => {
  return (
    <div className="slide-container ">
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