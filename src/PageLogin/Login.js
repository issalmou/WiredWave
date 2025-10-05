import axios from "axios";
import logo from '../asset/images/main-logo.png'
import './main.css';
import { Component, createRef } from 'react';
var login = null
login = JSON.parse(sessionStorage.getItem('login'));
export default class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      res: [],
    }
    this.a = []
    this.email = createRef()
    this.pass = createRef()
  }
  componentDidMount() {
    if (login != null) {
      return window.location.href = '/products';
    }
    axios.get('https://dummyjson.com/users')
      .then(response => {
        this.setState({ res: response.data.users });
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }

  afficher = (e) => {
    e.preventDefault()
    this.a = this.state.res.filter((b) => b.email === this.email.current.value && b.password === this.pass.current.value)
    if (this.a.length === 1) {
      sessionStorage.setItem('login', JSON.stringify(this.a));
      sessionStorage.setItem('key', JSON.stringify('5ddb7f8ec2msh7fe18f065cd9a13p1ab471jsn74c3e3306722'));
      return window.location.href = '/products';
    }
    else {
      document.getElementById('errour').className += 'h6 ps-3 text-danger d-block'
    }
  }
  render() {
    return (
      <>
        <>
          <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
            <symbol xmlns="http://www.w3.org/2000/svg" id="navbar-icon" viewBox="0 0 16 16">
              <path d="M14 10.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 .5-.5zm0-3a.5.5 0 0 0-.5-.5h-7a.5.5 0 0 0 0 1h7a.5.5 0 0 0 .5-.5zm0-3a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0 0 1h11a.5.5 0 0 0 .5-.5z" />
            </symbol>
          </svg>
          <header id="header" className="site-header header-scrolled position-fixed text-black">
            <nav id="header-nav" className="navbar navbar-expand-lg px-3 mb-3">
              <div className="container-fluid">
                <a className="navbar-brand" href="/">
                  <img src={logo} className="logo" alt="WiredWave Logo" />
                </a>
                <button className="navbar-toggler d-flex d-lg-none order-3 p-2" type="button" data-bs-toggle="offcanvas" data-bs-target="#bdNavbar" aria-controls="bdNavbar" aria-expanded="false" aria-label="Toggle navigation">
                  <svg className="navbar-icon">
                    <use xlinkHref="#navbar-icon" />
                  </svg>
                </button>
                <div className="offcanvas offcanvas-end" tabIndex={-1} id="bdNavbar" aria-labelledby="bdNavbarOffcanvasLabel">
                  <div className="offcanvas-header px-4 pb-0">
                    <a className="navbar-brand" href="/">
                      <img src={logo} className="logo" alt="WiredWave Logo" />
                    </a>
                    <button type="button" className="btn-close btn-close-black" data-bs-dismiss="offcanvas" aria-label="Close" data-bs-target="#bdNavbar" />
                  </div>
                  <div className="offcanvas-body">
                    <ul id="navbar" className="navbar-nav text-uppercase justify-content-end align-items-center flex-grow-1 pe-3">
                      <li className="nav-item">
                        <a className="nav-link me-4" href="/">Home</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link me-4 active" href="/login">Login</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link me-4" href="/products">Products</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link me-4" href="/products">Watches</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link me-4" href="/products">Sale</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link me-4" href="#latest-blog">Blog</a>
                      </li>
                      <li className="nav-item dropdown">
                        <a className="nav-link me-4 dropdown-toggle link-dark" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Others</a>
                        <ul className="dropdown-menu">
                          <li>
                            <a href="/about" className="dropdown-item">About</a>
                          </li>
                          <li>
                            <a href="/products" className="dropdown-item">Shop</a>
                          </li>
                          <li>
                            <a href="/cart" className="dropdown-item">Cart</a>
                          </li>
                          <li>
                          </li><li>
                            <a href="/contact" className="dropdown-item">Contact</a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </nav>
          </header>
        </>
        <div class="limiter">
          <div class=" container-login100">
            <form class="login100-form validate-form" >
              <span class="login100-form-title">
                Member Login
              </span>
              <div id="errour" className="h6 ps-3 text-danger d-none">invalid email or password</div>
              <div class="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
                <input class="input100" type="text" onKeyUp={() => document.getElementById('errour').className += 'h6 ps-3 text-danger d-none'} ref={this.email} name="email" placeholder="Email" />
                <span class="focus-input100"></span>
                <span class="symbol-input100">
                  <i class="fa fa-envelope" aria-hidden="true"></i>
                </span>
              </div>

              <div class="wrap-input100 validate-input" data-validate="Password is required">
                <input class="input100" type="password" onKeyUp={() => document.getElementById('errour').className += 'h6 ps-3 text-danger d-none'} ref={this.pass} n name="pass" placeholder="Password" />
                <span class="focus-input100"></span>
                <span class="symbol-input100">
                  <i class="fa fa-lock" aria-hidden="true"></i>
                </span>
              </div>

              <div class="container-login100-form-btn">
                <button class="login100-form-btn" onClick={this.afficher}>
                  Login
                </button>
              </div>
              <div class="text-center mt-3 p-t-12">
                <span class="txt1">
                  Forgot
                </span>
                <a class="txt2 ms-2" href="#">
                  Email / Password?
                </a>
              </div>
            </form>
          </div>
        </div>
      </>);
  }
}   
