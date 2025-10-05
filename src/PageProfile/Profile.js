import React from 'react';
import './Profiledemo.css';
import './Profilestyle.css';
import { Link } from 'react-router-dom';
import Header from '../PageProducts/Header';
import Footer from '../PageProducts/Footer';
import Laoding from './../PageProducts/laoding';
export default function Profile() {
    var login=null
    login=JSON.parse(sessionStorage.getItem('login'));
    if (login==null) {
      return window.location.href='/login';
    }
    if (!Array.isArray(login)) {
        login = [login];
    }
  return (
    login ? (<>
    <Header />
    {login.map((b,i)=>{ return <div className='pt-5 pb-3' id='body1' key={i}>
    <main className="cd__main">
  <div className="profile-page">
    <div className="content">
      <div className="content__cover">
        <div className="content__avatar" style={{background: `#8f6ed5 url(${b.image}) center center no-repeat`}}/>
        <div className="content__bull"><span /><span /><span /><span /><span />
        </div>
      </div>
      <div className="content__actions"><a href=""/></div>
      <div className="content__title">
        <h1>{b.firstName} {b.maidenName} {b.lastName}</h1><span>{b.username}</span>
      </div>
      <div className="content__description">
        <p>{b.company.title} - {b.company.department}</p>
        <p>{b.company.address.address} - {b.company.address.city} {b.company.address.postalCode} {b.company.address.state}</p>
      </div>
      <ul className="content__list">
        <li><span>{Math.floor(Math.random() * 99) + 1}</span>Friends</li>
        <li><span>{Math.floor(Math.random() * 99) + 1}</span>Products</li>
        <li><span>{Math.floor(Math.random() * 99) + 1}</span>Comments</li>
      </ul>
      <div className="content__button"><Link className="button" to="/profile/detail">
          <div className="button__border" />
          <div className="button__bg" />
          <p className="button__text text-dark">Show more</p></Link></div>
    </div>
  </div>
</main>
    </div>})}
    <Footer/>   
    </>) : <p>Laoding</p>
  )
}
