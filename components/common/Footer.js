import React from "react";

const Footer = () => {
  return (
    <footer className="wrapp-footer">
      <div className="footer-box-01">
        <div className="container">
          <div className="row">
            <div className="col-sm-3 col-md-3 col-lg-3">
              <a href="./" className="footer-logo">
                <img src="images/logo.png" alt="" />
              </a>
              <div className="widget widget-text">
                <p>
                  Our clinic largest private mental health partnership, with a
                  carefully selected nationwide team of Psychiatrists.
                </p>
                <ul className="social-list-01">
                  <li>
                    <a href="#">
                      <i className="fa fa-facebook" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-twitter" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-instagram" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-google-plus" aria-hidden="true"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-3 col-md-3 col-lg-3">
              <div className="widget widget-contacts">
                <h3 className="widget-title">Our Head Clinick</h3>
                <ul className="widget-contacts__list">
                  <li>
                    455 Wallstreet St., New York, VA 12364 United States of
                    America
                  </li>
                  <li>
                    <a
                      className="contacts-email"
                      href="maito:companyname@gmail.com"
                    >
                      companyname@gmail.com
                    </a>
                  </li>
                  <li>826 696 8370</li>
                  <li>
                    <p className="work-time">
                      We Work for You Every Day from
                      <span>8.00 AM</span> to
                      <span>6.00 PM</span>
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-3 col-md-3 col-lg-3">
              <div className="widget widget-latest-news">
                <h3 className="widget-title">Our Latest News</h3>
                <ul className="widget-latest-news__list">
                  <li>
                    <h4 className="latest-news-title">
                      <a href="#">
                        Am i Depressed? 6 Signs You Should Know About
                      </a>
                    </h4>
                    <p className="latest-news-date">25 September, 2017</p>
                  </li>
                  <li>
                    <h4 className="latest-news-title">
                      <a href="#">
                        Anxiety Disorder: Which Therapy is Right for Me
                      </a>
                    </h4>
                    <p className="latest-news-date">25 September, 2017</p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-3 col-md-3 col-lg-3">
              <div className="widget widget-quick-links">
                <h3 className="widget-title">Quick Links</h3>
                <ul className="widget-quick-links__list">
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">About</a>
                  </li>
                  <li>
                    <a href="#">Services</a>
                  </li>
                  <li>
                    <a href="#">News</a>
                  </li>
                  <li>
                    <a href="#">Gallery</a>
                  </li>
                  <li>
                    <a href="#">Contacts</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copy-footer-01">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <p className="copy-footer-01__text">
                &copy; 2017 OPTIMA. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
      <a href="#" className="back2top" title="Back to Top">
        Back to Top
      </a>
    </footer>
  );
};

export default Footer;
