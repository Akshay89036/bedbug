import React from "react";
import "./header.css";

const Header = () => {
  return (
    <>
      <div className="site-mobile-menu site-navbar-target">
        <div className="site-mobile-menu-header">
          <div className="site-mobile-menu-close mt-3">
            <span className="icon-close2 js-menu-toggle"></span>
          </div>
        </div>
        <div className="site-mobile-menu-body"></div>
      </div>
      <div className="top-bar">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <a href="#" className="">
                <span className="mr-2  icon-envelope-open-o"></span>
                <span className="d-none d-md-inline-block">
                <a href="mailto:info@ByeByeBedbugs.com">info@ByeByeBedbugs.com</a>
                </span>
              </a>
              <span className="mx-md-2 d-inline-block"></span>
              <a href="#" className="">
                <span className="mr-2  icon-phone"></span>{" "}
                <span className="d-none d-md-inline-block">
                  +1 6473346669
                </span>
              </a>

              <div className="float-right">
                <a href="#" className="">
                  <span className="mr-2  icon-twitter"></span>{" "}
                  <span className="d-none d-md-inline-block">Twitter</span>
                </a>
                <span className="mx-md-2 d-inline-block"></span>
                <a href="#" className="">
                  <span className="mr-2  icon-facebook"></span>{" "}
                  <span className="d-none d-md-inline-block">Facebook</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <header
        className="site-navbar js-sticky-header site-navbar-target"
        role="banner"
      >
        <div className="container">
          <div className="row align-items-center position-relative">
            <div className="site-logo">
              <a href="index.html" className="text-black">
                <span className="text-primary" />
                ByeByeBedbugs
              </a>
            </div>
            <div className="col-4"></div>
            <div className="col-8">
              <nav
                className="site-navigation text-right ml-auto "
                role="navigation"
              >
                <ul className="site-menu main-menu js-clone-nav ml-auto d-none d-lg-block">
                  <li>
                    <a href="../" className="nav-link">
                     <h5>Home</h5> 
                    </a>
                  </li>
                  <li>
                    <a href="#servicesa" className="nav-link">
                      <h5>Services</h5>
                    </a>
                  </li>

                  <li>
                  <a href="../rental" className="nav-link">
                     <h5>Rentals/Buy</h5> 
                    </a>
                    
                  </li>

                  <li>
                    <a href="../Whyus" className="nav-link">
                      <h5>Why Us</h5>
                    </a>
                  </li>

                  <li>
                  <a href="./Aboutus" className="nav-link">
                     <h5>FAQ’s</h5> 
                    </a>
                  </li>
                  <li>
                    <a href="#blog-section" className="nav-link">
                     <h5> Blog</h5>
                    </a>
                  </li>
                  <li>
                    <a href="#contacta" className="nav-link">
                     <h5>Contact</h5> 
                    </a>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="toggle-button d-inline-block d-lg-none">
              <a
                href="#"
                className="site-menu-toggle py-5 js-menu-toggle text-black"
              >
                <span className="icon-menu h3"></span>
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
