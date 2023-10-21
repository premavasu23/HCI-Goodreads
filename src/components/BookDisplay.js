import React from "react";
import {Stack, Button, Box} from '@mui/material';
import '../styles/BookDisplay.css'
import BookList from "../data/BookList";

const boxStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "30vw",
    height: "20vh",
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    display: 'column',
    borderRadius: '1vh'
};

// just have all the book horizontal elements, then the add button that adds to tbr

const BookDisplay = (props) => {

    const handleAddClick = (e) => {
        // put add book logic here for tbr
        const ind = BookList.indexOf(props.book);
        console.log(BookList[ind]);
        BookList[ind][props.shelfType] = true;
        console.log(BookList[ind]);

    }
    return (
        <div>
            {props.shelfType === "isRecommended" && (
            <Box sx={{
                position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: "30vw",
            height: "22vh",
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 4,
            display: 'column',
            borderRadius: '1vh',
            mt:"0.75vh",
            mb:"0.75vh",
            padding: "1vh"
            }}>
                <Stack direction="row" spacing={2} justifyContent="space-between">
                    <img className="book-cover-horizontal" src={props.book.cover}></img>
                    <Stack direction="column" spacing={1} justifyContent="space-evenly" alignItems="center">
                        <div className="title-horizontal">{props.book.title}</div>
                        <div className="author-horizontal">{"by "+props.book.author}</div>
                        <div className="below-book-content-horizontal">
                            stars
                        </div>
                    </Stack>
                    <Button variant="contained" sx={{"color": "#F9F7F4", "backgroundColor": "#75420e"}} onClick={handleAddClick}>+</Button>
                </Stack>
            </Box>)}
            {props.shelfType !== "isRecommended" && (
            <Box sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: "20vw",
                height: "22vh",
                bgcolor: 'background.paper',
                boxShadow: 24,
                p: 4,
                display: 'column',
                borderRadius: '1vh',
                mt:"0.75vh",
                mb:"0.75vh",
                padding: "1vh"
                }}>
                <Stack direction="row" spacing={2} justifyContent="space-between">
                    <img className="book-cover-horizontal" src={props.book.cover}></img>
                    <Stack direction="column" spacing={1} justifyContent="space-evenly" alignItems="center">
                        <div className="title-horizontal">{props.book.title}</div>
                        <div className="author-horizontal">{"by "+props.book.author}</div>
                        <div className="below-book-content-horizontal">
                            stars
                        </div>
                    </Stack>
                </Stack>
            </Box>)}
        </div>
        
    );
};


export default BookDisplay;