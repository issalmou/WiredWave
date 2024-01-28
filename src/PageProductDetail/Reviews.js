import React, { useEffect, useState } from 'react'
import './Review.css'
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
function Afficher_reviews(props) {
    var items = [];
    for (let i = 1; i <= Number(props.data.review_star_rating); i++) {
        items.push(<span><i className="fa fa-star" /></span>);
    }
    if (items.length < 5) {
        for (let i = 1; i <= 5 - Number(props.data.review_star_rating); i++) {
            items.push(<span><i className="fa fa-star-o" /></span>);
        }
    }
    if (props.cont == 0) {
        return (<div className='reviews-members pt-4 pb-4'>
            <div className='media row'>
                <a href='#' className='col-md-1'><img alt='Generic placeholder image' src={props.data.review_author_avatar} className='mr-3 rounded-pill' id='imgRV' /></a>
                <div className='media-body col-md-11 mt-2'>
                    <div className='reviews-members-header'>
                        <h6 className="mb-1" ><a className='text-black' href='#'>{props.data.review_author}</a></h6>
                        <p className='text-dark'>{props.data.review_date}</p>
                        {items}
                    </div>
                    <div className='reviews-members-body mt-3'>
                        <div className='h5'>{props.data.review_title}</div>
                        <p className='comments'>{props.data.review_comment ? props.data.review_comment.length>300 ? (props.data.review_comment.slice(0, 300) + ' . . . '):(props.data.review_comment.slice(0, 300)) : ''}</p>
                        {props.data.review_comment ? (<Link onClick={props.fonction} className='seeC'>see more</Link>): ''}
                    </div>
                </div>
            </div>
        </div>)
    }
    else {
        return (<div className="reviews-members pt-4 pb-4 affiche_hidden d-none">
            <div className="media row">
                <a href="#" className='col-md-1'><img alt="Generic placeholder image" src={props.data.review_author_avatar} className="mr-3 rounded-pill" id='imgRV' /></a>
                <div className="media-body col-md-11 mt-2">
                    <div className="reviews-members-header">
                        <h6 className="mb-1" ><a className="text-black" href="#">{props.data.review_author}</a></h6>
                        <p className="text-dark">{props.data.review_date}</p>
                        {items}
                    </div>
                    <div className="reviews-members-body mt-3">
                        <div className='h5'>{props.data.review_title}</div>
                        <p className='comments'>{props.data.review_comment ? props.data.review_comment.length>300 ? (props.data.review_comment.slice(0, 300) + ' . . . '):(props.data.review_comment.slice(0, 300)) : ''}</p>
                        {props.data.review_comment ? (<Link onClick={props.fonction} className='seeC'>see more</Link>): ''}
                    </div>
                </div>
            </div>
        </div>)
    }
}
export default function Reviews() {
    const { asin } = useParams();
    const [reviews,setreviews]=useState(null);
    var key=JSON.parse(sessionStorage.getItem('key'));
    useEffect(() => {
        const fetchDataReview = async () => {
          const options = {
            method: 'GET',
            url: 'https://real-time-amazon-data.p.rapidapi.com/product-reviews',
            params: {
              asin: asin,
              country: 'US',
              verified_purchases_only: 'false',
              images_or_videos_only: 'false',
              current_format_only: 'false',
              page: '1'
            },
            headers: {
              'X-RapidAPI-Key': key,
              'X-RapidAPI-Host': 'real-time-amazon-data.p.rapidapi.com'
            }
          };
          try {
            const response = await axios.request(options);
            setreviews(response.data.data)
          } catch (error) {
            console.error(error);
          }
        };
        fetchDataReview();
    }, []);
    function afficher_desc(a, i) {
        var d = document.getElementsByClassName('seeC')[i]
        if (d.textContent == 'see more') {
            document.getElementsByClassName('comments')[i].textContent = a;
            d.innerText = 'see less';
        }
        else {
            document.getElementsByClassName('comments')[i].textContent = a ? (a.slice(0, 300) + ' . . . ') : '';
            d.innerText = 'see more';
        }
    }
    function afficher_comments() {
        var d = document.getElementById('see_review')
        if (d.textContent == 'See All Reviews') {
            for (let i = 0; i < reviews.reviews.length - 1; i++) {
                document.getElementsByClassName('affiche_hidden')[i].classList.replace('d-none', 'd-block');
            }
            d.textContent = 'Hide Reviews';
        }
        else {
            for (let i = 0; i < reviews.reviews.length - 1; i++) {
                document.getElementsByClassName('affiche_hidden')[i].classList.replace('d-block', 'd-none');
            }
            d.textContent = 'See All Reviews';
        }

    }
    return reviews !=null ? (
        <div className="container" id='container'>
            <div className="col-md-12">
                <div className="offer-dedicated-body-left">
                    <div className="tab-content" id="pills-tabContent">
                        <div className="tab-pane fade show active" id="pills-reviews" role="tabpanel" aria-labelledby="pills-reviews-tab">
                            <div className="bg-white rounded shadow p-4 mb-4 restaurant-detailed-ratings-and-reviews">
                                <a href="#" className="btn btn-outline btn-sm float-end" id='btnT'>Top Rated</a>
                                <h3 className="mb-1">All Ratings and Reviews <span className='h6'>({reviews.reviews.length})</span></h3>
                                {reviews.reviews.map((b, i) => <Afficher_reviews fonction={()=>afficher_desc(b.review_comment,i)} cont={i} data={b} key={i} />)}
                                <hr />
                                <a className="text-center w-100 d-block mt-4 font-weight-bold" href="#btnT" id='see_review' onClick={afficher_comments}>See All Reviews</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ) : ''
}
