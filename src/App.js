import './App.css';
import TopBar from './Components/TopBar';
import HeroSection from './Components/HeroSection';
import Footer from './Components/Footer';
import Stats from './Components/Stats';
import Testimonial from './Components/Testimonial';
import FAQ from './Components/FAQ';
import Contact from './Components/Content';
import BrandS from './Components/BrandSlider';
import Ads from './Components/ADS';
import Slider from './Components/Slider';

function App() {
  return (
<>
<TopBar />
<HeroSection />
<BrandS />
<Testimonial />
<Stats />
<Slider />
<FAQ />
<Contact />
<Ads />
<Footer />
</>
  );
}

export default App;
