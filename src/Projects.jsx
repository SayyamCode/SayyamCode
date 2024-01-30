import React from "react";
import { Link } from "react-router-dom";

function Projects() {
  return (
    <>
      <section className="page-banner-area pt-200 rpt-140 pb-100 rpb-60 rel z-1 text-center">
        <div className="container">
          <div className="banner-inner text-white">
            <h1 className="page-title wow fadeInUp delay-0-2s">
              Popular Projects
            </h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb justify-content-center wow fadeInUp delay-0-4s">
                <li className="breadcrumb-item">
                  <Link to="/">Home</Link>
                </li>
                <li className="breadcrumb-item active">Projects</li>
              </ol>
            </nav>
          </div>
        </div>
        <div className="bg-lines">
          <span></span>
          <span></span> <span></span>
          <span></span> <span></span>
          <span></span> <span></span>
          <span></span> <span></span>
          <span></span>
        </div>
      </section>

      {/* projects grid */}
      <div className="container">
        <div className="row">
          {/* *** */}
          <div className="col-lg-6 item design marketing graphics">
            <div className="project-item style-two wow fadeInUp delay-0-4s">
              <div className="project-image">
                <img src="assets/images/projects/kbargains.png" alt="Project" />
                <a
                  href="https://kbargains.com.au/"
                  target="blank"
                  className="details-btn"
                >
                  <i className="far fa-arrow-right"></i>
                </a>
              </div>
              <div className="project-content">
                <span className="sub-title">Web App</span>
                <h3>
                  <a href="https://kbargains.com.au/" target="blank">
                    Multipurpose Ecommerce
                  </a>
                </h3>
              </div>
            </div>
          </div>

          {/* *** */}
          <div className="col-lg-6 item design marketing graphics">
            <div className="project-item style-two wow fadeInUp delay-0-4s">
              <div className="project-image">
                <img src="assets/images/projects/onworld.png" alt="Project" />
                <a
                  href="https://onworld.live/"
                  target="blank"
                  className="details-btn"
                >
                  <i className="far fa-arrow-right"></i>
                </a>
              </div>
              <div className="project-content">
                <span className="sub-title">Web App</span>
                <h3>
                  <a href="https://onworld.live/" target="blank">
                    Blogging Website
                  </a>
                </h3>
              </div>
            </div>
          </div>

          {/* *** */}
          <div className="col-lg-6 item design marketing graphics">
            <div className="project-item style-two wow fadeInUp delay-0-4s">
              <div className="project-image">
                <img src="assets/images/projects/techmetix.png" alt="Project" />
                <a
                  href="https://techmetixsolutions.com.au/"
                  target="blank"
                  className="details-btn"
                >
                  <i className="far fa-arrow-right"></i>
                </a>
              </div>
              <div className="project-content">
                <span className="sub-title">Web App</span>
                <h3>
                  <a href="https://techmetixsolutions.com.au/" target="blank">
                    Solution Finder App
                  </a>
                </h3>
              </div>
            </div>
          </div>

          {/* *** */}
          <div className="col-lg-6 item design marketing graphics">
            <div className="project-item style-two wow fadeInUp delay-0-4s">
              <div className="project-image">
                <img src="assets/images/projects/riyasat.png" alt="Project" />
                <a
                  href="https://bifoliolate-sirens.000webhostapp.com/"
                  target="blank"
                  className="details-btn"
                >
                  <i className="far fa-arrow-right"></i>
                </a>
              </div>
              <div className="project-content">
                <span className="sub-title">Web App</span>
                <h3>
                  <a
                    href="https://bifoliolate-sirens.000webhostapp.com/"
                    target="blank"
                  >
                    Riyasat Dastkari Website
                  </a>
                </h3>
              </div>
            </div>
          </div>

          {/* *** */}
          <div className="col-lg-6 item design marketing graphics">
            <div className="project-item style-two wow fadeInUp delay-0-4s">
              <div className="project-image">
                <img src="assets/images/projects/babysweet.png" alt="Project" />
                <a
                  href="https://babiessweet.com/"
                  target="blank"
                  className="details-btn"
                >
                  <i className="far fa-arrow-right"></i>
                </a>
              </div>
              <div className="project-content">
                <span className="sub-title">Web App</span>
                <h3>
                  <a href="https://babiessweet.com/" target="blank">
                    Baby Ecommerce Store
                  </a>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
