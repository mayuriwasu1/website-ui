import "./App.scss";
import TopBar from "./Components/TopBar";
import HeroSection from "./Components/HeroSection";
import Footer from "./Components/Footer";
import Stats from "./Components/Stats";
import Testimonial from "./Components/Testimonial";
import FAQ from "./Components/FAQ";
import Contact from "./Components/Content";
import BrandS from "./Components/BrandSlider";
import Ads from "./Components/ADS";
import Slider from "./Components/Slider";
import { useEffect, useRef, useState } from "react";
import  Loader from "./Components/Loader";

function App() {
  const [loading, setLoading] = useState(true);
  const Section = ({ children }) => {
    const sectionRef = useRef(null);
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible');
            }
          });
        },
        { threshold: 0.1 } // Trigger when 10% of the section is visible
      );

      if (sectionRef.current) {
        observer.observe(sectionRef.current);
      }

      return () => {
        if (sectionRef.current) {
          observer.unobserve(sectionRef.current);
        }
      };
    }, []);

    return (
      <div className="section" ref={sectionRef}>
        {children}
      </div>
    );
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer); // Cleanup on unmount
  }, []);

  return (
    <>
  {loading ? <Loader /> : <>
      <Section id="section1">
        <TopBar />
      </Section>
      <Section id="section2">
        <HeroSection />
      </Section>
      <Section id="section3">
        <BrandS />
      </Section>
      <Section id="section1">
        <Testimonial />
      </Section>
      <Section id="section2">
        <Stats />
      </Section>
      <Section id="section3">
        <Slider />
      </Section>
      <Section id="section1">
        <FAQ />
      </Section>
      <Section id="section2">
        <Contact />
      </Section>
      <Section id="section3">
        <Ads />
      </Section>
      <Footer />
      <Section id="section1"></Section>
     </>
  }
    </>
  );
}

export default App;
