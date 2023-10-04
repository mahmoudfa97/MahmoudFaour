import React from "react";
import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import { Icon } from "@iconify-icon/react";
const Portfolio = () => {
  new Swiper(".portfolio-details-slider", {
    // configure Swiper to use modules
    modules: [Navigation, Pagination],
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },
  });
  // TO-DO need to change to a dynamic code. instead of repeating all. 
  // TO-DO need to add portfolio Details component.
  return (
    <section id="portfolio" className="portfolio section-bg">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Portfolio</h2>
        </div>

        <div className="row">
          <div className="col-lg-12 d-flex justify-content-center" data-aos="fade-up" data-aos-delay="100">
         
          </div>
        </div>

        <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="200">
          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <div className="portfolio-wrap">
              <img src="assets/img/portfolio/portfolio-1.jpg" className="img-fluid" alt="" />
              <div className="portfolio-info">
                <h4>App 1</h4>
                <p>App</p>
                <div className="portfolio-links">
                  <a href="assets/img/portfolio/portfolio-1.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 1">
                    <i className="bx bx-plus"> <Icon icon="bx-plus" /></i>
                  </a>
                  <a href="portfolio-details.html" className="portfolio-details-lightbox" data-glightbox="type: external" title="Portfolio Details">
                    <i className="bx bx-link"> <Icon icon="bx-link" /></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-web">
            <div className="portfolio-wrap">
              <img src="assets/img/portfolio/portfolio-2.jpg" className="img-fluid" alt="" />
              <div className="portfolio-info">
                <h4>Web 1</h4>
                <p>Game</p>
                <div className="portfolio-links">
                  <a href="assets/img/portfolio/portfolio-2.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Web 1">
                  <i className="bx bx-plus"> <Icon icon="bx-plus" /></i>
                  </a>
                  <a href="portfolio-details.html" className="portfolio-details-lightbox" data-glightbox="type: external" title="Portfolio Details">
                    <i className="bx bx-link"> <Icon icon="bx-link" /></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <div className="portfolio-wrap">
              <img src="assets/img/portfolio/portfolio-3.jpg" className="img-fluid" alt="" />
              <div className="portfolio-info">
                <h4>App 2</h4>
                <p>App</p>
                <div className="portfolio-links">
                  <a href="assets/img/portfolio/portfolio-3.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 2">
                  <i className="bx bx-plus"> <Icon icon="bx-plus" /></i>
                  </a>
                  <a href="portfolio-details.html" className="portfolio-details-lightbox" data-glightbox="type: external" title="Portfolio Details">
                    <i className="bx bx-link"> <Icon icon="bx-link" /></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-game">
          <div className="portfolio-wrap">
              <img src="assets/img/portfolio/resume.png" className="img-fluid" alt="" />
              <div className="portfolio-info ">
                <h4>Web 3</h4>
                <p>Resume</p>
                <div className="portfolio-links">
                  <a href="assets/img/portfolio/resume.png" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Web 2">
                  <i className="bx bx-plus"> <Icon icon="bx-plus" /></i>
                  </a>
                  <a href="portfolio-details.html" className="portfolio-details-lightbox" data-glightbox="type: external" title="Portfolio Details">
                    <i className="bx bx-link"> <Icon icon="bx-link" /></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-web">
            <div className="portfolio-wrap">
              <img src="assets/img/portfolio/portfolio-5.jpg" className="img-fluid" alt="" />
              <div className="portfolio-info ">
                <h4>Web 2</h4>
                <p>Game</p>
                <div className="portfolio-links">
                  <a href="assets/img/portfolio/portfolio-5.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Web 2">
                  <i className="bx bx-plus"> <Icon icon="bx-plus" /></i>
                  </a>
                  <a href="portfolio-details.html" className="portfolio-details-lightbox" data-glightbox="type: external" title="Portfolio Details">
                    <i className="bx bx-link"> <Icon icon="bx-link" /></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <div className="portfolio-wrap">
              <img src="assets/img/portfolio/portfolio-6.jpg" className="img-fluid" alt="" />
              <div className="portfolio-info">
                <h4>Game</h4>
                <p>Game</p>
                <div className="portfolio-links">
                  <a href="assets/img/portfolio/portfolio-6.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Game">
                  <i className="bx bx-plus"> <Icon icon="bx-plus" /></i>
                  </a>
                  <a href="portfolio-details.html" className="portfolio-details-lightbox" data-glightbox="type: external" title="Portfolio Details">
                    <i className="bx bx-link"> <Icon icon="bx-link" /></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-game">
            <div className="portfolio-wrap">
              <img src="assets/img/portfolio/portfolio-7.jpg" className="img-fluid" alt="" />
              <div className="portfolio-info">
                <h4>Game</h4>
                <p>Game</p>
                <div className="portfolio-links">
                  <a href="assets/img/portfolio/portfolio-7.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Game Game">
                  <i className="bx bx-plus"> <Icon icon="bx-plus" /></i>
                  </a>
                  <a href="portfolio-details.html" className="portfolio-details-lightbox" data-glightbox="type: external" title="Portfolio Details">
                    <i className="bx bx-link"> <Icon icon="bx-link" /></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
