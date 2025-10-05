import React from 'react'
import './Products.css';
import logo from '../asset/images/main-logo.png'
import dhl from '../asset/images/dhl.png';
import shippindcard from '../asset/images/shippingcard.png';
import visa from '../asset/images/visa.jpg';
import mastercard from '../asset/images/mastercard.jpg';
import paypal from '../asset/images/paypal.jpg';
export default function Footer() {
  return (
    <>
      <div className=''>
        <footer id="footer" className="overflow-hidden">
          <div className="container">
            <div className="row">
              <div className="footer-top-area">
                <div className="row d-flex flex-wrap justify-content-between">
                  <div className="col-lg-3 col-sm-6 pb-3">
                    <div className="footer-menu">
                      <img src={logo} alt="logo" />
                      <p>we're passionate about delivering the latest and greatest in electronic innovation right to your doorstep.</p>
                      <div className="social-links">
                        <ul className="d-flex list-unstyled">
                          <li>
                            <a href="https://www.facebook.com/isalmo.idaaiche?mibextid=zbwkwl">
                              <svg className="facebook">
                                <use xlinkHref="#facebook" />
                              </svg>
                            </a>
                          </li>
                          <li>
                            <a href="https://www.instagram.com/isalmoad_49/">
                              <svg className="instagram">
                                <use xlinkHref="#instagram" />
                              </svg>
                            </a>
                          </li>
                          <li>
                            <a href="https://twitter.com/IsalmoI">
                              <svg className="twitter">
                                <use xlinkHref="#twitter" />
                              </svg>
                            </a>
                          </li>
                          <li>
                            <a href="https://www.linkedin.com/in/issalmou-adaaiche-1390bb281">
                              <svg className="linkedin">
                                <use xlinkHref="#linkedin" />
                              </svg>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <svg className="youtube">
                                <use xlinkHref="#youtube" />
                              </svg>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-2 col-sm-6 pb-3">
                    <div className="footer-menu text-uppercase">
                      <h5 className="widget-title pb-2">Quick Links</h5>
                      <ul className="menu-list list-unstyled text-uppercase">
                        <li className="menu-item pb-2">
                          <a href="/products#billboard">Home</a>
                        </li>
                        <li className="menu-item pb-2">
                          <a href="/products#mobile-products">Mobiles</a>
                        </li>
                        <li className="menu-item pb-2">
                          <a href="/products#laptops-products">Laptops</a>
                        </li>
                        <li className="menu-item pb-2">
                          <a href="/products#smart-watches">Watches</a>
                        </li>
                        <li className="menu-item pb-2">
                          <a href="/products#">Sale</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6 pb-3">
                    <div className="footer-menu text-uppercase">
                      <h5 className="widget-title pb-2">Help &amp; Info Help</h5>
                      <ul className="menu-list list-unstyled">
                        <li className="menu-item pb-2">
                          <a href="/products#mobile-products">Track Your Order</a>
                        </li>
                        <li className="menu-item pb-2">
                          <a href="/products#mobile-products">Shipping + Delivery</a>
                        </li>
                        <li className="menu-item pb-2">
                          <a href="/contact">Returns Policies</a>
                        </li>
                        <li className="menu-item pb-2">
                          <a href="/contact">Contact Us</a>
                        </li>
                        <li className="menu-item pb-2">
                          <a href="/about">Faqs</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6 pb-3">
                    <div className="footer-menu contact-item">
                      <h5 className="widget-title text-uppercase pb-2">Contact Us</h5>
                      <p>Do you have any queries or suggestions? <a href="mailto:issalmouadaaiche@gmail.com">WiredWave@gmail.com</a>
                      </p>
                      <p>If you need support? Just give us a call. <a href>+212640065118</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr />
        </footer>
        <div id="footer-bottom">
          <div className="container">
            <div className="row d-flex flex-wrap justify-content-between">
              <div className="col-md-4 col-sm-6">
                <div className="Shipping d-flex">
                  <p>We ship with:</p>
                  <div className="card-wrap ps-2">
                    <img src={dhl} alt="visa" />
                    <img src={shippindcard} alt="mastercard" />
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6">
                <div className="payment-method d-flex">
                  <p>Payment options:</p>
                  <div className="card-wrap ps-2">
                    <img src={visa} alt="visa" />
                    <img src={mastercard} alt="mastercard" />
                    <img src={paypal} alt="paypal" />
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6">
                <div className="copyright">
                  <p>© Copyright 2024 WiredWave. Design by <a href="/admin">issalmou AD</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
