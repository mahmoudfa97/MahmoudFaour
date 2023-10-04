import React from "react";

const Resume = () => (
  <section id="resume" className="resume">
    <div className="container" data-aos="fade-up">
      <div className="section-title">
        <h2>Resume</h2>
      </div>
      <div className="row">
        <div className="col-lg-6">
          <h3 className="resume-title">Summary</h3>
          <div className="resume-item pb-0">
            <h4>Mahmoud Faour</h4>
            <p>
              <em>
                Innovative and deadline-driven FullStack Developer with 5+ years of experience designing and developing user-centered digital/print marketing material from initial
                concept to final, polished deliverable.
              </em>
            </p>
            <ul>
              <li>Haifa, Israel</li>
              <li>(+972) 052-2498402</li>
              <li>leedor97@gmail.com</li>
            </ul>
          </div>

          <h3 className="resume-title">Education</h3>
          <div className="resume-item">
            <h4>Full Stack Web Developer</h4>
            <h5>2016 - 2017</h5>
            <p>
              <em>Experis Software, Tel Aviv, Israel</em>
            </p>
            <p>
              Activities and societies: The Experis KickStart program lasts about six months and is designed to train FULL STACK developers with advanced and deep knowledge On the
              core issues. The program is built on the basis of industry needs and combines theory and practice, which are transmitted by experienced senior mentors Industry
            </p>
          </div>
          <div className="resume-item">
            <h4>Mobile Applications Developer</h4>
            <h5>2015 - 2016</h5>
            <p>
              <em>HackerU, Haifa, Israel</em>
            </p>
            <p>Created Applications for Android & IOS. </p>
          </div>
        </div>
        <div className="col-lg-6">
          <h3 className="resume-title">Professional Experience</h3>
          <div className="resume-item">
            <h4>Senior UI Developer</h4>
            <h5>2020 - 2023</h5>
            <p>
              <em>Amdocs, Nazareth, Israel </em>
            </p>
            <ul>
              <li>Lead in the design, development, and implementation of the graphic, layout, and production communication materials</li>
              <li>design, develop, modify, debug, test and/or maintain software code according to functional, non-functional and technical design specifications.</li>
              <li>Supervise the assessment of all graphic materials in order to ensure quality and accuracy of the design</li>
              <li>Assume technical ownership and provide technical support as necessary.</li>
              <li>Actively cooperate with colleagues in different development teams in order to transform approved prototypes into a full-fledged product/service</li>
            </ul>
          </div>
          <div className="resume-item">
            <h4>Front End Developer</h4>
            <h5>2018 - 2020</h5>
            <p>
              <em>ContentSquare, Ramat Gan, Israel</em>
            </p>
            <ul>
              <li>Develop and implement new components of the Design System</li>
              <li>Implement any needed tool to help Quality engineers to validate a new version of the Design System (visual regression, …)</li>
              <li>Write good quality code and build out test automation (unit and functional tests).</li>
              <li>Write documentation for any new component</li>
              <li>
                Communication: Work closely with members feature team to ensure components of the Design System fit their needs; Act as Design System advocate; Work closely with
                a11y expert to ensure compliance with a11y WCAG
              </li>
              <li>Stack / Tools: Typescript, StencilJS, D3JS, WebComponent Storybook</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Resume;
