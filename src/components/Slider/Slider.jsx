import React from 'react';
import img from '../../img/slider/beautiful-view-wind-turbines-grass-covered-field-captured-holland (1).jpg';
import img2 from '../../img/slider/beautiful-view-wind-turbines-grass-covered-field-captured-holland (2).jpg';
import img3 from '../../img/slider/beautiful-view-wind-turbines-grass-covered-field-captured-holland (3).jpg';
import { Slide } from 'react-slideshow-image';
import s from './Slider.module.scss';

const Slider = () => {
   const images = [img, img2, img3];

   return (
      <Slide
         autoplay={false}
         onChange={function noRefCheck() {}}
         onStartChange={function noRefCheck() {}}
      >
         {images.map((e, i) => {
            return (
               <div className={s.eachSlideEffect} key={`${i}slider`}>
                  <div>
                     <img src={e} alt="" />
                     <span>Slide {i}</span>
                  </div>
               </div>
            );
         })}
      </Slide>
   );
};

export default Slider;
