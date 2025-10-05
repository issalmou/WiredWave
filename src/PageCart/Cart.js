import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decreQ, increQ, remove } from './CartSlice'
import './cart.css'
import { Link } from 'react-router-dom'
import Header from '../PageProducts/Header'
import Footer from '../PageProducts/Footer'
function Productscart(props) {
    return (
        <div className="row mb-4 d-flex justify-content-between align-items-center">
        <div className="col-md-2 col-lg-2 col-xl-2">
          <img src={props.data.image} className="img-fluid rounded-3" alt={props.data.categorie} />
        </div>
        <div className="col-md-3 col-lg-3 col-xl-3">
          <h6 className="text-muted">{props.data.categorie}</h6>
          <h6 className="text-black mb-0">{props.data.title.slice(0,50)} . . . </h6>
        </div>
        <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
          <button className="btn btn-link px-2 btn-outline-none" onClick={props.fonction1}>
            <i className="fas fa-minus test1" />
          </button>
          <span className='pt-2 pe-2' >{props.data.quantity}</span>
          <button className="btn btn-link px-2" onClick={props.fonction2}>
            <i className="fas fa-plus test1" />
          </button>
        </div>
        <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
          <h6 className="mb-0">${props.data.price}</h6>
        </div>
        <div className="col-md-1 col-lg-1 col-xl-1 text-end">
        <button className="btn btn-link px-2 btn-outline-none" onClick={props.fonction3}>
              <i className="fas fa-times test1" />
          </button>
        </div>
      </div>
    )
}
export default function Cart() {
    const {cartItems}= useSelector(state => state.cart)
    const dispatch=useDispatch()
    const [tot,settot]=useState(0)
    const promocode=['ISSALMOU','FAR11','CMCLAAYOUNE']
    function afficher(){
        let promo=null
        let del=null
        promo=document.getElementById('promo').value.toUpperCase()
        del=document.getElementById('del').value
        if (promocode.find((b)=>b==promo)) {
            settot(Number(del)+cartItems.reduce((acc,item) => acc += item.price * item.quantity,0)-cartItems.reduce((acc,item) => acc += item.price * item.quantity,0)*0.3)
        }
        else{
            settot(Number(del)+cartItems.reduce((acc,item) => acc += item.price * item.quantity,0))
        }
    }
    return ( 
      <>
        <Header/>
        <section className="h-100 h-custom pt-5 mb-5">
  <div className="container py-5  h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-12">
        <div className="card card-registration card-registration-2" style={{borderRadius: 15}}>
          <div className="card-body p-0">
            <div className="row g-0">
              <div className="col-lg-8">
                <div className="p-5">
                  <div className="d-flex justify-content-between align-items-center mb-5">
                    <h1 className="fw-bold mb-0 text-black">Shopping Cart</h1>
                    <h6 className="mb-0 text-muted">{cartItems.length} items</h6>
                  </div>
                  <hr className="my-4" />
                  {cartItems.map((b,i)=><Productscart data={b} key={i} fonction2={()=>dispatch(increQ(b))} fonction1={()=>dispatch(decreQ(b))} fonction3={()=>dispatch(remove(b))} />)}
                  <hr className="my-4" />
                  <div className="pt-5">
                    <h6 className="mb-0"><Link to="/products" className="text-body"><i className="fas fa-long-arrow-alt-left me-2" />Back to shop</Link></h6>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 bg-grey">
                <div className="p-5">
                  <h3 className="fw-bold mb-5 mt-2 pt-1">Summary</h3>
                  <hr className="my-4" />
                  <div className="d-flex justify-content-between mb-4">
                    <h5 className="text-uppercase">items {cartItems.length} </h5>
                    <h5>$
                        {
                            cartItems.reduce((acc,item) => acc += item.price * item.quantity,0)
                        }
                    </h5>
                  </div>
                  <h5 className="text-uppercase mb-3">Shipping</h5>
                  <div className="mb-4 pb-2">
                    <select className="select" id='del'>
                      <option value={10}>Standard-Delivery- $10.00</option>
                      <option value={20}>Express-Delivery- $20.00</option>
                      <option value={30}>International-Shipping $30.00</option>
                    </select>
                  </div>
                  <h5 className="text-uppercase mb-3">Give code</h5>
                  <div className="mb-5">
                    <div className="form-outline">
                      <input type="text" id="promo" className="form-control form-control-lg" />
                      <label className="form-label" htmlFor="promo">Enter your code</label>
                    </div>
                  </div>
                  <hr className="my-4" />
                  <div className="d-flex justify-content-between mb-5">
                    <h5 className="text-uppercase">Total price </h5>
                    <h5>
                    $
                      {
                        tot
                      }
                    </h5>
                  </div>
                  <button type="button" id='btn' className="btn btn-block btn-lg" data-mdb-ripple-color="dark"
                  onClick={afficher}><i className="fa fa-bookmark me-1"></i> Register</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
        </section>
        <Footer/>
      </>
    )
}
