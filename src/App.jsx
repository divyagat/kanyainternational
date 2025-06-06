import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import DisplayAds from './pages/Services/DisplayAds';
import SocialMedia from './pages/Services/SocialMedia';
import AdprintArea from './pages/Services/AdprintArea';
import ClassifiedAds from './pages/Services/ClassifiedAds';
import DigitalMedia from './pages/Services/DigitalMedia';
import FlyersLeaflets from './pages/Promotion/FlyersLeaflets';
import LogoDesigns from './pages/Promotion/LogoDesigns';
import TableBooks from './pages/Promotion/TableBooks';
import Calendars from './pages/Promotion/Calendars';
import Catalogues from './pages/Promotion/Catlogues';
import AdShortFilm from './pages/Promotion/AdShortFilms';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/DisplayAds" element={<DisplayAds />} />
        <Route path="/AdprintArea" element={<AdprintArea />} />
        <Route path="/SocialMedia" element={<SocialMedia />} />
        <Route path="/ClassifiedAds" element={<ClassifiedAds />} />
        <Route path='/DigitalMedia' element={<DigitalMedia />} />
        <Route path='/FlyersLeaflets' element={<FlyersLeaflets />} />
        <Route path='/LogoDesigns' element={<LogoDesigns />} />
        <Route path='/TableBooks' element={<TableBooks />} />
        <Route path='/Calendars' element={<Calendars />} />
        <Route path="/Catalogues" element={<Catalogues />} />
        <Route path='AdShortFilm' element={<AdShortFilm />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
