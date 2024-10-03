import React from "react";
import { Link } from "react-router-dom";

function downloadPDF() {
  const pdfURL = process.env.PUBLIC_URL + '/SayyamU-Resume.pdf'; // Relative path to the PDF file
  const link = document.createElement('a');
  link.href = pdfURL;
  link.download = 'SayyamU-Resume.pdf'; // File ka naam jo download hoga
  link.click();
}

function Header() {
  return (
    <>
      <header className="main-header menu-absolute">
        <div className="header-upper">
          <div className="container container-1620 clearfix">
            <div className="header-inner rel d-flex align-items-center">
              <div className="logo-outer">
                <div className="logo">
                  <Link to="/">
                    <img
                      src="assets/images/logos/logo.svg"
                      alt="Logo"
                      title="Logo"
                    />
                  </Link>
                </div>
              </div>

              <div className="nav-outer clearfix mx-auto">
                <nav className="main-menu navbar-expand-lg">
                  <div className="navbar-header">
                    <div className="mobile-logo my-15">
                      <Link to="/">
                        <img
                          src="assets/images/logos/logo.svg"
                          alt="Logo"
                          title="Logo"
                        />
                      </Link>
                    </div>

                    <button
                      type="button"
                      className="navbar-toggle me-4"
                      data-bs-toggle="collapse"
                      data-bs-target=".navbar-collapse"
                    >
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                    </button>
                  </div>

                  <div className="navbar-collapse collapse clearfix">
                    <ul className="navigation clearfix">
                      <li>
                        <Link to="/">Home</Link>
                      </li>

                      <li>
                        <Link to="/about">About</Link>
                      </li>

                      <li>
                        <Link to="/projects">Projects</Link>
                      </li>

                      <li>
                        <Link to="/contact">Contact</Link>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
              {/* download button */}
              <div className="menu-btns"></div>
              <div className="menu-sidebar" onClick={downloadPDF}>
                <button>
                  <img
                    src="assets/images/shape/download-shape.png"
                    alt="Toggler"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
