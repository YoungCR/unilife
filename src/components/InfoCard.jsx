import React from 'react';

function InfoCard({ cardImgSrc, cardImgAlt, cardTitle, cardText }) {
  return (
    <div className="flex flex-col flex-wrap justify-center items-center my-10 mx-5">
      <img src={cardImgSrc} alt={cardImgAlt} className="w-24 mb-9" />
      <h4 className="text-3xl font-medium mb-3">{cardTitle}</h4>
      <p className="font-normal text-xl text-center w-96 h-14">{cardText}</p>
    </div>
  );
}

export default InfoCard;
