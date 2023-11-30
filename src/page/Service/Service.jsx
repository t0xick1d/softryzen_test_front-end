import React from 'react';


import s from './Service.module.scss';

import circle from '../../img/maximize-circle.svg';
import cpu from '../../img/cpu-charge.svg';
import ranking from '../../img/ranking.svg';
import edit from '../../img/global-edit.svg';

const Service = () => {
   const dataOpportunities = [
      {
         title: 'Openness',
         text: 'to the world, people, new ideas and projects',
         svg: circle,
      },
      {
         title: 'Responsibility',
         text: 'we are aware that the results of our work have an impact on our lives and the lives of future generations',
         svg: edit,
      },
      {
         title: 'Innovation',
         text: 'we use the latest technology to implement non-standard solutions',
         svg: cpu,
      },
      {
         title: 'Quality',
         text: 'we do not strive to be the first among others, but we want to be the best in our business',
         svg: ranking,
      },
   ];
   return (
      <section>
         <h2 className={s.Title}>Main values of our company</h2>
         <p className={s.text}>
            EcoSolution envisions a world where sustainable energy solutions power a brighter and
            cleaner future for all. We aspire to be at the forefront of the global shift towards
            renewable energy, leading the way in innovative technologies that harness the power of
            nature to meet the world's energy needs.
         </p>
         <ul className={s.ulService}>
            {dataOpportunities.map((e, i) => {
               return (
                  <li key={i} className={s.liOpportunities}>
                     <div className={s.containetTitleOpportunities}>
                        <div>
                           <img src={e.svg} alt="svg" />
                           <h3>{e.title}</h3>
                        </div>
                        <p>{e.text}</p>
                     </div>
                  </li>
               );
            })}
         </ul>
         <div>
            <h3 className={s.titleValue}>Electricity we produced for all time</h3>
            <p className={s.valueText}>
               <span>1.134.147.814</span> kWh
            </p>
            <p className={s.textValue}> The services we provide</p>
         </div>
      </section>
   );
};

export default Service;
