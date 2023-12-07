import React, { useState } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import Main from './page/Main/Main';
import About from './page/About/About';
import Service from './page/Service/Service';
import Cases from './page/Cases/Cases';
import FAQ from './page/FAQ/Faq';
import Costumers from './page/Costumers/Costumers';
import ContactUs from './page/ContactUs/ContactUs';

import s from './App.module.scss';
import HeaderMenu from './components/HeaderMenu/HeaderMenu';

function App() {
   const [switchHeaderMenu, setSwitchHeadermenu] = useState(false);
   return (
      <div className={s.App}>
         <div className={s.container}>
            <Header switchHeaderMenu={switchHeaderMenu} setSwitchHeadermenu={setSwitchHeadermenu} />
            {switchHeaderMenu ? (
               <HeaderMenu
                  switchHeaderMenu={switchHeaderMenu}
                  setSwitchHeadermenu={setSwitchHeadermenu}
               />
            ) : (
               ''
            )}
            <Main />
            <About />
            <Service />
            <Cases />
            <FAQ />
            <Costumers />
            <ContactUs />
         </div>
         <Footer />
      </div>
   );
}

export default App;
