import React from 'react';
import './style.scss';

const Header = () => {
  console.log('HEADER');

  return (
    <div className="header-wrapper">
      <div className="logo">logo</div>
      <div className="nav">
        <ul>
          <li>home</li>
          <li>products</li>
          <li>roadmap</li>
          <li>contacts</li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
