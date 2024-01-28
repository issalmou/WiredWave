import React from 'react'
import './User.css'
import Header from '../PageProducts/Header'
import Footer from '../PageProducts/Footer';
export default function DetailUser() {
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
        <Header/>
        {login.map((b,i)=>{ return <div id='body2' className='pt-5' key={i}>
        <div className="container pt-5 mb-4">
            <div className="main-body">
                <div className="row gutters-sm">
                    <div className="col-md-4 mb-3">
                        <div className="card">
                            <div className="card-body">
                                <div className="d-flex flex-column align-items-center text-center">
                                    <img src={b.image} alt="Admin" id='img1' className="rounded-circle" width={150} />
                                    <div className="mt-3">
                                        <h4 className='mb-1'>{b.username}</h4>
                                        <p className="text-secondary mb-1">{b.company.name} - {b.company.department}</p>
                                        <p className="text-muted font-size-sm">{b.company.address.address} - {b.company.address.city} {b.company.address.postalCode} {b.company.address.state}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="card mb-3">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-sm-3">
                                        <h6 className="mb-0">Full Name</h6>
                                    </div>
                                    <div className="col-sm-9 test1 text-secondary">
                                    {b.firstName} {b.maidenName} {b.lastName}
                                    </div>
                                </div>
                                <hr />
                                <div className="row">
                                    <div className="col-sm-3">
                                        <h6 className="mb-0">Email</h6>
                                    </div>
                                    <div className="col-sm-9 test1 text-secondary">
                                        <a href="/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="71171801311b041a1c04195f101d">{b.email}</a>
                                    </div>
                                </div>
                                <hr />
                                <div className="row">
                                    <div className="col-sm-3">
                                        <h6 className="mb-0">Phone</h6>
                                    </div>
                                    <div className="col-sm-9 test1 text-secondary">
                                        {b.phone}
                                    </div>
                                </div>
                                <hr />
                                <div className="row">
                                    <div className="col-sm-3">
                                        <h6 className="mb-0">Birthdate</h6>
                                    </div>
                                    <div className="col-sm-9 test1 text-secondary">
                                        {b.birthDate}
                                    </div>
                                </div>
                                <hr />
                                <div className="row mb-2">
                                    <div className="col-sm-3 pb-1">
                                        <h6 className=" ">Address</h6>
                                    </div>
                                    <div className="col-sm-9 pb-1 test1 text-secondary">
                                        {b.address.address},{b.address.city} {b.address.postalCode} {b.address.state}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
        })}
       <Footer /> 
    </>
    ) : <p>laoding</p>
    )
}
