import React from "react";
import { Link } from "react-router-dom";

function downloadPDF() {
  const pdfURL = process.env.PUBLIC_URL + "/SayyamU-Resume.pdf"; // Relative path to the PDF file
  const link = document.createElement("a");
  link.href = pdfURL;
  link.download = "SayyamU-Resume.pdf"; // File ka naam jo download hoga
  link.click();
}

function Home() {
  return (
    <>
      <section className="main-hero-area pt-150 pb-80 rel z-1">
        <div className="container container-1620">
          <div className="row align-items-center">
            <div className="col-lg-4 col-sm-7">
              <div className="hero-content rmb-55 wow fadeInUp delay-0-2s">
                <span className="h2">Hello, i’m </span>
                <h1>
                  <b>Sayyam. </b> Web Developer
                </h1>
                <p>
                  Always try my best to make good UI with the best UX and I can
                  give your business a new creative start right away!
                </p>
                <div className="hero-btns">
                  <Link to="/contact" className="theme-btn">
                    Hire Me <i className="far fa-angle-right"></i>
                  </Link>

                  <a onClick={downloadPDF} className="read-more">
                    Download Resume <i className="far fa-angle-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-5 order-lg-3">
              <div className="hero-counter-wrap ms-lg-auto rmb-55 wow fadeInUp delay-0-4s">
                <div className="counter-item counter-text-wrap">
                  <span
                    className="count-text plus"
                    data-speed="3000"
                    data-stop="2"
                  >
                    3
                  </span>
                  <span className="counter-title">Years Of Experience</span>
                </div>
                <div className="counter-item counter-text-wrap">
                  <span
                    className="count-text plus"
                    data-speed="3000"
                    data-stop="50"
                  >
                    50
                  </span>
                  <span className="counter-title">Project Complete</span>
                </div>
                <div className="counter-item counter-text-wrap">
                  <span
                    className="count-text plus"
                    data-speed="3000"
                    data-stop="49"
                  >
                    49
                  </span>
                  <span className="counter-title">Client Satisfactions</span>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="author-image-part wow fadeIn delay-0-3s">
                <img
                  src="assets/images/hero/sayyam.svg"
                  style={{ width: "100%" }}
                  alt="Author"
                />
              </div>
            </div>
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

      {/* skills */}

      <section className="skill-area rel z-1">
        <div className="for-bgc-black pt-130 rpt-100 pb-100 rpb-70">
          <div className="container">
            <div className="row gap-100">
              <div className="col-lg-5">
                <div className="skill-content-part rel z-2 rmb-55 wow fadeInUp delay-0-2s">
                  <div className="section-title mb-40">
                    <span className="sub-title mb-15">My Skills</span>
                    <h2>
                      Let’s Explore Popular <span>Skills & Expertise</span>
                    </h2>
                    <p>
                      I have is the ability to create websites that are both
                      visually stunning and functionally effective. This means
                      having a keen eye for design and user experience, as well
                      as the technical skills to implement complex features and
                      functionalities that enhance the website's performance and
                      usability.
                    </p>
                  </div>
                  <Link to="/about" className="theme-btn">
                    Learn More <i className="far fa-angle-right"></i>
                  </Link>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="skill-items-wrap">
                  <div className="row">
                    <div className="col-xl-3 col-lg-4 col-md-3 col-sm-4 col-6">
                      <div className="skill-item wow fadeInUp delay-0-2s">
                        <img src="assets/images/skills/html.svg" alt="Skill" />
                        <h5>HTML 5</h5>
                        <span className="percent">85%</span>
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-3 col-sm-4 col-6">
                      <div className="skill-item wow fadeInUp delay-0-3s">
                        <img src="assets/images/skills/css.svg" alt="Skill" />
                        <h5>CSS</h5>
                        <span className="percent">83%</span>
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-3 col-sm-4 col-6">
                      <div className="skill-item wow fadeInUp delay-0-4s">
                        <img
                          src="assets/images/skills/bootstrap.svg"
                          alt="Skill"
                        />
                        <h5>Bootstrap 5</h5>
                        <span className="percent">84%</span>
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-3 col-sm-4 col-6">
                      <div className="skill-item wow fadeInUp delay-0-4s">
                        <img
                          src="assets/images/skills/javascript.svg"
                          alt="Skill"
                        />
                        <h5>JavaScript</h5>
                        <span className="percent">60%</span>
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-3 col-sm-4 col-6">
                      <div className="skill-item wow fadeInUp delay-0-5s">
                        <img
                          src="assets/images/skills/reactjs.svg"
                          alt="Skill"
                        />
                        <h5>React JS</h5>
                        <span className="percent">70%</span>
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-3 col-sm-4 col-6">
                      <div className="skill-item wow fadeInUp delay-0-2s">
                        <img src="assets/images/skills/php.svg" alt="Skill" />
                        <h5>Core PHP</h5>
                        <span className="percent">70%</span>
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-3 col-sm-4 col-6">
                      <div className="skill-item wow fadeInUp delay-0-3s">
                        <img
                          src="assets/images/skills/laravel.png"
                          alt="Skill"
                        />
                        <h5>Laravel</h5>
                        <span className="percent">74%</span>
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-3 col-sm-4 col-6">
                      <div className="skill-item wow fadeInUp delay-0-4s">
                        <img
                          src="assets/images/skills/skill1.png"
                          alt="Skill"
                        />
                        <h5>Figma</h5>
                        <span className="percent">62%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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

      {/* Problem solving solution */}

      <section className="resume-area pt-130 rpt-100 rel z-1">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="big-icon mt-85 rmt-0 rmb-55 wow fadeInUp delay-0-2s">
                <i className="flaticon-star"></i>
              </div>
            </div>
            <div className="col-lg-9">
              <div className="row">
                <div className="col-xl-8 col-lg-9">
                  <div className="section-title mb-60 wow fadeInUp delay-0-2s">
                    <span className="sub-title mb-15">My Resume</span>
                    <h2>
                      Real <span>Problem Solutions</span> & Experience
                    </h2>
                  </div>
                </div>
              </div>
              <div className="resume-items-wrap">
                <div className="row justify-content-between">
                  <div className="col-xl-5 col-md-6">
                    <div className="resume-item wow fadeInUp delay-0-4s">
                      <div className="icon">
                        <i className="far fa-arrow-right"></i>
                      </div>
                      <div className="content">
                        <span className="years">2023 - October</span>
                        <h4>Senior Web Developer</h4>
                        <span className="company">NGS Technologies</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-5 col-md-6">
                    <div className="resume-item wow fadeInUp delay-0-3s">
                      <div className="icon">
                        <i className="far fa-arrow-right"></i>
                      </div>
                      <div className="content">
                        <span className="years">2021 - 2023</span>

                        <h4>Web Developer & Trainer</h4>

                        <span className="company">Syntax House</span>
                      </div>
                    </div>
                  </div>

                  <div className="col-xl-5 col-md-6">
                    <div className="resume-item wow fadeInUp delay-0-2s">
                      <div className="icon">
                        <i className="far fa-arrow-right"></i>
                      </div>
                      <div className="content">
                        <span className="years">2021 - 2022</span>
                        <h4>Outsourcing</h4>
                        <span className="company">Local Clients</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-5 col-md-6">
                    <div className="resume-item wow fadeInUp delay-0-4s">
                      <div className="icon">
                        <i className="far fa-arrow-right"></i>
                      </div>
                      <div className="content">
                        <span className="years">2020 - 2021</span>
                        <h4>Frontend & Figma Desinger</h4>
                        <span className="company">Freelancing</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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

      {/* latest work */}

      <section className="projects-area pt-130 rpt-100 pb-100 rpb-70 rel z-1">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-12">
              <div className="section-title text-center mb-60 wow fadeInUp delay-0-2s">
                <span className="sub-title mb-15">Latest Works</span>
                <h2>
                  Explore My Popular <span>Projects</span>
                </h2>
              </div>
            </div>
          </div>
          <div className="row align-items-center pb-25">
            <div className="col-lg-6">
              <div className="project-image wow fadeInLeft delay-0-2s">
                <img src="assets/images/projects/techmetix.png" alt="Project" />
              </div>
            </div>
            <div className="col-xl-5 col-lg-6">
              <div className="project-content wow fadeInRight delay-0-2s">
                <span className="sub-title">Web App</span>
                <h2>
                  <a href="https://techmetixsolutions.com.au/" target="blank">
                    Techmetix Solution
                  </a>
                </h2>
                <p>
                  Tech Solution Web App Where User Can Easily Find Top Rated
                  Developers according to their needs
                </p>
                <a
                  href="https://techmetixsolutions.com.au/"
                  target="blank"
                  className="details-btn"
                >
                  <i className="far fa-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="row align-items-center pb-25">
            <div className="col-lg-6 order-lg-2">
              <div className="project-image wow fadeInLeft delay-0-2s">
                <img src="assets/images/projects/kbargains.png" alt="Project" />
              </div>
            </div>
            <div className="col-xl-5 col-lg-6 ms-auto">
              <div className="project-content wow fadeInRight delay-0-2s">
                <span className="sub-title">Ecommerce Web App</span>
                <h2>
                  <a href="https://kbargains.com.au/" target="blank">
                    Multipurpose Ecommerce Website
                  </a>
                </h2>
                <p>
                  Kbargains is the Multipurpose Ecommerce Website With Proper
                  Paypal payment Gateway service
                </p>
                <a
                  href="https://kbargains.com.au/"
                  target="blank"
                  className="details-btn"
                >
                  <i className="far fa-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="row align-items-center pb-25">
            <div className="col-lg-6">
              <div className="project-image wow fadeInLeft delay-0-2s">
                <img src="assets/images/projects/onworld.png" alt="Project" />
              </div>
            </div>
            <div className="col-xl-5 col-lg-6">
              <div className="project-content wow fadeInRight delay-0-2s">
                <span className="sub-title">Blogging Website</span>
                <h2>
                  <a href="https://www.onworld.live/" target="blank">
                    Onworld Live Blogging
                  </a>
                </h2>
                <p>
                  Blogging website which provide daily world affairs and news
                  with proper documentation and authentication.
                </p>
                <a
                  href="https://www.onworld.live/"
                  target="blank"
                  className="details-btn"
                >
                  <i className="far fa-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="project-btn text-center wow fadeInUp delay-0-2s">
            <Link to="/projects" className="theme-btn">
              View More Projects <i className="far fa-angle-right"></i>
            </Link>
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
    </>
  );
}

export default Home;
