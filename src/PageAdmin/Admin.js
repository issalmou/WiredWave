import React from 'react'
import './Admin.css';
import admin from '../asset/images/admin/isalmou.jpg'
import pic from '../asset/images/home.png'
export default function Admin() {
  return (
    <div className="body_admin">
  {/* ******HEADER****** */} 
  <header className="header">
    <div className="container" id='container1'>     
      <div className="row align-items-center">
        <div className="col">         
          <img className="profile-image img-fluid float-start rounded-circle" width={'200px'} height={'200px'} src={admin} alt="profile image" />
          <div className="profile-content">
            <h1 className="name">Issalmou Adaaiche</h1>
            <h2 className="desc">Full Stack Developer</h2>   
            <ul className="social list-inline">
              <li className="list-inline-item"><a href="https://www.facebook.com/isalmo.idaaiche?mibextid=zbwkwl"><i className="fab fa-facebook" /></a></li>
              <li className="list-inline-item"><a href="https://www.instagram.com/isalmoad_49/"><i className="fab fa-instagram" /></a></li>
              <li className="list-inline-item"><a href="https://www.linkedin.com/in/issalmou-adaaiche-1390bb281"><i className="fab fa-linkedin-in" /></a></li>   
              <li className="list-inline-item"><a href="https://github.com/issalmou"><i className="fab fa-github-alt" /></a></li>
              <li className="list-inline-item last-item"><a href="https://twitter.com/IsalmoI"><i className="fab fa-twitter" /></a></li>                
            </ul> 
          </div>
        </div>
        <div className="col-12 col-md-auto">
          <a className="btn btn-cta-primary" href="mailto:issalmouadaaiche@gmail.com" target="_blank"><i className="fas fa-paper-plane" /> Contact Me</a>        
        </div>
      </div>        
    </div>
  </header>
  <div className="container sections-wrapper py-5" id='container2'>
    <div className="row">
      <div className="primary col-lg-8 col-12">
        <section className="about section">
          <div className="section-inner shadow-sm rounded">
            <h2 className="heading">About Me</h2>
            <div className="content">
              <p>My name is Issalmou Adaaiche, I am 20 years old and I am an ambitious anddetermined young man. I obtained my bachelor's degree in physical
                sciences and I am currently in the process of specializing as a Specialized
                Technician in Computer Development.</p>
            </div>
          </div>             
        </section>
        <section className="latest section">
          <div className="section-inner shadow-sm rounded">
            <h2 className="heading">Latest Projects</h2>
            <div className="content">    
              <div className="item featured text-center">
                <div className="featured-image has-ribbon">
                  <a href="/">
                    <img className="img-fluid project-image rounded shadow-sm" src={pic} alt="project name" />
                  </a>
                  <div className="ribbon">
                    <div className="text">New</div>
                  </div>
                </div>
                <h3 className="title mb-3"><a href="/">Store WiredWave</a></h3>
                <div className="desc text-start">                                    
                  <p>Welcome to WiredWave, your one-stop destination for cutting-edge technology and unparalleled audio experiences. At WiredWave, we believe in the power of innovation and strive to bring you the latest and most advanced gadgets and audio devices. Explore our curated collection of premium headphones, smart speakers, and innovative tech accessories that seamlessly blend style with functionality. Whether you're an audiophile, a tech enthusiast, or someone looking for the perfect gift, WiredWave is here to elevate your audio journey. Immerse yourself in a world of unparalleled sound quality and stay ahead in the ever-evolving realm of technology. Discover, experience, and embrace the future at WiredWave.</p>
                </div>       
                <a className="btn btn-cta-secondary" href="/"><i className="fas fa-thumbs-up" /> Back my project</a>                 
              </div>
            </div> 
          </div>           
        </section>
      </div>
      <div className="secondary col-lg-4 col-12">
        <aside className="info aside section">
          <div className="section-inner shadow-sm rounded">
            <h2 className="heading sr-only">Basic Information</h2>
            <div className="content">
              <ul className="list-unstyled">
                <li><i className="fas fa-map-marker-alt me-2" /><span className="sr-only">Location:</span>Laayoune, Morocco</li>
                <li><i className="fas fa-envelope me-2" /><span className="sr-only">Email:</span><a href="mailto:issalmouadaaiche@gmail.com">issalmouadaaiche@gmail.com</a></li>
                <li><i className="fas fa-link me-2" /><span className="sr-only">Tell:</span>(+212)640065118</li>
              </ul>
            </div>
          </div>            
        </aside>       
        <aside className="skills aside section">
          <div className="section-inner shadow-sm rounded">
            <h2 className="heading">Skills</h2>
            <div className="content">
              <div className="skillset">
                <div className="item">
                  <h3 className="level-title">HTML5 &amp; CSS3<span className="level-label" data-bs-toggle="tooltip" data-bs-placement="left" title="Contact me bro..."><i className="fas fa-info-circle" />Expert</span></h3>
                  <div className="level-bar progress">
                    <div className="progress-bar level-bar-inner" role="progressbar" style={{width: '96%'}} aria-valuenow={96} aria-valuemin={0} aria-valuemax={96} />
                  </div>                             
                </div>
                <div className="item">
                  <h3 className="level-title">Python &amp; Php &amp; C <span className="level-label" data-bs-toggle="tooltip" data-bs-placement="left" title="Contact me bro..."><i className="fas fa-info-circle" />Expert</span></h3>
                  <div className="level-bar progress">
                    <div className="progress-bar level-bar-inner" role="progressbar" style={{width: '94%'}} aria-valuenow={94} aria-valuemin={0} aria-valuemax={94} />
                  </div>                                   
                </div>
                <div className="item">
                  <h3 className="level-title">Javascript &amp; jQuery<span className="level-label" data-bs-toggle="tooltip" data-bs-placement="left" title="Contact me bro..."><i className="fas fa-info-circle" />Expert</span></h3>
                  <div className="level-bar progress">
                    <div className="progress-bar level-bar-inner" role="progressbar" style={{width: '93%'}} aria-valuenow={93} aria-valuemin={0} aria-valuemax={96} />
                  </div>                                 
                </div>
                <p><a className="more-link" href="https://github.com/issalmou"><i className="fas fa-external-link-alt me-1" />More on GitHub</a></p> 
              </div>              
            </div> 
          </div>                
        </aside>
        <aside className="education aside section">
          <div className="section-inner shadow-sm rounded">
            <h2 className="heading">Education</h2>
            <div className="content">
              <div className="item">                      
                <h3 className="title"><i className="fas fa-graduation-cap" /> TS Digital Development</h3>
                <h4 className="university">CMC Laaayoune <span className="year">(2022-2024)</span></h4>
              </div>
              <div className="item">
                <h3 className="title"><i className="fas fa-graduation-cap" /> BAC Physical Sciences</h3>
                <h4 className="university">High School January 11 <span className="year">(2021)</span></h4>
              </div>
            </div>
          </div>
        </aside>                        
        <aside className="languages aside section">
          <div className="section-inner shadow-sm rounded">
            <h2 className="heading">Languages</h2>
            <div className="content">
              <ul className="list-unstyled">
                <li className="item">
                  <span className="title"><strong>Arabic:</strong></span>
                  <span className="level">Native Speaker <br className="visible-xs" /><i className="fas fa-star" /> <i className="fas fa-star" /> <i className="fas fa-star" /> <i className="fas fa-star" /> <i className="fas fa-star" /> </span>
                </li>
                <li className="item">
                  <span className="title"><strong>English:</strong></span>
                  <span className="level">Professional Proficiency <br className="visible-sm visible-xs" /><i className="fas fa-star" /> <i className="fas fa-star" /> <i className="fas fa-star" /> <i className="fas fa-star-half" /></span>
                </li>
                <li className="item">
                  <span className="title"><strong>French:</strong></span>
                  <span className="level">Professional Proficiency <br className="visible-sm visible-xs" /><i className="fas fa-star" /> <i className="fas fa-star" /> <i className="fas fa-star" /> <i className="fas fa-star-half" /></span>
                </li>
              </ul>
            </div>
          </div>
        </aside>
      </div>    
    </div>
  </div>
</div>

  )
}
