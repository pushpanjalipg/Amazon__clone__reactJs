import React, { useState } from 'react';
import { SliderData } from './SliderData';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className='slider'>
     <KeyboardArrowLeftIcon className='left-arrow' onClick={prevSlide} sx={{ fontSize: 50 }}/>
     <KeyboardArrowRightIcon className='right-arrow' onClick={nextSlide} sx={{ fontSize: 50 }}/>
      {SliderData.map((slide, index) => {
        return (
          <div
            className={index === current ? 'slide active' : 'slide'}
            key={index}
          >
            {index === current && (
              <img src={slide.image} alt='{image}' className='image' />
            )}
          </div>
        );
      })}
    </section>
  );
};
export default ImageSlider;
