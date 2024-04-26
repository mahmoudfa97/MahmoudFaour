import React from "react";
import AOS from "aos";
import About from "./Components/About/About";
import Skills from "./Components/Skills/Skills";
import Resume from "./Components/Resume/Resume";
import Portfolio from "./Components/Portfolio/Portfolio";
import Services from "./Components/Services/Services";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Hero from "./Components/Hero/Hero";
import Header from "./Components/Header/header";
import { Icon } from "@iconify-icon/react";

import "./assets/css/style.css";
import "iconify-icon";
import "aos/dist/aos.css";
import "swiper/css";
import "swiper/css";
import "remixicon/fonts/remixicon.css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const App = () => {
  const [isLoading, setIsLoading] = React.useState(true);

  AOS.init({
    duration: 1000,
    easing: "ease-in-out",
    once: true,
    mirror: false,
  });

  React.useEffect(() => {
    // Simulate loading for demonstration purposes
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return isLoading ? (
    <div id="preloader"></div>
  ) : (
    <div className="App">
      <i className="bi bi-list mobile-nav-toggle d-lg-none">
        <Icon icon="bi-list" />
      </i>
      <Header />
      <Hero />
      <main>
        <About />
        <Skills />
        <Services />
        <Portfolio />
        <Resume />    
        <Contact />
      </main>
      <Footer />
      <a href="#" className="back-to-top d-flex align-items-center justify-content-center">
        <i className="bi bi-arrow-up-short">
          <Icon icon="bi-arrow-up-short" />
        </i>
      </a>
    </div>
  );
}

export default App;
