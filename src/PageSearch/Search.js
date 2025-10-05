import React, { useEffect, useState } from 'react'
import Header from '../PageProducts/Header'
import { Link, useParams } from 'react-router-dom';
import Laoding from '../PageProducts/laoding';
import Footer from '../PageProducts/Footer';
import insta1 from '../asset/images/insta-item1.jpg';
import insta2 from '../asset/images/insta-item2.jpg';
import insta3 from '../asset/images/insta-item3.jpg';
import insta4 from '../asset/images/insta-item4.jpg';
import insta5 from '../asset/images/insta-item5.jpg';
import '../PageProducts/Products.css';
import axios from "axios";
import 'swiper/css';
import Swiper from 'swiper/bundle';
function SearchAfficher(props) {
    return (
        <div className="swiper-slide bg-light">
            <div className="product-card position-relative">
                <div className="image-holder">
                    <img src={props.data.product_photo} alt={props.data.product_title} className="img-fluid" />
                </div>
                <div className="cart-concern position-absolute">
                    <div className="cart-button d-flex">
                        <Link to={"/product/" + props.data.asin} className="btn btn-medium btn-black">Read more <svg className="cart-outline"><use xlinkHref="#cart-outline" /></svg></Link>
                    </div>
                </div>
                <div className="card-detail d-flex justify-content-between align-items-baseline pt-3 " style={{ Padding: 0 }}>
                    <h3 className="card-title text-uppercase">
                        <Link to={"/product/laptop/" + props.data.asin} className='pb-0'>{props.data.product_title.slice(0, 20)} . . .</Link>
                    </h3>
                    <span className="item-price text-primary pb-0">{props.data.product_price}</span>
                </div>
            </div>
        </div>
    )
}
export default function Search() {
    const [dataSearch, setDataSearch] = useState(null);
    var key=JSON.parse(sessionStorage.getItem('key'));
    var { search, categorie } = useParams();
    sessionStorage.setItem('product', null);
    const processedSearch = search.includes("_") ? search.split('_')[0] + ' ' + search.split('_')[1] : search
    const processedCategorie = categorie === undefined ? undefined : categorie.split('_')[0] + ' ' + categorie.split('_')[1]
    useEffect(() => {
        const fetchDataSearch = async () => {
            const options = {
                method: 'GET',
                url: 'https://real-time-amazon-data.p.rapidapi.com/search',
                params: {
                    query: processedSearch,
                    page: '1',
                    country: 'US',
                    category_id: processedCategorie
                },
                headers: {
                    'X-RapidAPI-Key': key,
                    'X-RapidAPI-Host': 'real-time-amazon-data.p.rapidapi.com'
                }
            };
            try {
                const response = await axios.request(options);
                setDataSearch(response.data.data)
            } catch (error) {
                console.error(error);
            }
        };
        fetchDataSearch();
        // Initialize Swiper
        const initSwiper = () => {
            new Swiper(".all-product-swiper", {
                slidesPerView: 4,
                spaceBetween: 10,
                pagination: {
                    el: "#all-products .swiper-pagination",
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

        // Initialize swiper after data is loaded
        if (dataSearch) {
            setTimeout(initSwiper, 100);
        }
    }, [processedSearch, processedCategorie, dataSearch])
    return  (
        <>
            <Header />
            <section id="all-products" className="product-store position-relative padding-large ">
                <div className="container">
                    <div className="row">
                        <div className="display-header d-flex justify-content-between pb-3">
                            <h2 className="display-7 text-dark text-uppercase">All Products</h2>
                        </div>
                        <div className="swiper all-product-swiper">
                            <div className="swiper-wrapper">
                                {dataSearch ?(dataSearch.products.map((b, i) => { return <SearchAfficher data={b} key={i} /> })): <Laoding />}
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
            <Footer />
        </>
    )
}
