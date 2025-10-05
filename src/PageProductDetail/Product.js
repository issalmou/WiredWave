import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addToCart } from '../PageCart/CartSlice';
import Header from '../PageProducts/Header';
import { useParams } from 'react-router-dom';
import Laoding from '../PageProducts/laoding';
import './style.css';
import Reviews from './Reviews';
import Footer from '../PageProducts/Footer';
function Product_Affichage(props) {
  const dispatch = useDispatch();
  const pr = Math.floor(Math.random() * 99) + 1;
  useEffect(()=>{
    const imgContainer = document.querySelector('.img-container');
    const allHoverImages = document.querySelectorAll('.hover-container div img');
    window.addEventListener('DOMContentLoaded', () => {
      allHoverImages[0].parentElement.classList.add('active');
    });
    allHoverImages.forEach((image) => {
      image.addEventListener('mouseover', () => {
        imgContainer.querySelector('img').src = image.src;
        resetActiveImg();
        image.parentElement.classList.add('active');
      });
    });
    function resetActiveImg() {
      allHoverImages.forEach((img) => {
        img.parentElement.classList.remove('active');
      });
    }
  },[])
  return (
    <div className="product-div">
      <div className="product-div-left mt-5">
        <div className="img-container mt-5">
          <img className='img' src={props.data.product_photo} alt={props.categorie} />
        </div>
        <div className="hover-container">
          {
            props.data.product_photos.map((b, i) => <div><img className='img' src={b} alt={`${props.categorie} ${i}`} /></div>)
          }
        </div>
      </div>
      <div className="product-div-right">
        <span className="product-name">{props.data.product_title}</span>
        <span className="product-price">${props.data.product_price != null ? (Number(props.data.product_price.split('$')[1])) : props.data.product_original_price != null ? (Number(props.data.product_original_price.split('$')[1])) : pr}</span>
        <div className="product-rating">
          <span><i className="fas fa-star" /></span>
          <span><i className="fas fa-star" /></span>
          <span><i className="fas fa-star" /></span>
          <span><i className="fas fa-star" /></span>
          <span><i className="fas fa-star-half-alt" /></span>
          <span>({Math.floor(Math.random() * 99) + 1} ratings)</span>
        </div>
        {props.data.product_description != null ? <>
          <div id='product_desc'>
            <p className="product-description"><div className='h4 text-dark'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-info-circle" viewBox="0 0 16 16">
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
              <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
            </svg> Description : </div><span id='desc'>{props.data.product_description.slice(0, 300) + ". . ."}</span></p>
          </div>
          <div>
          </div>
          <a onClick={props.fonction} id='see'>see more</a></> : <div className='h5 text-danger'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-exclamation-triangle me-2" viewBox="0 0 16 16">
            <path d="M7.938 2.016A.13.13 0 0 1 8.002 2a.13.13 0 0 1 .063.016.15.15 0 0 1 .054.057l6.857 11.667c.036.06.035.124.002.183a.2.2 0 0 1-.054.06.1.1 0 0 1-.066.017H1.146a.1.1 0 0 1-.066-.017.2.2 0 0 1-.054-.06.18.18 0 0 1 .002-.183L7.884 2.073a.15.15 0 0 1 .054-.057m1.044-.45a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767z" />
            <path d="M7.002 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0M7.1 5.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0z" />
          </svg>pas de description </div>}
        <div className="btn-groups">
          <button type="button" onClick={() => {
            let item = null;
            item = { asin: props.data.asin, image: props.data.product_photo, categorie: props.categorie, title: props.data.product_title, quantity: 1, price: props.data.product_price != null ? (Number(props.data.product_price.split('$')[1])) : props.data.product_original_price != null ? (Number(props.data.product_original_price.split('$')[1])) : pr }
            dispatch(addToCart(item))
          }} className="add-cart-btn"><i className="fas fa-shopping-cart" />add to cart</button>
          <a href={props.data.product_url}><button type="button" className="buy-now-btn"><i className="fas fa-wallet" />buy now</button></a>
        </div>
      </div>
    </div>
  )
}
function Product() {
  const [dataPro, setdatapro] = useState(null);
  const { asin, categorie } = useParams();
  const [product, setproduct] = useState([]);
  const dispatch = useDispatch();
  var key = JSON.parse(sessionStorage.getItem('key'));
  var login = null
  login = JSON.parse(sessionStorage.getItem('login'));
  var array = null
  useEffect(() => {
    if (login == null) {
      return window.location.href = '/login';
    }
    const fetchData = async () => {
      try {
        const response = await axios.request({
          method: 'GET',
          url: 'https://real-time-amazon-data.p.rapidapi.com/product-details',
          params: {
            asin: asin,
            country: 'US',
          },
          headers: {
            'X-RapidAPI-Key': key,
            'X-RapidAPI-Host': 'real-time-amazon-data.p.rapidapi.com',
          },
        });
        setdatapro(response.data.data)
        sessionStorage.setItem('product', JSON.stringify(response.data.data));
      } catch (error) {
        console.error('errour', error);
      }
    };
    fetchData();
  }, []);
  array = JSON.parse(sessionStorage.getItem('product'));
  if (array != null && sessionStorage.getItem('product') != "{}") {
    if (!Array.isArray(array) || !Array.isArray(array.product_photos)) {
      array = [array];
      array.product_photos = [array.product_photos];
    }
  }
  function afficher(a) {
    var d = document.getElementById('see')
    if (d.textContent == 'see more') {
      document.getElementById('desc').textContent = a;
      d.innerText = 'see less';
    }
    else {
      document.getElementById('desc').textContent = a ? (a.slice(0, 300) + ' . . . ') : '';
      d.innerText = 'see more';
    }
  }
  return (
    array == null || sessionStorage.getItem('product') == "null"|| sessionStorage.getItem('product') == "{}" || array[0].product_title==null  ? (<Laoding />) : (
      <>
        <Header />
        <div className="main-wrapper pt-5 mb-5">
          <div className="container">
            {array.map((b, i) => (
              <Product_Affichage categorie={categorie} data={b} key={i} fonction={() => afficher(b.product_description)} />
            ))}
            <Reviews />
          </div>
        </div>
        
        <Footer/>
      </>)
  );
}

export default Product;
