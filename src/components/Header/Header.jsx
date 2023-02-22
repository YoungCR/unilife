import React from 'react';
import './Header.css';
import { AiOutlineHeart, AiOutlineMail } from 'react-icons/ai';
import { BsHouseDoor } from 'react-icons/bs';

function Header() {
  return (
    <nav>
      <div className="nav-left">
        <BsHouseDoor className="logo" />
        <a href="./" className="logo-text">
          UniLife
        </a>
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
