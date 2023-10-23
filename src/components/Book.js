import React, { useState, useEffect } from 'react';
import '../styles/Book.css'
import { Paper, List, ListItemButton, Modal, Box } from '@mui/material';
import BookDisplay from '../components/BookDisplay'
import BookList from "../data/BookList";
import Rating from '@mui/material/Rating';


const Book = (props) => {
    const [openBookDisplay, setOpenBookDisplay] = useState(false);

    const handleBookClose = () => setOpenBookDisplay(false);


    const handleBookPress = () => {
        setOpenBookDisplay(true);

    }

    const labels = {
        0.5: '0.5',
        1: ' 1',
        1.5: ' 1.5',
        2: ' 2',
        2.5: ' 2.5',
        3: ' 3',
        3.5: ' 3.5',
        4: ' 4',
        4.5: ' 4.5',
        5: ' 5',
    };

    return (
        <div>
            <List>
                <ListItemButton onClick={handleBookPress}>
                    <Paper elevation={3}
                        sx={{
                            backgroundColor: "#F9F7F4",
                            paddingRight: "0.3vw",
                            width: "8vw",
                            minHeight: "12vw",
                            borderRadius: "0.25vw",
                            display: "grid",
                            justifyItems: "center",
                            alignContent: "space-between",
                            margin: "2vw",
                        }}>
                        <img className="book-cover" src={require('../images/' + props.book.cover)}></img>
                        <div className="title">{props.book.title}</div>
                        <div className="author">{"by " + props.book.author}</div>
                        <div className="below-book-content">
                            {(props.shelfType === "isAlreadyRead") && (
                                <Box
                                    sx={{
                                        width: 100,
                                        display: 'flex',
                                        alignItems: 'center',
                                        backgroundColor: "#F9F7F4",
                                    }}
                                >
                                    <Rating name="read-only" value={props.book.personalRating} precision={0.5} size="small" readOnly sx={{
                                        backgroundColor: "#F9F7F4", marginRight: "0.3rem"
                                    }} />
                                    
                                    <Box sx={{ alignContent: "center" }}>{labels[props.book.personalRating]}</Box>
                                </Box>

                            )
                            }
                            {(props.shelfType === "isTBR" || props.shelfType === "isRecommended") && (
                                <Box
                                    sx={{
                                        alignItems: 'center',
                                        backgroundColor: "#F9F7F4"
                                    }}
                                >
                                    <Rating name="read-only" defaultValue={props.book.generalRating} precision={0.5} size="small" readOnly sx={{
                                        backgroundColor: "#F9F7F4"
                                    }} />
                                    <Box sx={{ alignContent: "center" }}>{props.book.numRatings + " Ratings"} </Box>
                                </Box>
                            )
                            }
                        </div>
                    </Paper>
                </ListItemButton>
            </List>
            <Modal
                open={openBookDisplay}
                onClose={handleBookClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                sx={{ overflow: "auto" }}
            >
                <BookDisplay book={props.book} shelfType={props.shelfType} bookList={props.bookList} setBookList={props.setBookList} />
            </Modal>

        </div>

    );
};

export default Book;