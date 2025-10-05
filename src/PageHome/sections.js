import './home.css';
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { CarouselItem } from 'react-bootstrap';
import bill1 from '../asset/images/banner-image.png'
import bill2 from '../asset/images/pc.png'
import bill3 from '../asset/images/uniter.png'
import bill4 from '../asset/images/phone.png'
import post1 from '../asset/images/post-item1.jpg'
import post2 from '../asset/images/post-item2.jpg'
import post3 from '../asset/images/post-item3.jpg'
import insta1 from '../asset/images/insta-item1.jpg'
import insta2 from '../asset/images/insta-item2.jpg'
import insta3 from '../asset/images/insta-item3.jpg'
import insta4 from '../asset/images/insta-item4.jpg'
import insta5 from '../asset/images/insta-item5.jpg'
import sale from '../asset/images/single-image1.png'
import ReactDOM from 'react-dom';
export default function Section() {
  return (
    <>
      <div>
        <section id="billboard" className="position-relative overflow-hidden bg-light-blue">
          <Carousel id='billboard1'>
            <Carousel.Item>
              <div className="swiper-slide">
                <div className="container">
                  <div className="row d-flex flex-wrap align-items-center">
                    <div className="col-md-6">
                      <div className="banner-content">
                        <h1 className="display-2 text-uppercase ms-5 text-dark pb-5">Technology Hack You Won't Get.</h1>
                      </div>
                    </div>
                    <div className="col-md-5 pt-3">
                      <div className="image-holder">
                        <img src={bill2} alt="banner" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="swiper-slide">
                <div className="container">
                  <div className="row d-flex flex-wrap align-items-center">
                    <div className="col-md-6">
                      <div className="banner-content">
                        <h1 className="display-2 text-uppercase ms-5 text-dark">Empower Your Lifestyle with Cutting-Edge Electronics.</h1>
                      </div>
                    </div>
                    <div className="col-md-5">
                      <div className="image-holder">
                        <img src={bill1} alt="banner" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="swiper-slide">
                <div className="container">
                  <div className="row d-flex flex-wrap align-items-center">
                    <div className="col-md-6">
                      <div className="banner-content">
                        <h1 className="display-2 text-uppercase ms-5 text-dark pb-5"> Explore, Shop, Thrive with WiredWave.</h1>
                      </div>
                    </div>
                    <div className="col-md-5 pt-4">
                      <div className="image-holder">
                        <img src={bill3} alt="banner" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="swiper-slide">
                <div className="container">
                  <div className="row d-flex align-items-center">
                    <div className="col-md-6">
                      <div className="banner-content">
                        <h1 className="display-2 text-uppercase text-dark ms-md-5 pb-5">Your Products Are Great.</h1>
                      </div>
                    </div>
                    <div className="col-md-5 pt-2">
                      <div className="image-holder">
                        <img src={bill4} alt="banner" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Carousel.Item>
          </Carousel>
        </section>
        <section id="company-services" className="padding-large">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6 pb-3">
                <div className="icon-box d-flex">
                  <div className="icon-box-icon pe-3 pb-3">
                    <svg className="cart-outline">
                      <use xlinkHref="#cart-outline" />
                    </svg>
                  </div>
                  <div className="icon-box-content">
                    <h3 className="card-title text-uppercase text-dark">Free delivery</h3>
                    <p>Elevate Your Tech Experience with WiredWave – Where Innovation Meets Convenience, and Delivery is Always on Us</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 pb-3">
                <div className="icon-box d-flex">
                  <div className="icon-box-icon pe-3 pb-3">
                    <svg className="quality">
                      <use xlinkHref="#quality" />
                    </svg>
                  </div>
                  <div className="icon-box-content">
                    <h3 className="card-title text-uppercase text-dark">Quality guarantee</h3>
                    <p>Empowering Tomorrow, Ensuring Today – Your Electronic World, Our Quality Guarantee!</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 pb-3">
                <div className="icon-box d-flex">
                  <div className="icon-box-icon pe-3 pb-3">
                    <svg className="price-tag">
                      <use xlinkHref="#price-tag" />
                    </svg>
                  </div>
                  <div className="icon-box-content">
                    <h3 className="card-title text-uppercase text-dark">Daily offers</h3>
                    <p>Unwrap Daily Delights: Your Go-To Destination for Tech Thrills and Daily Deals!</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 pb-3">
                <div className="icon-box d-flex">
                  <div className="icon-box-icon pe-3 pb-3">
                    <svg className="shield-plus">
                      <use xlinkHref="#shield-plus" />
                    </svg>
                  </div>
                  <div className="icon-box-content">
                    <h3 className="card-title text-uppercase text-dark">100% secure payment</h3>
                    <p>Tech Marvels, Secure Payments — Your Electronic Bliss, Guaranteed!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="yearly-sale" className="bg-light-blue overflow-hidden mt-5 padding-xlarge" style={{ backgroundImage: `url(${sale})`, backgroundPosition: 'right', backgroundRepeat: 'no-repeat' }}>
          <div className="row d-flex flex-wrap align-items-center">
            <div className="col-md-6 col-sm-12">
              <div className="text-content offset-4 padding-medium">
                <h3>10% off</h3>
                <h2 className="display-2 pb-5 text-uppercase text-dark">New year sale</h2>
                <a href="/login" className="btn btn-medium btn-dark text-uppercase btn-rounded-none">Shop Sale</a>
              </div>
            </div>
            <div className="col-md-6 col-sm-12">
            </div>
          </div>
        </section>
        <section id="latest-blog" className="padding-large">
          <div className="container">
            <div className="row">
              <div className="display-header d-flex justify-content-between pb-3">
                <h2 className="display-7 text-dark text-uppercase">Latest Posts</h2>
                <div className="btn-right">
                  <a href="#testimonials" className="btn btn-medium btn-normal text-uppercase">Read Blog</a>
                </div>
              </div>
              <div className="post-grid d-flex flex-wrap justify-content-between">
                <div className="col-lg-4 col-sm-12">
                  <div className="card border-none me-3">
                    <div className="card-image">
                      <img src={post1} alt className="img-fluid" />
                    </div>
                  </div>
                  <div className="card-body text-uppercase">
                    <div className="card-meta text-muted">
                      <span className="meta-date">feb 22, 2023</span>
                      <span className="meta-category">- Gadgets</span>
                    </div>
                    <h3 className="card-title">
                      <a href="/login">Get some cool gadgets in 2023</a>
                    </h3>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-12">
                  <div className="card border-none me-3">
                    <div className="card-image">
                      <img src={post2} alt className="img-fluid" />
                    </div>
                  </div>
                  <div className="card-body text-uppercase">
                    <div className="card-meta text-muted">
                      <span className="meta-date">feb 25, 2023</span>
                      <span className="meta-category">- Technology</span>
                    </div>
                    <h3 className="card-title">
                      <a href="/login">Technology Hack You Won't Get</a>
                    </h3>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-12">
                  <div className="card border-none me-3">
                    <div className="card-image">
                      <img src={post3} alt className="img-fluid" />
                    </div>
                  </div>
                  <div className="card-body text-uppercase">
                    <div className="card-meta text-muted">
                      <span className="meta-date">feb 22, 2023</span>
                      <span className="meta-category">- Camera</span>
                    </div>
                    <h3 className="card-title">
                      <a href="/login">Top 10 Small Camera In The World</a>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="testimonials" className="position-relative">
          <div className="quotation text-center" id='test1'>
            <svg className="quote">
              <use xlinkHref="#quote" />
            </svg>
          </div>
          <Carousel id='test1'>
            <CarouselItem>
              <div className="swiper-slide text-center d-flex justify-content-center">
                <div className="review-item col-md-10">
                  <i className="icon icon-review" />
                  <blockquote>“Navigating through WiredWave was like embarking on a tech-savvy adventure! The website's sleek design and organized layout immediately caught my attention, offering a visually appealing showcase of the latest electronic marvels.”</blockquote>
                  <div className="rating">
                    <svg className="star star-fill">
                      <use xlinkHref="#star-fill" />
                    </svg>
                    <svg className="star star-fill">
                      <use xlinkHref="#star-fill" />
                    </svg>
                    <svg className="star star-fill">
                      <use xlinkHref="#star-fill" />
                    </svg>
                    <svg className="star star-empty">
                      <use xlinkHref="#star-empty" />
                    </svg>
                    <svg className="star star-empty">
                      <use xlinkHref="#star-empty" />
                    </svg>
                  </div>
                  <div className="author-detail">
                    <div className="name text-dark text-uppercase pt-2">Kamal El Amraoui</div>
                  </div>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="swiper-slide text-center d-flex justify-content-center">
                <div className="review-item col-md-10">
                  <i className="icon icon-review" />
                  <blockquote>“The site's intuitive design not only showcased the latest tech trends but also made the shopping process enjoyable. From a hassle-free checkout to swift delivery, WiredWave has truly mastered the art of catering to the modern consumer's needs.”</blockquote>
                  <div className="rating">
                    <svg className="star star-fill">
                      <use xlinkHref="#star-fill" />
                    </svg>
                    <svg className="star star-fill">
                      <use xlinkHref="#star-fill" />
                    </svg>
                    <svg className="star star-fill">
                      <use xlinkHref="#star-fill" />
                    </svg>
                    <svg className="star star-fill">
                      <use xlinkHref="#star-fill" />
                    </svg>
                    <svg className="star star-fill">
                      <use xlinkHref="#star-fill" />
                    </svg>
                  </div>
                  <div className="author-detail">
                    <div className="name text-dark text-uppercase pt-2">Emma Chamberlin</div>
                  </div>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="swiper-slide text-center d-flex justify-content-center">
                <div className="review-item col-md-10">
                  <i className="icon icon-review" />
                  <blockquote>“Visiting WiredWave was an absolute delight! The user-friendly interface made navigation a breeze, allowing me to effortlessly explore the extensive range of electronic products. The seamless browsing experience, coupled with detailed product descriptions and high-quality images, instilled confidence in my purchase decisions. ”</blockquote>
                  <div className="rating">
                    <svg className="star star-fill">
                      <use xlinkHref="#star-fill" />
                    </svg>
                    <svg className="star star-fill">
                      <use xlinkHref="#star-fill" />
                    </svg>
                    <svg className="star star-fill">
                      <use xlinkHref="#star-fill" />
                    </svg>
                    <svg className="star star-half">
                      <use xlinkHref="#star-half" />
                    </svg>
                    <svg className="star star-empty">
                      <use xlinkHref="#star-empty" />
                    </svg>
                  </div>
                  <div className="author-detail">
                    <div className="name text-dark text-uppercase pt-2">Andrea rodriguez</div>
                  </div>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="swiper-slide text-center d-flex justify-content-center">
                <div className="review-item col-md-10">
                  <i className="icon icon-review" />
                  <blockquote>“ What truly impressed me was the seamless integration of user reviews, offering valuable insights from fellow shoppers.”</blockquote>
                  <div className="rating">
                    <svg className="star star-fill">
                      <use xlinkHref="#star-fill" />
                    </svg>
                    <svg className="star star-fill">
                      <use xlinkHref="#star-fill" />
                    </svg>
                    <svg className="star star-half">
                      <use xlinkHref="#star-half" />
                    </svg>
                    <svg className="star star-empty">
                      <use xlinkHref="#star-empty" />
                    </svg>
                    <svg className="star star-empty">
                      <use xlinkHref="#star-empty" />
                    </svg>
                  </div>
                  <div className="author-detail">
                    <div className="name text-dark text-uppercase pt-2">Anas El Ahmadi</div>
                  </div>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="swiper-slide text-center d-flex justify-content-center">
                <div className="review-item col-md-10">
                  <i className="icon icon-review" />
                  <blockquote>“ The checkout process was quick and secure, and the real-time order tracking kept me in the loop until my gadget goodies arrived promptly at my doorstep.”</blockquote>
                  <div className="rating">
                    <svg className="star star-fill">
                      <use xlinkHref="#star-fill" />
                    </svg>
                    <svg className="star star-fill">
                      <use xlinkHref="#star-fill" />
                    </svg>
                    <svg className="star star-fill">
                      <use xlinkHref="#star-fill" />
                    </svg>
                    <svg className="star star-fill">
                      <use xlinkHref="#star-fill" />
                    </svg>
                    <svg className="star star-empty">
                      <use xlinkHref="#star-empty" />
                    </svg>
                  </div>
                  <div className="author-detail">
                    <div className="name text-dark text-uppercase pt-2">Josef Silney</div>
                  </div>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="swiper-slide text-center d-flex justify-content-center">
                <div className="review-item col-md-10">
                  <i className="icon icon-review" />
                  <blockquote>“WiredWave isn't just a platform; it's an immersive journey into the world of electronics, and it has undoubtedly become my preferred hub for staying ahead in the tech game!”</blockquote>
                  <div className="rating">
                    <svg className="star star-fill">
                      <use xlinkHref="#star-fill" />
                    </svg>
                    <svg className="star star-fill">
                      <use xlinkHref="#star-fill" />
                    </svg>
                    <svg className="star star-fill">
                      <use xlinkHref="#star-fill" />
                    </svg>
                    <svg className="star star-fill">
                      <use xlinkHref="#star-fill" />
                    </svg>
                    <svg className="star star-half">
                      <use xlinkHref="#star-half" />
                    </svg>
                  </div>
                  <div className="author-detail">
                    <div className="name text-dark text-uppercase pt-2">Gamal Abouhachem</div>
                  </div>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="swiper-slide text-center d-flex justify-content-center">
                <div className="review-item col-md-10">
                  <i className="icon icon-review" />
                  <blockquote>“ The seamless search functionality made finding specific products a breeze, and the detailed product pages provided all the information I needed to make informed decisions.”</blockquote>
                  <div className="rating">
                    <svg className="star star-fill">
                      <use xlinkHref="#star-fill" />
                    </svg>
                    <svg className="star star-fill">
                      <use xlinkHref="#star-fill" />
                    </svg>
                    <svg className="star star-fill">
                      <use xlinkHref="#star-fill" />
                    </svg>
                    <svg className="star star-half">
                      <use xlinkHref="#star-half" />
                    </svg>
                    <svg className="star star-empty">
                      <use xlinkHref="#star-empty" />
                    </svg>
                  </div>
                  <div className="author-detail">
                    <div className="name text-dark text-uppercase pt-2">Jennie Rose</div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          </Carousel>
        </section>
        <section id="instagram" className="padding-large overflow-hidden no-padding-top mt-5">
          <div className="container">
            <div className="row">
              <div className="display-header text-uppercase text-dark text-start pt-2 pb-3">
                <h2 className="display-7">Shop Our Insta</h2>
              </div>
              <div className="d-flex flex-wrap">
                <figure className="instagram-item pe-2">
                  <a href="https://www.instagram.com/isalmoad_49/" className="image-link position-relative">
                    <img src={insta1} alt="instagram" className="insta-image" />
                    <div className="icon-overlay position-absolute d-flex justify-content-center">
                      <svg className="instagram">
                        <use xlinkHref="#instagram" />
                      </svg>
                    </div>
                  </a>
                </figure>
                <figure className="instagram-item pe-2">
                  <a href="https://www.instagram.com/isalmoad_49/" className="image-link position-relative">
                    <img src={insta2} alt="instagram" className="insta-image" />
                    <div className="icon-overlay position-absolute d-flex justify-content-center">
                      <svg className="instagram">
                        <use xlinkHref="#instagram" />
                      </svg>
                    </div>
                  </a>
                </figure>
                <figure className="instagram-item pe-2">
                  <a href="https://www.instagram.com/isalmoad_49/" className="image-link position-relative">
                    <img src={insta3} alt="instagram" className="insta-image" />
                    <div className="icon-overlay position-absolute d-flex justify-content-center">
                      <svg className="instagram">
                        <use xlinkHref="#instagram" />
                      </svg>
                    </div>
                  </a>
                </figure>
                <figure className="instagram-item pe-2">
                  <a href="https://www.instagram.com/isalmoad_49/" className="image-link position-relative">
                    <img src={insta4} alt="instagram" className="insta-image" />
                    <div className="icon-overlay position-absolute d-flex justify-content-center">
                      <svg className="instagram">
                        <use xlinkHref="#instagram" />
                      </svg>
                    </div>
                  </a>
                </figure>
                <figure className="instagram-item pe-2">
                  <a href="https://www.instagram.com/isalmoad_49/" className="image-link position-relative">
                    <img src={insta5} alt="instagram" className="insta-image" />
                    <div className="icon-overlay position-absolute d-flex justify-content-center">
                      <svg className="instagram">
                        <use xlinkHref="#instagram" />
                      </svg>
                    </div>
                  </a>
                </figure>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
