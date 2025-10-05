import React from 'react';
import Header from '../PageHome/header';
import Footer from '../PageHome/footer'
export default function Contact() {
  return (
    <>
    <Header/>
    <div className="container-fluid py-5">
  <div className="container py-5">
    <div className="bg-light rounded p-5">
      <div className="row g-4">
        <div className="col-lg-5">
          <div className>
            <h1 className="mb-4">General Customer Care &amp; Technical Support</h1>
            <p className="mb-4">General Customer Care & Technical Support encompasses services provided to assist customers with their inquiries, concerns, and technical issues related to a product or service.</p>
            <div className="rounded">
              <iframe className="rounded w-100" style={{height: 425}} src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d887.7768627490406!2d-13.152855531538549!3d27.121425375903883!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sar!2s!4v1704656030134!5m2!1sar!2s" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>
          </div>
        </div>
        <div className="col-lg-7">
          <form action className="mb-4">
            <div className="row g-4">
              <div className="col-lg-6">
                <input type="text" className="w-100 form-control border-0 py-3" name="name" placeholder="Your Name" />
              </div>
              <div className="col-lg-6">
                <input type="email" className="w-100 form-control border-0 py-3" name="email" placeholder="Enter Your Email" />
              </div>
              <div className="col-lg-6">
                <input type="text" className="w-100 form-control border-0 py-3" name="phone" placeholder="Enter Your Phone" />
              </div>
              <div className="col-lg-6">
                <input type="text" className="w-100 form-control border-0 py-3" name="subject" placeholder="Subject" />
              </div>
              <div className="col-12">
                <textarea className="w-100 form-control border-0" rows={6} cols={10} placeholder="Your Message" defaultValue={""} />
              </div>
              <div className="col-12">
                <button className="w-100 btn btn-primary form-control py-3" type="submit">Submit Now</button>
              </div>
            </div>
          </form>
          <div className="row g-4">
            <div className="col-xl-6">
              <div className="d-flex p-4 rounded bg-white">
                <i className="fas fa-map-marker-alt fa-2x text-primary me-4" />
                <div>
                  <h4>Address</h4>
                  <p className="mb-0">25 Mars Laayoune</p>
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="d-flex p-4 rounded bg-white">
                <i className="fas fa-envelope fa-2x text-primary me-4" />
                <div>
                  <h4>Mail Us</h4>
                  <p className="mb-0">WiredWave@gmail.com</p>
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="d-flex p-4 rounded bg-white">
                <i className="fas fa-phone-alt fa-2x text-primary me-4" />
                <div>
                  <h4>Telephone</h4>
                  <p className="mb-0">(+212)640065118</p>
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="d-flex p-4 rounded bg-white">
                <i className="fa fa-share-alt fa-2x text-primary me-4" />
                <div>
                  <h4>Share</h4>
                  <div className="d-flex">
                    <a className="me-3" href><i className="fab fa-twitter text-dark link-hover" /></a>
                    <a className="me-3" href><i className="fab fa-facebook-f text-dark link-hover" /></a>
                    <a className="me-3" href><i className="fab fa-youtube text-dark link-hover" /></a>
                    <a className href><i className="fab fa-linkedin-in text-dark link-hover" /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    </div>
    <Footer/>
    </>
  )
}
