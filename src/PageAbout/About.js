import React from 'react'
import Header from '../PageHome/header';
import Footer from '../PageHome/footer';
import about1 from '../asset/images/about1.jpeg'
import about2 from '../asset/images/about2.webp'
export default function About() {
    return (
        <>
        <Header />
        <div className='pt-5'>
        <div className="container pt-5">
            <div className="row">
                <div className="col-md-6 pt-3">
                    <small className="text-uppercase" style={{ color: "var(--primary-color)" }}>About us</small>
                    <h1 className="h2 mb-4" style={{ fontWeight: 600 }}>About Our <span style={{ color: 'var(--primary-color)' }}>Company</span></h1>
                    <p className="text-secondary" style={{ lineHeight: 2 }}>
                    At WiredWave, we pride ourselves on being a dynamic and innovative company dedicated to providing exceptional solutions and services. With a commitment to excellence, we harness the power of cutting-edge technologies and a passion for creativity to meet the unique needs of our clients. Our team of skilled professionals strives to deliver top-notch products and services, ensuring client satisfaction and fostering long-term partnerships. At the core of our values is a relentless pursuit of quality, innovation, and customer-centricity, making WiredWave a trusted partner in delivering success</p>
                    <a href="/" style={{ backgroundColor: 'var(--primary-color)', width: 240 }} className="btn px-4 py-3 mt-4 text-white text-center">
                        <span>Let started</span>
                    </a>
                </div>
                <div className="col-md-6 text-center pt-4">
                    <div className="row">
                        <div className="col-md-6 mb-3">
                            <img src={about1} className="w-100 rounded" alt />
                        </div>
                        <div className="col-md-6 mb-3">
                            <img src={about2} className="w-100 rounded" alt />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        <div className='pt-5'>
        <Footer/>
        </div>
        </>
    )
}
