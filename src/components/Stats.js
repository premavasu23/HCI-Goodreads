import React from 'react';
import '../styles/Stats.css'

const Stats = (props) => {

    //book length breakdown 
    const bookslessThan100 = props.bookList.filter(book => book.pageLength > 0 && book.pageLength <= 100 && book.isAlreadyRead);
    const booksLessThan200 = props.bookList.filter(book => book.pageLength > 100 && book.pageLength <= 200 && book.isAlreadyRead);
    const booksLessThan300 = props.bookList.filter(book => book.pageLength > 200 && book.pageLength <= 300 && book.isAlreadyRead);
    const booksLessThan400 = props.bookList.filter(book => book.pageLength > 300 && book.pageLength <= 400 && book.isAlreadyRead);
    const booksLessThan500 = props.bookList.filter(book => book.pageLength > 400 && book.pageLength <= 500 && book.isAlreadyRead);
    const booksLessThan600 = props.bookList.filter(book => book.pageLength > 500 && book.pageLength <= 600 && book.isAlreadyRead);
    const booksGreaterThan600 = props.bookList.filter(book => book.pageLength > 600 && book.isAlreadyRead);
   
    //genre breakdown
    const fictionBooks = props.bookList.filter(book => book.genres.includes("Fiction") && book.isAlreadyRead);
    const nonFictionBooks = props.bookList.filter(book => book.genres.includes("Non-Fiction") && book.isAlreadyRead);
    const essayBooks = props.bookList.filter(book => book.genres.includes("Fantasy") && book.isAlreadyRead);
    const classicBooks = props.bookList.filter(book => book.genres.includes("Fantasy") && book.isAlreadyRead);
    const romanceBooks = props.bookList.filter(book => book.genres.includes("Fantasy") && book.isAlreadyRead);
    const dystopianBooks = props.bookList.filter(book => book.genres.includes("Dystopian") && book.isAlreadyRead);
    const sciFiBooks = props.bookList.filter(book => book.genres.includes("Science-Fiction") && book.isAlreadyRead);
    const fantasyBooks = props.bookList.filter(book => book.genres.includes("Fantasy") && book.isAlreadyRead);
    const historicalBooks = props.bookList.filter(book => book.genres.includes("Historical") && book.isAlreadyRead);
      
    return (
        <div className="stats">
            <h2>Reading Stats</h2><br/>
            {/* <div>{"Fiction: " + fictionBooks.length}</div><br/> */}

            <div className='genre'>        
                <h4>Genre Breakdown</h4><br/>
                <div>{"Non-Fiction: " + nonFictionBooks.length}</div><br/>
                <div>{"Fiction: " + fictionBooks.length}</div><br/>
                <div>{"Classics: " + classicBooks.length}</div><br/>
                <div>{"Romance:" + romanceBooks.length}</div><br/>
                <div>{"Historical: " + historicalBooks.length}</div><br/>
                <div>{"Fantasy: " + fantasyBooks.length}</div><br/>
                <div>{"Dystopian: " + dystopianBooks.length}</div><br/>
                <div>{"Science Fiction: " + sciFiBooks.length}</div><br/>
              
            </div>
            <div className='book-length'>        
                <h4>Avg Book Length</h4><br/>
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