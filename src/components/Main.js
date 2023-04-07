import React, { useEffect } from 'react';
import Card from './Card.js';

function Main (props) {

  useEffect(()=>{
    props.isSort ? props.setArrCardsSort(props.arrCards.filter((item)=>item.isLiked === true)) : props.setArrCardsSort(props.arrCards)
  },[props.isSaveLocalStorage, props.isSort])

  return (
    <main className="content">
      <section className="elemets" aria-label="галерея">
        <ul className="element">
          {props.arrCardsSort.map((card, index, arr) => 
            <Card
              card = {card}
              deleteCard = {props.deleteCard}
              key={index}
              arr={arr}
            />
          )}
        </ul>
      </section>
    </main>
  )
}

export default Main