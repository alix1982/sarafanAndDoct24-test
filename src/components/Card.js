import React from 'react';
import {useState} from 'react';

function Card (props) {
  const numberImg = props.card.image.split('').filter((item)=>Number(item) || item === '0').join('');
  const [isLiked, setIsLiked] = useState(props.card.isLiked);
  
  function handleLikeClick() {
    if (props.card.isLiked) {
      props.card.isLiked = false;
      setIsLiked(false);
    } else {
      props.card.isLiked = true;
      setIsLiked(true);
    }
  }
  let buttonLikeClassName = (`element__like ${props.card.isLiked && 'element__like_active'}`);
  
  function handleDeleteClick() {
    props.deleteCard(props.card);
  }
    
  return (
    <li className="element__list">
      <img className="element__img" src ={props.card.image} alt={`Лиса ${numberImg}`} />
      <button className= "element__del element__del_active" type="button" onClick={handleDeleteClick}></button>
      <div className="element__item">
        <p className="element__text">{`Лиса ${numberImg}`}</p>
        <button className= {buttonLikeClassName} type="button" onClick={handleLikeClick}></button>
      </div>
    </li>
  )
}

export default Card