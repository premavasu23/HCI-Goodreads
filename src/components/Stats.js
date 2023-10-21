// import React, { useState, useEffect } from 'react';
import BookList from '../data/BookList';
import '../styles/Stats.css'

const Stats = () => {
    //book length conditionals 
    const bookslessThan100 = BookList.filter(book => book.pageLength > 0 && book.pageLength <= 100 && book.isAlreadyRead);
    const booksLessThan200 = BookList.filter(book => book.pageLength > 100 && book.pageLength <= 200 && book.isAlreadyRead);
    const booksLessThan300 = BookList.filter(book => book.pageLength > 200 && book.pageLength <= 300 && book.isAlreadyRead);
    const booksLessThan400 = BookList.filter(book => book.pageLength > 300 && book.pageLength <= 400 && book.isAlreadyRead);
    const booksLessThan500 = BookList.filter(book => book.pageLength > 400 && book.pageLength <= 500 && book.isAlreadyRead);
    const booksLessThan600 = BookList.filter(book => book.pageLength > 500 && book.pageLength <= 600 && book.isAlreadyRead);
    const booksGreaterThan600 = BookList.filter(book => book.pageLength > 600 && book.isAlreadyRead);
   
    //genre breakdown
    const fictionBooks = BookList.filter(book => book.genres.includes("Fiction") && book.isAlreadyRead);
    const nonFictionBooks = BookList.filter(book => book.genres.includes("Non-Fiction") && book.isAlreadyRead);
    const essayBooks = BookList.filter(book => book.genres.includes("Fantasy") && book.isAlreadyRead);
    const classicBooks = BookList.filter(book => book.genres.includes("Fantasy") && book.isAlreadyRead);
    const romanceBooks = BookList.filter(book => book.genres.includes("Fantasy") && book.isAlreadyRead);
    const dystopianBooks = BookList.filter(book => book.genres.includes("Dystopian") && book.isAlreadyRead);
    const sciFiBooks = BookList.filter(book => book.genres.includes("Science-Fiction") && book.isAlreadyRead);
    const fantasyBooks = BookList.filter(book => book.genres.includes("Fantasy") && book.isAlreadyRead);
    const historicalBooks = BookList.filter(book => book.genres.includes("Historical") && book.isAlreadyRead);

      
    return (
        <div className="stats">
            <h2>Reading Stats</h2>
            <div className='genre'>        
                <h4>Genre Breakdown</h4>
                <div>{"Non-Fiction: " + nonFictionBooks.length}</div><br/>
                <div>{"Fiction: " + fictionBooks.length}</div><br/>
                <div>{"Classics: " + classicBooks.length}</div><br/>
                <div>{"Romance:" + romanceBooks.length}</div><br/>
                <div>{"Historical: " + historicalBooks.length}</div><br/>
                <div>{"Fantasy: " + fantasyBooks.length}</div><br/>
                <div>{"Dystopian: " + dystopianBooks.length}</div><br/>
                <div>{"Science Fiction: " + sciFiBooks.length}</div>
              
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