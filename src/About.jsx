import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <>
      <section className="page-banner-area pt-200 rpt-140 pb-100 rpb-60 rel z-1 text-center">
        <div className="container">
          <div className="banner-inner text-white">
            <h1 className="page-title wow fadeInUp delay-0-2s">About Me</h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb justify-content-center wow fadeInUp delay-0-4s">
                <li className="breadcrumb-item">
                  <Link to="/">Home</Link>
                </li>
                <li className="breadcrumb-item active">About Me</li>
              </ol>
            </nav>
          </div>
        </div>
        <div className="bg-lines">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </section>

      {/* ***************** */}

      <section className="about-area rel z-1">
        <div className="for-bgc-black py-130 rpy-100">
          <div className="container">
            <div className="row gap-100 align-items-center">
              <div className="col-lg-7">
                <div className="about-content-part rel z-2 rmb-55">
                  <div className="section-title mb-35 wow fadeInUp delay-0-2s">
                    <span className="sub-title mb-15">About Me</span>
                    <h2>
                      Professional <span>Problem Solutions</span> For Web Apps
                    </h2>

                    <p>
                      I have a talent for finding creative solutions to complex
                      problems, making sure the website runs smoothly and
                      efficiently.
                    </p>
                    <p>
                      I have strong understanding of various programming
                      languages and can write efficient code in each of them.
                    </p>
                  </div>
                  <ul className="list-style-one two-column wow fadeInUp delay-0-2s">
                    <li>Frontend Design</li>
                    <li>Backend Development</li>
                    <li>UI / UX</li>
                    <li>Graphics </li>
                  </ul>
                  <div className="about-info-box mt-25 wow fadeInUp delay-0-2s">
                    <div className="info-box-item">
                      <i className="far fa-envelope"></i>
                      <div className="content">
                        <span>Email Us</span>
                        <br />
                        <a href="mailto:sayyam0436@gmail.com">
                          <span>sayyam0436@gmail.com</span>
                        </a>
                      </div>
                    </div>
                    <div className="info-box-item">
                      <i className="far fa-phone"></i>
                      <div className="content">
                        <span>Make A Call</span>
                        <br />
                        <a href="callto:+923023345030">+92 3023345030</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="about-image-part wow fadeInUp delay-0-3s">
                  <img src="assets/images/about/sayyamimg.jpg" alt="About Me" />
                  <div className="about-btn btn-one wow fadeInRight delay-0-4s">
                    <img src="assets/images/about/btn-image1.png" alt="Image" />
                    <h6>Website Developer</h6>
                    <i className="fas fa-arrow-right"></i>
                  </div>
                  <div className="about-btn btn-two wow fadeInRight delay-0-5s">
                    <img src="assets/images/about/btn-image2.png" alt="Image" />
                    <h6>Sayyam Shafique</h6>
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

      {/* pricing & plane */}
      <section
        id="pricing"
        className="pricing-area pt-130 rpt-100 pb-100 rpb-70 rel z-1"
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-12">
              <div className="section-title text-center mb-60 wow fadeInUp delay-0-2s">
                <span className="sub-title mb-15">Pricing Package</span>
                <h2>
                  Amazing <span>Pricing</span> For your Projects
                </h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">

            <div className="col-lg-4 col-md-6">
              <div className="pricing-item wow fadeInUp delay-0-2s">
                <div className="pricing-header">
                  <h4 className="title">Basic Plan</h4>
                  <p className="save-percent">
                    Try Out Basic Plan Save <span>20%</span>
                  </p>
                  <span className="price">49.99</span>
                </div>
                <div className="pricing-details">
                  <p>
                    In our basic plan you will only pay one time !
                  </p>
                  <ul>
                    <li>Website Design</li>
                    <li>Backend Develop</li>
                    <li>10 Products Add</li>
                    <li className="unable">Digital Marketing</li>
                    <li className="unable">Custom Support</li>
                  </ul>
                  <Link to="/contact" className="theme-btn">
                    Choose Package <i className="far fa-angle-right"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="pricing-item wow fadeInUp delay-0-4s">
                <div className="pricing-header">
                  <h4 className="title">Standard Plan</h4>
                  <p className="save-percent">
                    Try Out Basic Plan Save <span>35%</span>
                  </p>
                  <span className="price">109.00</span>
                </div>
                <div className="pricing-details">
                  <p>
                    Get Your best Package for boost your brand
                  </p>
                  <ul>
                    <li>Website Design</li>
                    <li>Backend Develop</li>
                    <li>Product Design</li>
                    <li>Digital Marketing</li>
                    <li>Custom Support</li>
                  </ul>
                  <Link to='/contact' className="theme-btn">
                    Choose Package <i className="far fa-angle-right"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="pricing-item wow fadeInUp delay-0-6s">
                <div className="pricing-header">
                  <h4 className="title">Advance Plan</h4>
                  <p className="save-percent">
                    Try Out Basic Plan Save <span>45%</span>
                  </p>
                  <span className="price">499.99</span>
                </div>
                <div className="pricing-details">
                  <p>
                    Provide full boosted service for your brand & products
                  </p>
                  <ul>
                    <li>Website Design</li>
                    <li>Mobile Apps Design</li>
                    <li>Product Design</li>
                    <li>Digital Marketing</li>
                    <li>Custom Support</li>
                  </ul>
                  <Link to='/contact' className="theme-btn">
                    Choose Package <i className="far fa-angle-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-lines">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </section>

      {/* popular service */}

      <section className="services-area bgc-black pt-130 rpt-100 pb-100 rpb-70 rel z-1">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-8">
              <div className="section-title text-center mb-60 wow fadeInUp delay-0-2s">
                <span className="sub-title mb-15">Popular Services</span>
                <h2>
                  My <span>Special Service</span> For your Business Development
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="service-item wow fadeInUp delay-0-2s">
                <div className="number">01.</div>
                <div className="content">
                  <h4>Website Development</h4>
                  <p>Built Multipurpose Website Application</p>
                </div>
                <Link to="/contact" className="details-btn">
                  <i className="fas fa-arrow-right"></i>
                </Link>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="service-item wow fadeInUp delay-0-4s">
                <div className="number">02.</div>
                <div className="content">
                  <h4>Website Design</h4>
                  <p>Design Your Websites and brand Portfolio</p>
                </div>
                <Link to="/contact" className="details-btn">
                  <i className="fas fa-arrow-right"></i>
                </Link>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="service-item wow fadeInUp delay-0-2s">
                <div className="number">03.</div>
                <div className="content">
                  <h4>Mobile Application Design</h4>
                  <p>Design React Native App for your Brands</p>
                </div>
                <Link to="/contact" className="details-btn">
                  <i className="fas fa-arrow-right"></i>
                </Link>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="service-item wow fadeInUp delay-0-4s">
                <div className="number">04.</div>
                <div className="content">
                  <h4>User Interface</h4>
                  <p>Design high className UI/UX for Clients</p>
                </div>
                <Link to="/contact" className="details-btn">
                  <i className="fas fa-arrow-right"></i>
                </Link>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="service-item wow fadeInUp delay-0-4s">
                <div className="number">05.</div>
                <div className="content">
                  <h4>SEO & Digital Marketing</h4>
                  <p>Optimize your brand value in digital era</p>
                </div>
                <Link to="/contact" className="details-btn">
                  <i className="fas fa-arrow-right"></i>
                </Link>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="service-item wow fadeInUp delay-0-2s">
                <div className="number">06.</div>
                <div className="content">
                  <h4>Poster & Graphics</h4>
                  <p>Create Attractive Poster for Optimize your Brand</p>
                </div>
                <Link to="/contact" className="details-btn">
                  <i className="fas fa-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-lines">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </section>
    </>
  );
}

export default About;
