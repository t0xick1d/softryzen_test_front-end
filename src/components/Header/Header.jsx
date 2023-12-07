import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as ReactLogo } from '../../img/mainLogo.svg';
import { ReactComponent as MenuBurger } from '../../img/menuBurger.svg';
import { ReactComponent as Ellipse } from '../../img/ellipse.svg';

import s from './Header.module.scss';

const Header = ({ switchHeaderMenu, setSwitchHeadermenu }) => {
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
