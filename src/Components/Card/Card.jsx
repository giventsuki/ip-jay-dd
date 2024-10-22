import React from "react";
import './Card.css'
export default function Card({src, alt, title, size,  price, onClick}){
  return(
    <div className="card-wrapper" onClick={onClick}>
      <img src={src} alt={alt} className="card-img" />
      <h4 className="card-title">{title}</h4>
      <p className="card-size">Размер: {size} мм</p>
      <p className="card-price">Цена: {price} тг</p>
    </div>
  )
}