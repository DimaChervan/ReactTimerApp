import React from 'react';
import { Link, IndexLink } from 'react-router';

const Navigation = () => (
  <div className="top-bar">
    <div className="top-bar-left">
      <ul className="menu">
        <li className="menu-text">
          React Timer App
        </li>
        <li className="menu-item">
          <IndexLink to="/" activeClassName="active-link">Timer</IndexLink>
        </li>
        <li className="menu-item">
          <Link to="/countdown" activeClassName="active-link">Coutdown</Link>
        </li>
      </ul>
    </div>
    <div className="top-bar-right">
      <ul className="menu">
        <li className="menu-text">
          Created by <a href="#">User</a>
        </li>
      </ul>
    </div>
  </div>
);

export default Navigation;
