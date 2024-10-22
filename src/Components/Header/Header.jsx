import React from "react";
import logo from '../../images/logo.png'
import './Header.css'
export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <ul className="header-list">
          <li className="header-item">
            <a href="" className="header-link">
              <img src={logo} alt="logo" className="haeder-img" />
              <h1>ИП JAY DD</h1>
            </a>
          </li>
          <li className="header-item">

          </li>
        </ul>
      </div>
    </header>
  );
}
