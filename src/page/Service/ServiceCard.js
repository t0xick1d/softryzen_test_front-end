import React from 'react';

import s from './Service.module.scss';

const ServiceCard = ({ data }) => {
   return (
      <li className={s.liOpportunities}>
         <div className={s.containetTitleOpportunities}>
            <div>
               <img src={data.svg} alt="svg" />
               <h3>{data.title}</h3>
            </div>
            <p>{data.text}</p>
         </div>
      </li>
   );
};

export default ServiceCard;
