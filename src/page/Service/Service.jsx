import React, { useState, useEffect } from 'react';
import ServiceCard from './ServiceCard';

import s from './Service.module.scss';

import circle from '../../img/maximize-circle.svg';
import cpu from '../../img/cpu-charge.svg';
import ranking from '../../img/ranking.svg';
import edit from '../../img/global-edit.svg';

import img from '../../img/service/Mask group (1).jpg';
import img1 from '../../img/service/Mask group.jpg';

const Service = () => {
   const [valueElectric, setValueElectric] = useState(1134147814);
   const [valueInText, setValueInText] = useState('');
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
   useEffect(() => {
      setValueInText(valueElectric.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.'));
      const id = setInterval(() => setValueElectric((oldCount) => oldCount + 1), 1000);

      return () => {
         clearInterval(id);
      };
   }, [valueElectric]);

   return (
      <section id="Service">
         <div className={s.tabletStyle}>
            <div className={s.containerTitle}>
               <h2 className={s.Title}>Main values of our company</h2>
            </div>
            <p className={s.text}>
               EcoSolution envisions a world where sustainable energy solutions power a brighter and
               cleaner future for all. We aspire to be at the forefront of the global shift towards
               renewable energy, leading the way in innovative technologies that harness the power
               of nature to meet the world's energy needs.
            </p>
            <img src="" alt="" />
         </div>
         <ul className={s.ulService}>
            {dataOpportunities.map((e, i) => {
               return <ServiceCard data={e} key={i} />;
            })}
            <li className={s.imgGrid1}>
               <img src={img1} alt="" />
            </li>
            <li className={s.imgGrid2}>
               <img src={img} alt="" />
            </li>
         </ul>
         <div>
            <h3 className={s.titleValue}>Electricity we produced for all time</h3>
            <p className={s.valueText}>
               <span>{valueInText}</span> kWh
            </p>
            <p className={s.textValue}> The services we provide</p>
         </div>
      </section>
   );
};

export default Service;
