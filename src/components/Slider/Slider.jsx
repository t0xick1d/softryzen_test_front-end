import React, { useState } from 'react';
import ItemSlider from './ItemSlider';
import img from '../../img/slider/beautiful1.jpg';
import img2 from '../../img/slider/beautiful2.jpg';
import img3 from '../../img/slider/beautiful3.jpg';
import img4 from '../../img/slider/Mask group.jpg';
import img5 from '../../img/slider/Mask group (1).jpg';

import { ReactComponent as ArrowRight } from '../../img/slider/arrow-right.svg';
import { ReactComponent as ArrowLeft } from '../../img/slider/arrowleft.svg';

import s from './Slider.module.scss';

const Slider = () => {
   const images = [
      {
         title: "Lviv Region, Radekhiv townPrivate Enterprise 'ZAKHIDNYI BUH'",
         text: 'Wind Power for auto field irrigation',
         data: 'July 2023',
         img,
      },
      {
         title: "Zhytomyr city Private Enterprise 'Bosch'",
         text: 'Solar Panels for industrial use',
         data: 'November 2023',
         img: img2,
      },
      {
         title: "Zhytomyr city Private Enterprise 'Bosch'",
         text: 'Solar Panels for industrial use',
         data: 'November 2023',
         img: img3,
      },
      {
         title: 'Kherson city Private Enterprise “HealthyFarm”',
         text: 'Wind power',
         data: 'September 2021',
         img: img4,
      },
      {
         title: 'Zaporizhia city Private Enterprise “Biotech”',
         text: 'Mini nuclear stations',
         data: 'May 2021',
         img: img5,
      },
   ];

   const [slideIndex, setSlideIndex] = useState(1);

   const nextSlide = () => {
      if (slideIndex !== images.length) {
         setSlideIndex(slideIndex + 1);
      } else if (slideIndex === images.length) {
         setSlideIndex(1);
      }
   };

   const prevSlide = () => {
      if (slideIndex !== 1) {
         setSlideIndex(slideIndex - 1);
      } else if (slideIndex === 1) {
         setSlideIndex(images.length);
      }
   };

   return (
      <div className={s.container}>
         <div className={s.containerCountButton}>
            <div className={s.currentImg}>
               <span>01</span>/05
            </div>
            <div className={s.buttonContainer}>
               <button
                  onClick={() => {
                     prevSlide();
                  }}
                  className={s.buttonSvg}
               >
                  <ArrowRight />
               </button>
               <button
                  onClick={() => {
                     nextSlide();
                  }}
                  className={s.buttonSvg}
               >
                  <ArrowLeft />
               </button>
            </div>
         </div>
         <div className={s.sliderEffect} indicators={true}>
            {images.map((e, i) => {
               return (
                  <ItemSlider
                     e={e}
                     i={i}
                     key={`ItemSlider ${i}`}
                     className={slideIndex === i + 1 ? 'slide active-anim' : 'slide'}
                  />
               );
            })}
         </div>
      </div>
   );
};

export default Slider;
