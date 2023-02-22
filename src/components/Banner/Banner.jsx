import React from 'react';
import './Banner.css';
import bannerImg from '../../assets/cover-img.png';

function Banner() {
  //   const bannerStyle = {
  //     // height: '60vh',
  //     // width: '100%',
  //     background,
  //     backgroundRepeat: 'no-repeat',
  //     backgroundSize: 'cover',
  //     backgroundPosition: 'center',
  //     // position: 'relative',
  //   };

  return (
    <div className="banner">
      <div className="banner-text">
        <h1>Find student homes with bills included</h1>
        <p>A simple and faster way to search for student accommodation</p>
      </div>
    </div>
  );
}

export default Banner;
