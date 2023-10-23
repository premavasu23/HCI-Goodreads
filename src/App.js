import './App.css';
import Shelf from './components/Shelf'
import Navbar from './components/Navbar';
import Stats from './components/Stats'
import Challenge from './components/Challenge'
import Recommendations from './components/Recommendations'
import React, { useState, useEffect } from 'react';

function App() {

  const [bookList, setBookList] = useState(require('./data/BookList.json'))
  const [isCurrentlyReadingList, setIsCurrentlyReadingList] = useState([])
  const [isTBRList, setIsTBRList] = useState([])
  const [isAlreadyReadList, setIsAlreadyReadList] = useState([])
  const [isRecommended, setIsRecommended] = useState([])

  useEffect(() => {

    setIsCurrentlyReadingList(bookList.filter((b) => b.isCurrentlyReading === true))
    setIsTBRList(bookList.filter((b) => b.isTBR === true))
    setIsAlreadyReadList(bookList.filter((b) => b.isAlreadyRead === true))
    setIsRecommended(bookList.filter((b) => b.isRecommended === true))
  }, [bookList]);


  return (
    <div className>
      <Navbar bookList={bookList} setBookList={setBookList}/>
      <div className="Shelves">
        <Shelf type="isCurrentlyReading" shelfTitle="Currently Reading" bookList={bookList} setBookList={setBookList}></Shelf>
        <Shelf type="isTBR" shelfTitle="TBR" bookList={bookList} setBookList={setBookList}></Shelf>
        <Shelf type="isAlreadyRead" shelfTitle="Already Read" bookList={bookList} setBookList={setBookList}></Shelf>
      </div>
      <div className = "right-side">
        <Challenge></Challenge>
        <Stats bookList={bookList}></Stats>
        <Recommendations type="isRecommended" shelfTitle="Recommendations" bookList={bookList} setBookList={setBookList}></Recommendations>
      </div>
    </div>
    
  );
}

export default App;
// border: 5px solid #75420e;
