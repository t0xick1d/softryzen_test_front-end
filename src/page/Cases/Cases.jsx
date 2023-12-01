import React from 'react'
import s from './Cases.module.scss';

const Cases = () => {
  return (
     <section>
        <div className={s.tabletStyle}>
           <h2 className={s.title}>
              Development and implementation of renewable enviroMentally friendly energy sources
           </h2>
           <ul className={s.energyUl}>
              <li className={s.energyItem}>Solar</li>
              <li className={s.energyItem}>Wind</li>
              <li className={s.energyItem}>Hydro</li>
              <li className={s.energyItem}>Thernal</li>
              <li className={s.energyItem}>Nucler</li>
           </ul>
        </div>
        <h3 className={s.secondTitle}>Successful cases of our company</h3>
     </section>
  );
}

export default Cases