import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import Image from 'next/image'

const fadeImages = [
  {
    url: 'https://www.virtual-graphics.ch/wp-content/uploads/2023/08/ep01_01.jpg',
    caption: ''
  },

  {
    url: 'https://www.virtual-graphics.ch/wp-content/uploads/2023/08/ep01_02.jpg',
    caption: ''
  },

  {
    url: 'https://www.virtual-graphics.ch/wp-content/uploads/2023/08/ep01_03.jpg',
    caption: ''
  },



];

const WebtoonSlider = () => {
  return (
    <div className="slide-container">
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

export default WebtoonSlider