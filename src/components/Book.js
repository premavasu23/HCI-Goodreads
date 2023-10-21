import React, { useState, useEffect } from 'react';
import '../styles/Book.css'
import {Paper, List, ListItemButton, Modal, Box} from '@mui/material';
import BookDisplay from '../components/BookDisplay'
import BookList from "../data/BookList";

const Book = (props) => {
    const [openBookDisplay, setOpenBookDisplay] = useState(false);

    const handleBookClose = () => setOpenBookDisplay(false);


    const handleBookPress = () => {
        setOpenBookDisplay(true);

    }
    
    return (
        <div>
            <List>
                <ListItemButton onClick={handleBookPress}>
                <Paper className="indiv-book-container" elevation={3} 
            sx={{
                "background-color": "#F9F7F4"
            }}>
                <img className="book-cover" src={props.book.cover}></img>
                <div className="title">{props.book.title}</div>
                <div className="author">{"by "+props.book.author}</div>
                <div className="below-book-content">
                    progress / stars
                </div>
            </Paper>
                </ListItemButton>
            </List>
            <Modal 
                open={openBookDisplay}
                onClose={handleBookClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                sx={{overflow:"auto"}}
            >
                <BookDisplay book={props.book} shelfType={props.shelfType}/>
        </Modal>

        </div>
        
    );
};

export default Book;