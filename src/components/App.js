import {useEffect, useState} from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import api from '../utils/Api.js';

function App() {
  const numberСards = 9;
  const [isSaveLocalStorage, setIsSaveLocalStorage] = useState(false);
  const [arrCards, setArrCards] = useState([]);
  const [arrCardsSort, setArrCardsSort] = useState(arrCards);
  const [isSort, setIsSort] = useState(false);

  let arr = [];
  useEffect(()=>{
    localStorage.removeItem('arrFox');
    for (let i=1; i<=numberСards; i++) {
      api.getCard()
        .then ((res) => {
          res.id = i;
          res.isLiked = false;
          arr.push(res);
        })
        .then(()=> {
          if (i === numberСards) {
            localStorage.setItem('arrFox', JSON.stringify(arr));
            setArrCards(arr);
            setIsSaveLocalStorage(true);
          }
        })
    }
  }, [])

  function deleteCard (card) {
    setArrCards(arrCards.filter((item)=> item.id !== card.id))
    setArrCardsSort(arrCardsSort.filter((item)=> item.id !== card.id))
  }

  return (
      <div className="page">
        <Header 
          isSort = {isSort}
          setIsSort = {setIsSort}
        />
        <Main
          arrCards = {arrCards}
          arrCardsSort = {arrCardsSort}
          setArrCardsSort = {setArrCardsSort}
          deleteCard = {deleteCard}
          isSaveLocalStorage = {isSaveLocalStorage}
          isSort = {isSort}
        />
        <Footer />
      </div>
  );
}

export default App;
