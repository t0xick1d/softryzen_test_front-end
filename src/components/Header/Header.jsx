import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ReactComponent as ReactLogo } from '../../img/mainLogo.svg';
import { ReactComponent as MenuBurger } from '../../img/menuBurger.svg';
import { ReactComponent as Clouse } from '../../img/clouse.svg';
import { ReactComponent as Arrow } from '../../img/arrow-right.svg';
import { ReactComponent as Facebook } from '../../img/facebook.svg';
import { ReactComponent as Instagram } from '../../img/instagram.svg';

import s from './Header.module.scss';

const listNavMenu = ['Main', 'About', 'Service', 'Cases', 'FAQ', 'Customers', 'Contact Us'];

const Header = () => {
   const [switchHeaderMenu, setswitchHeadermenu] = useState(false);
   return (
      <div className={s.container}>
         <ReactLogo className={s.logo} />
         <button
            className={s.burgerMenuContainer}
            onClick={(e) => {
               if (e.target === e.currentTarget) {
                  setswitchHeadermenu(!switchHeaderMenu);
               }
            }}
         >
            <MenuBurger className={s.burgerMenuSvg} />
            {switchHeaderMenu ? (
               <div className={s.navMenu}>
                  <div>
                     <div
                        className={s.clouseContainer}
                        onClick={(e) => setswitchHeadermenu(!switchHeaderMenu)}
                     >
                        <Clouse className={s.clouseSvg} />
                        <div className={s.clouseText}>clouse</div>
                     </div>

                     <ul>
                        {listNavMenu.map((e, i) => {
                           return (
                              <li key={i}>
                                 <NavLink to={e}>{e}</NavLink>
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
            ) : (
               ''
            )}
         </button>
      </div>
   );
};

export default Header;
