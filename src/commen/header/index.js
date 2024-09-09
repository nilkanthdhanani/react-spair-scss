import React from 'react'
import './header.scss';
// import {logo, close, menu} from '../../assets/images/png';

export default function Header() {
  return (
    <header>
      <div className="logo">
        {/* <img src={logo} alt="Logo" /> */}
      </div>
      <nav>
        {/* <img src={menu} alt="Menu" /> */}
        {/* <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact</a></li>
        </ul> */}
      </nav>
      <div className="social-media">
        {/* <img src={facebook} alt="Facebook" />
        <img src={instagram} alt="Instagram" />
        <img src={twitter} alt="Twitter" />
        <img src={message} alt="Message" /> */}
      </div>
    </header>
  )
}
