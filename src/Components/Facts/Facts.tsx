import React from 'react';
import { Icon } from '@iconify-icon/react';
const Facts = () => (
    <section id="facts" className="facts">
    <div className="container" data-aos="fade-up">

      <div className="section-title">
        <h2>Facts</h2>
      </div>

      <div className="row">

        <div className="col-lg-3 col-md-6">
          <div className="count-box">
            <i className="bi bi-emoji-smile"><Icon icon="bi-emoji-smile" /></i>
            <span className="purecounter">232</span>
            <p>Happy Clients</p>
          </div>
        </div>

        <div className="col-lg-3 col-md-6 mt-5 mt-md-0">
          <div className="count-box">
            <i className="bi bi-journal-richtext " ><Icon icon="bi-journal-richtext" /></i>
            <span className="purecounter">125</span>
            <p>Projects</p>
          </div>
        </div>

        <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
          <div className="count-box">
            <i className="bi bi-headset"> <Icon icon="bi-headset" /></i>
            <span className="purecounter">1424</span>
            <p>Hours Of Support</p>
          </div>
        </div>

        <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
          <div className="count-box">
            <i className="bi bi-award"><Icon icon="bi-award" /></i>
            <span className="purecounter">25</span>
            <p>Awards</p>
          </div>
        </div>

      </div>

    </div>
  </section>
  );

export default Facts;
