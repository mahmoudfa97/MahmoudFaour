import React from 'react';
import { Icon } from '@iconify-icon/react';
import Typed from 'typed.js';

const Hero = () => {
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Designer", "Developer", "Freelancer", "Ads Expert"],
      typeSpeed: 50,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <section id="hero" className="d-flex flex-column justify-content-center">
    <div className="container" data-aos="zoom-in" data-aos-delay="100">
      <h1>Mahmoud Faour</h1>
      <p>I'm  <span ref={el} /></p>
      <div className="social-links">
        <a href="https://twitter.com/Mahmoudfa1" className="twitter"><Icon icon="bxl:twitter" /></a>
        <a href="https://www.facebook.com/Mahmoudfaloveyou" className="facebook"><Icon icon="bxl:facebook" /></a>
        <a href="https://www.instagram.com/mahmoudfa97/" className="instagram"> <Icon icon="bxl:instagram" /></a>
        <a href="https://join.skype.com/peaSVy7WmmCp" className="google-plus"> <Icon icon="bxl:skype" /> </a>
        <a href="https://www.linkedin.com/in/amwfa/" className="linkedin"> <Icon icon="bxl:linkedin" /></a>
      </div>
    </div>
  </section>
  );
}

export default Hero;
