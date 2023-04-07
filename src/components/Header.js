import React from 'react';
import logo from '../images/logo.svg';

function Header (props) {
  function switchSort() {
    props.isSort ? props.setIsSort(false) : props.setIsSort(true);
  }
  return (
    <header className="header">
      <p className = "header__text">Сарафан && Докт24</p>
      <img src= {logo} className="header__logo" alt="Логотип"/>
      <button className={`header__button ${props.isSort && 'header__button_active'}`} type="button" onClick = {switchSort}></button>
    </header>
  )
}

export default Header