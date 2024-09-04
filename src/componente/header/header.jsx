import React from 'react';
import logo from '../logo.png'
import './header.css'
function Header() {
  return (
    <header>
        <div className='logo'>
      <img src={logo} alt="" />
      </div>
      <div className='menu'>
      <a href="*"> Accueil</a>
      <a href="*"> Profil</a>
      <a href="*"> Réglage</a>
      <a href="*"> Communauté</a>
      </div>
    </header>
  );
}
export default Header