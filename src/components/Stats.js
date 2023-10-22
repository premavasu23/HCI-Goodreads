// import React, { useState, useEffect } from 'react';
import BookList from '../data/BookList';
import '../styles/Stats.css'

const Stats = () => {
    //book length conditionals 
    const bookslessThan100 = BookList.filter(book => book.pageLength > 0 && book.pageLength <= 100 && (book.isCurrentlyReading === true || book.isAlreadyRead ===true));
    const booksLessThan200 = BookList.filter(book => book.pageLength > 100 && book.pageLength <= 200 && (book.isCurrentlyReading === true || book.isAlreadyRead ===true));
    const booksLessThan300 = BookList.filter(book => book.pageLength > 200 && book.pageLength <= 300 && (book.isCurrentlyReading === true || book.isAlreadyRead ===true));
    const booksLessThan400 = BookList.filter(book => book.pageLength > 300 && book.pageLength <= 400 && (book.isCurrentlyReading === true || book.isAlreadyRead ===true));
    const booksLessThan500 = BookList.filter(book => book.pageLength > 400 && book.pageLength <= 500 && (book.isCurrentlyReading === true || book.isAlreadyRead ===true));
    const booksLessThan600 = BookList.filter(book => book.pageLength > 500 && book.pageLength <= 600 && (book.isCurrentlyReading === true || book.isAlreadyRead ===true));
    const booksGreaterThan600 = BookList.filter(book => book.pageLength > 600 && (book.isCurrentlyReading === true || book.isAlreadyRead ===true));
   
    //genre breakdown
    // const fictionBooks = BookList.filter(book => book.genres.includes("Fiction") && (book.isCurrentlyReading === true || book.isAlreadyRead ===true));
    // const nonFictionBooks = BookList.filter(book => book.genres.includes("Non-Fiction") && (book.isCurrentlyReading === true || book.isAlreadyRead ===true));
    // const essayBooks = BookList.filter(book => book.genres.includes("Fantasy") && (book.isCurrentlyReading === true || book.isAlreadyRead ===true));
    // const classicBooks = BookList.filter(book => book.genres.includes("Fantasy") && (book.isCurrentlyReading === true || book.isAlreadyRead ===true));
    // const romanceBooks = BookList.filter(book => book.genres.includes("Fantasy") && (book.isCurrentlyReading === true || book.isAlreadyRead ===true));
    // const dystopianBooks = BookList.filter(book => book.genres.includes("Dystopian") && (book.isCurrentlyReading === true || book.isAlreadyRead ===true));
    // const sciFiBooks = BookList.filter(book => book.genres.includes("Science-Fiction") && (book.isCurrentlyReading === true || book.isAlreadyRead ===true));
    // const fantasyBooks = BookList.filter(book => book.genres.includes("Fantasy") && (book.isCurrentlyReading === true || book.isAlreadyRead ===true));
    // const historicalBooks = BookList.filter(book => book.genres.includes("Historical") && (book.isCurrentlyReading === true || book.isAlreadyRead ===true));

      
    return (
        <div className="stats">
            <h2>Reading Stats</h2>
            <div className='genre'>        
                <h4>Genre Breakdown</h4>
                {/* <div>{"Non-Fiction: " + nonFictionBooks.length}</div><br/>
                <div>{"Fiction: " + fictionBooks.length}</div><br/>
                <div>{"Classics: " + classicBooks.length}</div><br/>
                <div>{"Romance:" + romanceBooks.length}</div><br/>
                <div>{"Historical: " + historicalBooks.length}</div><br/>
                <div>{"Fantasy: " + fantasyBooks.length}</div><br/>
                <div>{"Dystopian: " + dystopianBooks.length}</div><br/>
                <div>{"Science Fiction: " + sciFiBooks.length}</div> */}
              
            </div>
            <div className='book-length'>        
                <h4>Avg Book Length</h4>
                <div>{"1 - 100 pages: " +  bookslessThan100.length}</div><br/>
                <div>{"101 - 200 pages: " + booksLessThan200.length }</div><br/>                
                <div>{"201 - 300 pages: " + booksLessThan300.length }</div><br/>
                <div>{"301 - 400 pages: " + booksLessThan400.length }</div><br/>
                <div>{"401 - 500 pages: " + booksLessThan500.length }</div><br/>
                <div>{"501 - 600 pages: " + booksLessThan600.length }</div><br/>
                <div>{"+600 pages: " + booksGreaterThan600.length }</div>
            </div>
        </div>
    );
};
export default Stats;