import React from "react";
import { Icon } from "@iconify-icon/react";

const Header = () => (
    <div className="Header">
      <i className="bi bi-list mobile-nav-toggle d-lg-none"></i>
      <header id="header" className="d-flex flex-column justify-content-center">
        <nav id="navbar" className="navbar nav-menu">
          <ul>
            <li>
              <a href="#hero" className="nav-link scrollto active">
                {" "}
                <Icon icon="bx-home" /> <span>Home</span>
              </a>
            </li>
            <li>
              <a href="#about" className="nav-link scrollto">
                {" "}
                <Icon icon="bx-user" /> <span>About</span>
              </a>
            </li>
            <li>
              <a href="#resume" className="nav-link scrollto">
                {" "}
                <Icon icon="bx-file-blank" /> <span>Resume</span>
              </a>
            </li>
            <li>
              <a href="#portfolio" className="nav-link scrollto">
                {" "}
                <Icon icon="bx-book-content" />
                <span>Portfolio</span>
              </a>
            </li>
            <li>
              <a href="#services" className="nav-link scrollto">
                {" "}
                <Icon icon="bx-server" />
                <span>Services</span>
              </a>
            </li>
            <li>
              <a href="#contact" className="nav-link scrollto">
                {" "}
                <Icon icon="bx-envelope" />
                <span>Contact</span>
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );


export default Header;
