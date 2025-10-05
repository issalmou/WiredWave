import React, { useEffect, useState } from 'react'
import './Products.css'
import axios from "axios";
import 'swiper/css';
import Swiper from 'swiper/bundle';
import bill1 from '../asset/images/banner-image.png'
import bill2 from '../asset/images/pc.png'
import bill3 from '../asset/images/uniter.png'
import bill4 from '../asset/images/phone.png'
import insta1 from '../asset/images/insta-item1.jpg';
import insta2 from '../asset/images/insta-item2.jpg';
import insta3 from '../asset/images/insta-item3.jpg';
import insta4 from '../asset/images/insta-item4.jpg';
import insta5 from '../asset/images/insta-item5.jpg';
import Carousel from 'react-bootstrap/Carousel';
import Laoding from './laoding';
function Phone(props) {
  return (
    <div className="swiper-slide bg-light">
      <div className="product-card position-relative">
        <div className="image-holder">
          <img src={props.data.product_photo} alt={props.data.product_title} width={'200px'} className="img-fluid" />
        </div>
        <div className="cart-concern position-absolute">
          <div className="cart-button d-flex">
            <a href={"/product/phone/" + props.data.asin} className="btn btn-medium btn-black">Read more <svg className="cart-outline"><use xlinkHref="#cart-outline" /></svg></a>
          </div>
        </div>
        <div className="card-detail d-flex justify-content-between align-items-baseline pt-3 " style={{ Padding: 0 }}>
          <h3 className="card-title text-uppercase">
            <a href={"/product/phone/" + props.data.asin} className='pb-0'>{props.data.product_title.slice(0, 20)} . . .</a>
          </h3>
          <span className="item-price text-primary pb-0">{props.data.product_price}</span>
        </div>
      </div>
    </div>
  )
}
function Laptop(props) {
  return (
    <div className="swiper-slide bg-light">
      <div className="product-card position-relative">
        <div className="image-holder">
          <img src={props.data.product_photo} alt={props.data.product_title} className="img-fluid" />
        </div>
        <div className="cart-concern position-absolute">
          <div className="cart-button d-flex">
            <a href={"/product/laptop/" + props.data.asin} className="btn btn-medium btn-black">Read more <svg className="cart-outline"><use xlinkHref="#cart-outline" /></svg></a>
          </div>
        </div>
        <div className="card-detail d-flex justify-content-between align-items-baseline pt-3 " style={{ Padding: 0 }}>
          <h3 className="card-title text-uppercase">
            <a href={"/product/laptop/" + props.data.asin} className='pb-0'>{props.data.product_title.slice(0, 20)} . . .</a>
          </h3>
          <span className="item-price text-primary pb-0">{props.data.product_price}</span>
        </div>
      </div>
    </div>
  )
}
function Smart(props) {
  return (
    <div className="swiper-slide bg-light">
      <div className="product-card position-relative">
        <div className="image-holder">
          <img src={props.data.product_photo} alt={props.data.product_title} width={'250px'} className="img-fluid" />
        </div>
        <div className="cart-concern position-absolute">
          <div className="cart-button d-flex">
            <a href={"/product/smartwatch/" + props.data.asin} className="btn btn-medium btn-black">Read more <svg className="cart-outline"><use xlinkHref="#cart-outline" /></svg></a>
          </div>
        </div>
        <div className="card-detail d-flex justify-content-between align-items-baseline pt-3 " style={{ Padding: 0 }}>
          <h3 className="card-title text-uppercase">
            <a href={"/product/smartwatch/" + props.data.asin} className='pb-0'>{props.data.product_title.slice(0, 20)} . . .</a>
          </h3>
          <span className="item-price text-primary pb-0">{props.data.product_price}</span>
        </div>
      </div>
    </div>
  )
}
function Section() {
  const [dataLaptop, setDatalaptop] = useState(null);
  const [dataPhone, setDataphone] = useState(null);
  const [dataWatches, setDatawatches] = useState(null);
  var key=JSON.parse(sessionStorage.getItem('key'));
  sessionStorage.setItem('product', null);
  useEffect(() => {
    const fetchDatalaptops = async () => {
      const options = {
        method: 'GET',
        url: 'https://real-time-amazon-data.p.rapidapi.com/search',
        params: {
          query: 'laptops',
          page: '1',
          country: 'US',
          category_id: 'aps'
        },
        headers: {
          'X-RapidAPI-Key': key,
          'X-RapidAPI-Host': 'real-time-amazon-data.p.rapidapi.com'
        }
      };
      try {
        const response = await axios.request(options);
        setDatalaptop(response.data.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchDatalaptops();
    const fetchDataphone = async () => {
      const options = {
        method: 'GET',
        url: 'https://real-time-amazon-data.p.rapidapi.com/search',
        params: {
          query: 'iphone',
          page: '1',
          country: 'US',
          category_id: 'aps'
        },
        headers: {
          'X-RapidAPI-Key': key,
          'X-RapidAPI-Host': 'real-time-amazon-data.p.rapidapi.com'
        }
      };
      try {
        const response = await axios.request(options);
        setDataphone(response.data.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchDataphone();
    const fetchDatawatches = async () => {
      const options = {
        method: 'GET',
        url: 'https://real-time-amazon-data.p.rapidapi.com/search',
        params: {
          query: 'smart watches',
          page: '1',
          country: 'US',
          category_id: 'aps'
        },
        headers: {
          'X-RapidAPI-Key': key,
          'X-RapidAPI-Host': 'real-time-amazon-data.p.rapidapi.com'
        }
      };
      try {
        const response = await axios.request(options);
        setDatawatches(response.data.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchDatawatches();
    // Initialize Swiper instances
    const initSwipers = () => {
      new Swiper(".product-swiper", {
        slidesPerView: 4,
        spaceBetween: 10,
        pagination: {
          el: "#mobile-products .swiper-pagination",
          clickable: true,
        },
        breakpoints: {
          0: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          980: {
            slidesPerView: 4,
            spaceBetween: 20,
          }
        },
      });
      
      new Swiper(".product-laptops-swiper", {
        slidesPerView: 4,
        spaceBetween: 10,
        pagination: {
          el: "#laptops-products .swiper-pagination",
          clickable: true,
        },
        breakpoints: {
          0: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          980: {
            slidesPerView: 4,
            spaceBetween: 20,
          }
        },
      });
      
      new Swiper(".product-watch-swiper", {
        slidesPerView: 4,
        spaceBetween: 10,
        pagination: {
          el: "#smart-watches .swiper-pagination",
          clickable: true,
        },
        breakpoints: {
          0: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          980: {
            slidesPerView: 4,
            spaceBetween: 20,
          }
        },
      });
    };

    // Initialize swipers after data is loaded
    if (dataPhone && dataLaptop && dataWatches) {
      setTimeout(initSwipers, 100);
    }
  }, [dataPhone, dataLaptop, dataWatches]);
  return (
    <>
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
                      <img src={bill2} alt="Technology banner" />
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
                      <img src={bill1} alt="Electronics banner" />
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
                      <img src={bill3} alt="WiredWave banner" />
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
                      <img src={bill4} alt="Products banner" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </section>
      <section id="mobile-products" className="product-store position-relative padding-large ">
        <div className="container">
          <div className="row">
            <div className="display-header d-flex justify-content-between pb-3">
              <h2 className="display-7 text-dark text-uppercase">Mobile Products</h2>
              <div className="btn-right">
                <a href="shop.html" className="btn btn-medium btn-normal text-uppercase">Go to Shop</a>
              </div>
            </div>
            <div className="swiper product-swiper">
              <div className="swiper-wrapper">
                {dataPhone ? (dataPhone.products.map((b, i) => { return <Phone data={b} key={i} /> })) : <Laoding />}
              </div>
            </div>
          </div>
        </div>
        <div className="swiper-pagination position-absolute text-center" />
      </section>
      <section id="laptops-products" className="product-store position-relative padding-large ">
        <div className="container">
          <div className="row">
            <div className="display-header d-flex justify-content-between pb-3">
              <h2 className="display-7 text-dark text-uppercase">laptops Products</h2>
              <div className="btn-right">
                <a href="shop.html" className="btn btn-medium btn-normal text-uppercase">Go to Shop</a>
              </div>
            </div>
            <div className="swiper product-laptops-swiper">
              <div className="swiper-wrapper">
                {dataLaptop ? (dataLaptop.products.map((b, i) => { return <Laptop data={b} key={i} /> })) : <Laoding />}
              </div>
            </div>
          </div>
        </div>
        <div className="swiper-pagination position-absolute text-center" />
      </section>
      <section id="smart-watches" className="product-store padding-large position-relative">
        <div className="container">
          <div className="row">
            <div className="display-header d-flex justify-content-between pb-3">
              <h2 className="display-7 text-dark text-uppercase">Smart Watches</h2>
              <div className="btn-right">
                <a href="shop.html" className="btn btn-medium btn-normal text-uppercase">Go to Shop</a>
              </div>
            </div>
            <div className="swiper product-watch-swiper">
              <div className="swiper-wrapper">
                {dataWatches ? (dataWatches.products.map((b, i) => { return <Smart data={b} key={i} /> })) : <Laoding />}
              </div>
            </div>
          </div>
        </div>
        <div className="swiper-pagination position-absolute text-center" />
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
    </>)
}
export { Section }