import React from 'react';
import zbuh from '../../img/costumers/image2.svg';
import { ReactComponent as Bosch } from '../../img/costumers/klipartz1.svg';

import s from './Costumers.module.scss';

const Costumers = () => {
   return (
      <section className={s.container}>
         <h2 className={s.tittle}>our satisfied customers</h2>
         <ul className={s.ulCustomers}>
            <li className={s.itemCustomers} key="1">
               <h3>Bosch</h3>
               <Bosch />
            </li>
            <li className={s.itemCustomers} key="2">
               <h3>Zakhidnyi Buh</h3>
               <img src={zbuh} alt="logo" />
            </li>
         </ul>
      </section>
   );
};

export default Costumers;
