import React from 'react';
import { Icon } from '@iconify-icon/react';
const Footer = () =>  (
    <footer id="footer">
    <div className="container">
      <h3>Mahmoud Faour</h3>
      <p>Software Engineer | Web & App Dev | Ads Expert | Let's Connect! 🌐📈💼</p>
      <div className="social-links">
      <a href="https://twitter.com/Mahmoudfa1" className="twitter"><Icon icon="bxl:twitter" /></a>
        <a href="https://www.facebook.com/Mahmoudfaloveyou" className="facebook"><Icon icon="bxl:facebook" /></a>
        <a href="https://www.instagram.com/mahmoudfa97/" className="instagram"> <Icon icon="bxl:instagram" /></a>
        <a href="https://join.skype.com/peaSVy7WmmCp" className="google-plus"> <Icon icon="bxl:skype" /> </a>
        <a href="https://www.linkedin.com/in/amwfa/" className="linkedin"> <Icon icon="bxl:linkedin" /></a>
      </div>
      <div className="copyright">
        &copy; Copyright <strong><span>Mahmoud Resume</span></strong>. All Rights Reserved
      </div>
      <div className="credits">
        Designed by <a href="https://.com/">Mahmoud</a>
      </div>
    </div>
  </footer>
);

export default Footer;
