import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as ReactLogo } from '../../img/mainLogo.svg';
import { ReactComponent as MenuBurger } from '../../img/menuBurger.svg';
import { ReactComponent as Clouse } from '../../img/clouse.svg';
import { ReactComponent as Arrow } from '../../img/arrow-right.svg';
import { ReactComponent as Facebook } from '../../img/facebook.svg';
import { ReactComponent as Instagram } from '../../img/instagram.svg';
import { ReactComponent as Ellipse } from '../../img/ellipse.svg';

import s from './Header.module.scss';

const listNavMenu = ['Main', 'About', 'Service', 'Cases', 'FAQ', 'Customers', 'Contact Us'];

const Header = () => {
   const [switchHeaderMenu, setSwitchHeadermenu] = useState(false);
   return (
      <div className={s.container}>
         <ReactLogo className={s.logo} />
         <div style={{ display: 'flex' }}>
            <button
               className={s.burgerMenuContainer}
               onClick={(e) => {
                  setSwitchHeadermenu(!switchHeaderMenu);
               }}
            >
               <MenuBurger className={s.burgerMenuSvg} />
            </button>
            {switchHeaderMenu ? (
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
                              <li key={i}>
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
            ) : (
               ''
            )}
            <button>
               <Link to="#Contact Us" Us reloadDocument className={s.buttonGetIn}>
                  <p className={s.buttonText}>Get in toutch</p>
                  <Ellipse />
               </Link>
            </button>
         </div>
      </div>
   );
};

export default Header;
