import './App.css';
import Shelf from './components/Shelf'
import './data/BookList.json'
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Stats from './components/Stats'
import Challenge from './components/Challenge'
import Recommendations from './components/Recommendations'

function App() {

  const [bookList, setBookList] = useState(require('./data/BookList.json'))
  // const bookList = require('./data/BookList.json');
  const [isCurrentlyReadingList, setIsCurrentlyReadingList] = useState([])
  const [isTBRList, setIsTBRList] = useState([])
  const [isAlreadyReadList, setIsAlreadyReadList] = useState([])
  const [isRecommended, setIsRecommended] = useState([])


  const handleBookListChange = () => {

    let newBookList = [...bookList];
    newBookList[0].pageTotal = 200;
    setBookList(newBookList);

  }

  useEffect(() => {

    setIsCurrentlyReadingList(bookList.filter((b) => b.isCurrentlyReading === true))
    setIsTBRList(bookList.filter((b) => b.isTBR === true))
    setIsAlreadyReadList(bookList.filter((b) => b.isAlreadyRead === true))
    setIsRecommended(bookList.filter((b) => b.isRecommended === true))

    console.log("It's happening!!")


  }, [bookList]);


  return (
    <div className="App">

      <p>Nav Bar Under Construction</p>
      <Shelf type="isCurrentlyReading" content={isCurrentlyReadingList} shelfTitle="Currently Reading" bookList={bookList} setBookList={setBookList}></Shelf>
      <Shelf type="isTBR" content={isTBRList} shelfTitle="TBR" bookList={bookList} setBookList={setBookList}></Shelf>
      <Shelf type="isAlreadyRead" content={isAlreadyReadList} shelfTitle="Already Read" bookList={bookList} setBookList={setBookList}></Shelf>

    </div>
    
  );
}

export default App;
// border: 5px solid #75420e;
