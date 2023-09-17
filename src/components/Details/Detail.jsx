import React from "react";
import './Detail.css';

const Detail = ({ detail, closeModal }) => {
  return (
    <div className="details">
      <h2>{detail.title}</h2>
      <img src={detail.image} alt={detail.title}/>
      <p>Price: ${detail.price}</p>
      <p>Info: {detail.desc}</p>
      <p>Year: {detail.year}</p>
      <button onClick={() => closeModal()}>X</button>
    </div>
  );
};

export default Detail;
