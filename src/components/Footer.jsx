import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer className="main-footer rel z-1">
        <div className="footer-top-wrap bgc-black pt-100 pb-75">
          <div className="container">
            <div className="row">
              <div className="col-lg-2 col-md-12">
                <div className="footer-widget widget_logo wow fadeInUp delay-0-2s">
                  <div className="footer-logo">
                    <a href="index.html">
                      <img src="assets/images/logos/logo.svg" alt="Logo" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-7 col-md-7">
                <div className="footer-widget widget_nav_menu wow fadeInUp delay-0-4s">
                  <h6 className="footer-title">Quick Link</h6>
                  <ul>
                   
                    <li>
                      <Link to='/' >Home</Link>
                    </li>

                    
                    <li>
                      <Link to='/projects' >Projects</Link>
                    </li>
                   
                    <li>
                      <Link to='/contact' >Contact</Link>
                    </li>
                   
                   
                  </ul>
                </div>
                <div className="footer-widget widget_newsletter wow fadeInUp delay-0-4s">
                  <form action="#">
                    <label >
                      <i className="far fa-envelope"></i>
                    </label>
                    <input
                      id="email-address"
                      type="email"
                      placeholder="Email Address"
                      required
                    />
                    <button>
                      Sign Up <i className="far fa-angle-right"></i>
                    </button>
                  </form>
                </div>
              </div>
              <div className="col-lg-3 col-md-5">
                <div className="footer-widget widget_contact_info wow fadeInUp delay-0-6s">
                  <h6 className="footer-title">Address</h6>
                  <ul>
                    <li>
                      <i className="far fa-map-marker-alt"></i> Gulshan Iqbal , Rahim Yar Khan
                    </li>
                    <li>
                      <i className="far fa-envelope"></i>
                      
                      <a href="mailto:sayyam0436@gmail.com">sayyam0436@gmail.com</a>
                    </li>
                    <li>
                      <i className="far fa-phone"></i>
                      <a href="callto:+923023345030">+92 3023345030</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom pt-20 pb-5 rpt-25">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="copyright-text">
                  <p>
                    Copyright @2023, <Link to="/">Sayyam Shafique</Link> All
                    Rights Reserved
                  </p>
                </div>
              </div>
              <div className="col-lg-6 text-lg-end">
                <ul className="footer-bottom-nav">
                  <li>
                    <a href="https://www.facebook.com/sayyam.shafique.54?mibextid=ZbWKwL" target="blank">Facebook</a>
                  </li>
                  <li>
                    <a href="https://github.com/SayyamCode" target="blank">Github</a>
                  </li>
                  <li>
                    <a href="https://www.youtube.com/@sayyamCode">Youtube</a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/sayyamshafique01/">LinkedIn</a>
                  </li>
                </ul>
              </div>
            </div>

            <button className="scroll-top scroll-to-target" data-target="html">
              <span className="fas fa-angle-double-up"></span>
            </button>
          </div>
          <div className="bg-lines">
            <span></span>
            <span></span> <span></span>
            <span></span> <span></span>
            <span></span> <span></span>
            <span></span> <span></span>
            <span></span>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
