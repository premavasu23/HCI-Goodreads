import React from "react";
import {Paper, Button, Stack} from '@mui/material';
import '../styles/BookHorizontal.css'
import BookList from "../data/BookList";

const BookHorizontal = (props) => {

    const handleAddClick = (e) => {
        // put add book logic here
        const ind = BookList.indexOf(props.book);
        console.log(BookList[ind]);
        BookList[ind][props.shelfType] = true;
        console.log(BookList[ind]);

    }
    return (
        <div>
            <Paper elevation={3} fullwidth
            sx={{
                backgroundColor: "#F9F7F4",
                width:"100%",
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
                    <Button variant="contained" sx={{"color": "#F9F7F4", "backgroundColor": "#75420e", "&:hover": {backgroundColor: '#553b08', color: 'white'}}} onClick={handleAddClick}>+</Button>
                </Stack>
                
            </Paper>

        </div>
        
    );
};

export default BookHorizontal;