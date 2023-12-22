import React from 'react';
import s from './Slider.module.scss';

import { ReactComponent as ArrowLeftUp } from '../../img/slider/arrow-rightUp.svg';

const Item = ({ e, i, slideIndex }) => {
   return (
      <div className={s.eachSlideEffect} key={`${i}slider`}>
         <img src={e.img} alt={`img Item${i}`} />
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
};

export default Item;
