import React from "react";
import '../styles/Shelf.css'

const Shelf = (props) => {

    const x = 'x';
    
    return (
    <div className="shelf">
        <div className="book-container">
            <div className="card"> Card</div>
            <div className="card"> Card</div>
            <div className="card"> Card</div>
            <div className="card"> Card</div>
            <div className="card"> Card</div>
            <div className="card"> Card</div>
            <div className="card"> Card</div>
            <div className="card"> Card</div>
            <div className="card"> Card</div>
            <div className="card"> Card</div>
            <div className="card"> Card</div>
            <div className="card"> Card</div>
            <div className="card"> Card</div>
            <div className="card"> Card</div>        <div className="card"> Card</div>
            <div className="card"> Card</div>
            <div className="card"> Card</div>
            <div className="card"> Card</div>
            <div className="card"> Card</div>
            <div className="card"> Card</div>
            <div className="card"> Card</div>
        </div>

        <button>+</button>
    </div>
    );
};

export default Shelf;