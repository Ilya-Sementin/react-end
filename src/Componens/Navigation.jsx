import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav>
      <ul>
        <li><Link to='/'>Домой</Link></li>
        <li><Link to='/about'>Об авторе</Link></li>
      </ul>
    </nav>
  );
}

export default Navigation;
