import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Clouse } from '../../img/clouse.svg';
import { ReactComponent as Arrow } from '../../img/arrow-right.svg';
import { ReactComponent as Facebook } from '../../img/facebook.svg';
import { ReactComponent as Instagram } from '../../img/instagram.svg';

import s from './HeaderMenu.module.scss';

const HeaderMenu = ({ switchHeaderMenu, setSwitchHeadermenu }) => {
   const listNavMenu = ['Main', 'About', 'Service', 'Cases', 'FAQ', 'Customers', 'Contact Us'];
   return (
      <div className={s.navMenu}>
         <div>
            <div
               className={s.clouseContainer}
               onClick={(e) => setSwitchHeadermenu(!switchHeaderMenu)}
            >
               <Clouse className={s.clouseSvg} />
               <div className={s.clouseText}>clouse</div>
            </div>
            <ul>
               {listNavMenu.map((e, i) => {
                  return (
                     <li
                        key={i}
                        onClick={(e) => {
                           setSwitchHeadermenu(!switchHeaderMenu);
                        }}
                     >
                        <Link to={`#${e}`} reloadDocument>
                           {e}
                        </Link>
                        <Arrow />
                     </li>
                  );
               })}
            </ul>
         </div>
         <div className={s.svgGroup}>
            <Link>
               <Facebook />
            </Link>
            <Link>
               <Instagram />
            </Link>
         </div>
      </div>
   );
};

export default HeaderMenu;
