import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import Main from './page/Main/Main';
import About from './page/About/About';
import Service from './page/Service/Service';
import Cases from './page/Cases/Cases';
import FAQ from './page/FAQ/Faq';
import Costumers from './page/Costumers/Costumers';
import ContactUs from './page/ContactUs/ContactUs';

import './App.scss';

function App() {
   return (
      <div className="App">
         <div className="container">
            <Header />
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
