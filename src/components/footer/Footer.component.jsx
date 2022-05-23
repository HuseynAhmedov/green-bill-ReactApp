import { Component } from "react";
import './Footer.style.scss'
import { Navbar, Container, Nav } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

class FooterCustom extends Component
{
    constructor(){
        super();
    }
    render(){
        return (
          <div className="container footer-container">
            <footer className="py-3">
              <ul className="nav justify-content-center pb-3 mb-3">
                <li className="nav-item">
                  <a href="#" className="nav-link px-2 ">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link px-2 ">
                    Currencies
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link px-2">
                    Work with us
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link px-2 ">
                    FAQs
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link px-2 ">
                    About
                  </a>
                </li>
              </ul>
              <p className="text-center text-copyright">Unpublished Work © 2022 Huseyn Ahmedov</p>
            </footer>
          </div>
        );
    }
}
export default FooterCustom;