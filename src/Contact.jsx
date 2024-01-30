import React from "react";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <>
      <section className="page-banner-area pt-200 rpt-140 pb-100 rpb-60 rel z-1 text-center">
        <div className="container">
          <div className="banner-inner text-white">
            <h1 className="page-title wow fadeInUp delay-0-2s">Contact Us</h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb justify-content-center wow fadeInUp delay-0-4s">
                <li className="breadcrumb-item">
                  <Link to="/">Home</Link>
                </li>
                <li className="breadcrumb-item active">Contact Us</li>
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

      {/* contact form */}

      <section className="contact-page pt-40 pb-130 rpb-100 rel z-1">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-4">
              <div className="contact-page-content rmb-55 wow fadeInUp delay-0-2s">
                <div className="section-title mb-30">
                  <span className="sub-title mb-15">Get In Touch</span>
                  <h2>
                    Let’s Talk For your <span>Next Projects</span>
                  </h2>
                  <p>Feel Free to contact with us.</p>
                </div>
                <h6>Contact Infomation</h6>
                <div className="widget_contact_info mb-35">
                  <ul>
                    <li>
                      <i className="far fa-map-marker-alt"></i> Gulshan Iqbal
                      Rahim Yar Khan,
                      <br />
                      Pakistan
                    </li>
                    <li>
                      <i className="far fa-envelope"></i>
                      <a href="mailto:sayyam0436@gmail.com">
                        <span className="__cf_email__">
                          sayyam0436@gmail.com
                        </span>
                      </a>
                    </li>
                    <li>
                      <i className="far fa-phone"></i>
                      <a href="callto:+923023345030">+92 3023345030</a>
                    </li>
                  </ul>
                </div>
                <h5>Follow Me</h5>
                <div className="social-style-one mt-10">
                  <a
                    href="https://www.facebook.com/sayyam.shafique.54?mibextid=ZbWKwL"
                    target="blank"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="https://www.youtube.com/@sayyamCode">
                    <i className="fab fa-youtube"></i>
                  </a>
                  <a href="https://www.linkedin.com/in/sayyamshafique01/">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a href="https://github.com/SayyamCode">
                    <i className="fab fa-github"></i>
                  </a>
                </div>
              </div>
            </div>
            {/* img */}
            <div className="col-lg-8">
              <img
                src="assets/images/shape/get-in-touch.png"
                className="wow fadeInUp delay-0-2s"
                alt=""
              />
            </div>
          </div>
        </div>
        <br />
        <br />
        <div className="container-fluid">
          <div className="row">
            {/* map */}
            <div className="col-lg-12 ">
              <div className="contact-page-map pb-120 rpb-90 wow fadeInUp delay-0-2s">
                <div className="container">
                  <div className="our-location">
                    <iframe
                      style={{ width: "100%" }}
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7017.310591674285!2d70.33617854141265!3d28.42965628809869!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39375959fb5a9387%3A0x74390e2aa1680dcb!2sGulshan-e-Iqbal%2C%20Rahim%20Yar%20Khan%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1697042631154!5m2!1sen!2s"
                      // style={{ width: "100%" }}

                      loading="lazy"
                    ></iframe>
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

      {/* ********** */}
    </>
  );
}

export default Contact;
