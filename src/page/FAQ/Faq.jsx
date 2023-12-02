import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Ellipse } from '../../img/ellipse.svg';
import { ReactComponent as Minus } from '../../img/minus.svg';
import { ReactComponent as Add } from '../../img/add.svg';
import s from './Faq.module.scss';

const Faq = () => {
   return (
      <section className={s.container} id="FAQ">
         <h2 className={s.title}>Frequently Asked Questions</h2>
         <div className={s.itemQuestion}>
            <Minus style={{ fill: 'rgba(23, 61, 51, 1)' }} />
            <div>
               <p className={s.textMinus}>
                  How do wind turbines and solar panels work together in a renewable energy system?
               </p>
               <p className={s.text}>
                  Wind turbines and solar panels generate electricity through different mechanisms.
                  Wind turbines harness the kinetic energy of the wind to turn blades, which then
                  drive a generator. Solar panels convert sunlight into electricity through the
                  photovoltaic effect. When integrated into a renewable energy system, these
                  technologies complement each other by providing a continuous and reliable power
                  supply. Wind power is often more abundant during certain times, while solar power
                  is consistent during daylight hours, resulting in a more stable overall energy
                  output.
               </p>
            </div>
         </div>
         <div className={s.itemQuestion}>
            <Add />
            <p className={s.text}>
               What sets EcoSolution's renewable energy solutions apart from others on the market?
            </p>
         </div>
         <div className={s.itemQuestion}>
            <Add />
            <p className={s.text}>
               How can businesses and communities benefit from integrating renewable energy
               solutions from EcoSolution?
            </p>
         </div>
         <div className={s.itemQuestion}>
            <Add />
            <p className={s.text}>
               What measures does EcoSolution take to ensure the environmental sustainability of its
               products?
            </p>
         </div>
         <div className={s.itemQuestion}>
            <Add />
            <p className={s.text}>
               How does EcoSolution engage with local communities and support a just transition to
               renewable energy?
            </p>
         </div>
         <div className={s.tablet}>
            <h3 className={s.secondTitle}>Didn't find the answer to your question?</h3>
            <Link to={`#Contact Us`} reloadDocument className={s.buttonContactUs}>
               <p className={s.buttonText}>Contact Us</p>
               <Ellipse />
            </Link>
         </div>
      </section>
   );
};

export default Faq;
