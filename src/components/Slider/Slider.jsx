import React from 'react';
import ItemSlider from './ItemSlider';
import ButtonSlider from './ButtonSlider';
import img from '../../img/slider/beautiful1.jpg';
import img2 from '../../img/slider/beautiful2.jpg';
import img3 from '../../img/slider/beautiful3.jpg';
import img4 from '../../img/slider/Mask group.jpg';
import img5 from '../../img/slider/Mask group (1).jpg';

import s from './Slider.module.scss';

const SliderComp = () => {
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

   return (
      <div className={s.container}>
         <div className={s.containerCountButton}>
            <div className={s.currentImg}>
               <span>01</span>/05
            </div>
            <div className={s.buttonContainer}>
               <ButtonSlider direction={'next'} />
               <ButtonSlider direction={'prew'} />
            </div>
         </div>
         <div className={s.sliderEffect}>
            {images.map((e, i) => {
               return <ItemSlider e={e} i={i} key={`ItemSlider ${i}`} />;
            })}
         </div>
      </div>
   );
};

export default SliderComp;
