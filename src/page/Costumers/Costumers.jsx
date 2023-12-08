import React from 'react';
import zbuh from '../../img/costumers/image2.svg';
import { ReactComponent as Bosch } from '../../img/costumers/klipartz1.svg';
import dnipro from '../../img/costumers/dnipro.svg';
import audi from '../../img/costumers/audi.svg';

import s from './Costumers.module.scss';

const Costumers = () => {
   return (
      <section className={s.container} id="Customers">
         <h2 className={s.tittle}>our satisfied customers</h2>
         <ul className={s.ulCustomers}>
            <li className={s.itemCustomers} key="1customers">
               <h3>Bosch</h3>
               <Bosch />
            </li>
            <li className={s.itemCustomers} key="2customers">
               <h3>Zakhidnyi Buh</h3>
               <img src={zbuh} alt="logo" />
            </li>
            <li
               className={s.itemCustomers2}
               style={{ background: 'rgba(23, 61, 51, 1)', color: 'rgba(243, 245, 250, 1)' }}
               key="3customers"
            >
               <h3>Audi</h3>
               <img src={audi} alt="logo" />
            </li>
            <li className={s.itemCustomers2} key="4customers">
               <h3>Dnipro M</h3>
               <img src={dnipro} alt="logo" />
            </li>
         </ul>
      </section>
   );
};

export default Costumers;
