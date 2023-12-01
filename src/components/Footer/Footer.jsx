import React from 'react';
import { ReactComponent as ReactLogo } from '../../img/mainLogo.svg';
import { ReactComponent as Arrow } from '../../img/footer/arrow-right.svg';
import { ReactComponent as Facebook } from '../../img/footer/facebook.svg';
import { ReactComponent as Instagram } from '../../img/footer/instagram.svg';

import s from './Footer.module.scss';

const Footer = () => {
   return (
      <footer className={s.container}>
         <div className={s.logoContainer}>
            <ReactLogo />
            <button>
               <Arrow />
            </button>
         </div>
         <div className={s.social}>
            <Facebook />
            <Instagram />
         </div>
         <address className={s.adressC}>
            <p>79005, Ukraine, Lvivstreet. Shota Rustaveli, 7</p>
            <p>office@ecosolution.com</p>
            <p>ecosolution © 2023</p>
         </address>
      </footer>
   );
};

export default Footer;
