import React from "react";
import Book from '../components/Book'
import '../styles/Shelf.css'

const Shelf = (props) => {
    
    return (
    <div className="shelf">
        <div className="books-container">
            <Book cover={require('../images/pjo_1.jpg')}></Book>
            <Book cover={require('../images/pjo_2.jpg')}></Book>
            <Book cover={require('../images/pjo_3.jpg')}></Book>
            <Book cover={require('../images/pjo_4.jpg')}></Book>
            <Book cover={require('../images/pjo_5.jpg')}></Book>
            <Book cover={require('../images/hunger_games.jpg')}></Book>
            <Book cover={require('../images/catching_fire.jpg')}></Book>
            <Book cover={require('../images/mockingjay.jpg')}></Book>


        </div>

        <button className="add-button">+</button>
    </div>
    );
};

export default Shelf;