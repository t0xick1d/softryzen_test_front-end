import React from 'react';
import img from '../../img/slider/beautiful1.jpg';
import img2 from '../../img/slider/beautiful2.jpg';
import img3 from '../../img/slider/beautiful3.jpg';

import { ReactComponent as ArrowRight } from '../../img/slider/arrow-right.svg';
import { ReactComponent as ArrowLeft } from '../../img/slider/arrowleft.svg';
import { ReactComponent as ArrowLeftUp } from '../../img/slider/arrow-rightUp.svg';

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
   ];

   return (
      <div className={s.container}>
         <div className={s.containerCountButton}>
            <div className={s.currentImg}>
               <span>01</span>/05
            </div>
            <div className={s.buttonContainer}>
               <button className={s.buttonSvg}>
                  <ArrowRight />
               </button>
               <button className={s.buttonSvg}>
                  <ArrowLeft />
               </button>
            </div>
         </div>
         <div className={s.slidereffect} indicators={true}>
            {images.map((e, i) => {
               return (
                  <div className={s.eachSlideEffect} key={`${i}slider`}>
                     <img src={e.img} alt="" width="300" />
                     <div className={s.titleContainer}>
                        <h3>{e.title}</h3>
                        <ArrowLeftUp />
                     </div>
                     <div className={s.textContainer}>
                        <p>{e.text}</p>
                        <p>{e.data}</p>
                     </div>
                  </div>
               );
            })}
         </div>
      </div>
   );
};

export default Slider;
