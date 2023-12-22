import React from 'react';
import s from './Slider.module.scss';
import { ReactComponent as ArrowRight } from '../../img/slider/arrow-right.svg';
import { ReactComponent as ArrowLeft } from '../../img/slider/arrowleft.svg';

const ButtonSlider = ({ direction }) => {
   return (
      <button className={s.buttonSvg}>
         {direction === 'next' ? <ArrowRight /> : <ArrowLeft />}
      </button>
   );
};

export default ButtonSlider;
