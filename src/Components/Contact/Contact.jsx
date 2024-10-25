import React, { useState } from "react";
import "./Contact.css";

export default function Contact({ id, phone, whatsapp, onClick }) {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
    if (onClick) onClick();
  };

  return (
    <div
      className={`contact-wrapper ${isActive ? "active" : ""}`}
      onClick={handleClick}
    >
      <button className="contact-button">Связаться с контактом {id}</button>
      {isActive && (
        <div className="contact-content">
          <a href={`tel:8${phone}`} className="contact-link">
            {phone}
          </a>
          <hr />
          <a href={`https://wa.me/${whatsapp}`} className="contact-link">
            WhatsApp
          </a>
        </div>
      )}
    </div>
  );
}
