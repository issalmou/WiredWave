import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Section } from './Section'
import Laoding from './laoding';
export default function Products() {
    var login=null
    login=JSON.parse(sessionStorage.getItem('login'));
    if (login==null) {
      return window.location.href='/login';
    }
  return <>
  <Header/>
  <Section/>
  <Footer/>
  </>
}
