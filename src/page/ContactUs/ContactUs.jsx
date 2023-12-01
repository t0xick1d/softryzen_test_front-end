import React from 'react';

import { ReactComponent as Facebook } from '../../img/footer/facebook.svg';
import { ReactComponent as Instagram } from '../../img/footer/instagram.svg';
import { ReactComponent as Call } from '../../img/footer/call.svg';
import { ReactComponent as Sms } from '../../img/footer/sms.svg';
import { ReactComponent as Map } from '../../img/footer/map.svg';
import { ReactComponent as ArrowMain } from '../../img/arrowMain.svg';

import s from './ContactUs.module.scss';

const ContactUs = () => {
   return (
      <section className={s.container}>
         <h2 className={s.title}>Contact us</h2>
         <div className={s.containerContact}>
            <div>
               <h3>Phone:</h3>
               <div className={s.phoneNumber}>
                  <Call />
                  <p>38 (098) 12 34 567</p>
               </div>
               <div className={s.phoneNumber}>
                  <Call />
                  <p>38 (093) 12 34 567</p>
               </div>
            </div>
            <div>
               <h3>E-mail:</h3>
               <div className={s.phoneNumber}>
                  <Sms />
                  <p>office@ecosolution.com</p>
               </div>
            </div>
            <address>
               <h3>Address:</h3>
               <div className={s.phoneNumber}>
                  <Map />
                  <p>79005, Ukraine, Lvivstreet. Shota Rustaveli, 7</p>
               </div>
            </address>
            <div className={s.socialContainer}>
               <h3>Social Networks:</h3>
               <div>
                  <Facebook />
                  <Instagram />
               </div>
            </div>
         </div>
         <form className={s.formContainer}>
            <div className={s.labelContainer}>
               <label for="name">Full name:</label>
               <input
                  class="form__input"
                  type="text"
                  name="name"
                  id="name"
                  placeholder="John Rosie"
               />
            </div>
            <div className={s.labelContainer}>
               <label for="email">E-mail:</label>
               <input
                  class="form__input"
                  type="email"
                  name="email"
                  id="email"
                  placeholder="johnrosie@gmail.com"
               />
            </div>
            <div className={s.labelContainer}>
               <label for="phone">Phone:</label>
               <input
                  class="form__input"
                  type="number"
                  name="name"
                  id="name"
                  placeholder="380961234567"
               />
            </div>
            <div className={s.labelContainer}>
               <label for="message">Message:</label>
               <textarea
                  class="form__input"
                  type="text"
                  name="message"
                  id="name"
                  placeholder="Your message"
               />
            </div>
            <button className={s.buttonSubmit} type="submit">
               <div className={s.textButton}>Send</div>
               <div className={s.containerSvg}>
                  <ArrowMain />
               </div>
            </button>
         </form>
      </section>
   );
};

export default ContactUs;
