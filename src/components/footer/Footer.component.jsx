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
          <div class="container footer-container">
            <footer class="py-3 my-4">
              <ul class="nav justify-content-center pb-3 mb-3">
                <li class="nav-item">
                  <a href="#" class="nav-link px-2 ">
                    Home
                  </a>
                </li>
                <li class="nav-item">
                  <a href="#" class="nav-link px-2 ">
                  Currencies
                  </a>
                </li>
                <li class="nav-item">
                  <a href="#" class="nav-link px-2">
                    Work with us
                  </a>
                </li>
                <li class="nav-item">
                  <a href="#" class="nav-link px-2 ">
                    FAQs
                  </a>
                </li>
                <li class="nav-item">
                  <a href="#" class="nav-link px-2 ">
                    About
                  </a>
                </li>
              </ul>
              <p class="text-center text-copyright">Unpublished Work © 2022 Huseyn Ahmedov</p>
            </footer>
          </div>
        );
    }
}
export default FooterCustom;