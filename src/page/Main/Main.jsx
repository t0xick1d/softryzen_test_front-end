import React from 'react';
import { ReactComponent as ArrowMain } from '../../img/arrowMain.svg';
import img from '../../img/wind-turbine-clean-energy.jpg';

import s from './Main.module.scss';

const Main = () => {
   return (
      <section className={s.container} id="Main">
         <div className={s.mainTablet}>
            <h1 className={s.mainTitle}>RENEWABLE ENERGY For any task</h1>
            <div className={s.containerMainText}>
               <p className={s.mainText}>
                  Development and implementation of renewable non-polluting energy sources,
                  generating power generation using energy wind, sun, water, biomass
               </p>
               <div className={s.containerButton}>
                  <button className={s.mainButton}>
                     <div className={s.textButton}>Learn more</div>
                     <ArrowMain className={s.svgButton} whith="16" height="16" />
                  </button>
               </div>
            </div>
         </div>
         <div className={s.textAdress}>
            <p>79005, Ukraine, Lvivstreet. Shota Rustaveli, 7</p>
            <p>office@ecosolution.com</p>
            <p className={s.pTablet}>ecosolution © 2023</p>
         </div>
         <img src={img} alt="wind turbine clean energy" />
      </section>
   );
};

export default Main;
