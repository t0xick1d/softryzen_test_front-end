import React from 'react';
import employer1 from '../../img/employe/Mask group.jpg';
import employer2 from '../../img/employe/Mask group (1).jpg';
import employer3 from '../../img/employe/Mask group (2).jpg';
import employer4 from '../../img/employe/Mask group (3).jpg';

import s from './About.module.scss';

const About = () => {
   const dataStuff = [
      {
         name: 'Andrii Duda',
         position: 'CEO',
         img: employer1,
      },
      {
         name: 'Yurii Turchenko',
         position: 'Technology officer',
         img: employer2,
      },
      {
         name: 'Vitalii Shevchenko',
         position: 'Director',
         img: employer3,
      },
      {
         name: 'Victor Dunaev',
         position: 'Senior engineer',
         img: employer4,
      },
   ];


   return (
      <section className={s.container} id='About'>
         <div className={s.tabletStyle}>
            <h2 className={s.Title}>LET’s start with small start with ourselves</h2>
            <p className={s.text}>
               <span>ECOSOLUTION</span> is the largest group of companies in Western Ukraine, which
               is engaged in the development and implementation of renewable environmentally
               friendly energy sources. We are the first privately owned company that received a
               loan from the European Bank for Reconstruction and Development (EBRD) and built the
               first wind farm in Western Ukraine. During the company's work, a number of projects
               in the field of energy were implemented. At the same time, new investment projects,
               in particular small hydropower and biofuels, are constantly being developed and
               developed with existing objects.
            </p>
         </div>
         <ul className={s.ulEmploye}>
            {dataStuff.map((e, i) => {
               return (
                  <li key={i} className={s.liContainer}>
                     <img src={e.img} alt="" />
                     <h3 className={s.nameEmploye}>{e.name}</h3>
                     <p className={s.poition} s>
                        {e.position}
                     </p>
                  </li>
               );
            })}
         </ul>
      </section>
   );
};

export default About;
