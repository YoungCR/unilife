import React from 'react';
import './Header.css';
import { AiOutlineHeart, AiOutlineMail } from 'react-icons/ai';
import logo from '../../assets/logo.png';
import logoText from '../../assets/unilife.png';

function Header() {
  return (
    <nav>
      <div className="nav-left">
        <img src={logo} alt="UniLife Logo" />
        <img src={logoText} alt="UniLife Text" />
      </div>
      <div className="nav-right">
        <div className="link-container">
          <AiOutlineHeart />
          <a href="">Shortlist</a>
        </div>
        <div className="link-container">
          <AiOutlineMail />
          <a href="">Contact Us</a>
        </div>
      </div>
    </nav>
  );
}

export default Header;
