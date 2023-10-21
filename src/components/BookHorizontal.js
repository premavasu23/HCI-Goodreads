import React from "react";
import { Paper, Button, Stack, Box } from '@mui/material';
import '../styles/BookHorizontal.css'
import BookList from "../data/BookList";
import Rating from '@mui/material/Rating';

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
                    width: "100%",
                    mt: "0.75vh",
                    mb: "0.75vh",
                    padding: "1vh"
                }}>
                <Stack direction="row" spacing={2} justifyContent="space-between">
                    <img className="book-cover-horizontal" src={props.book.cover}></img>
                    <Stack direction="column" spacing={1} justifyContent="space-evenly" alignItems="center">
                        <div className="title-horizontal">{props.book.title}</div>
                        <div className="author-horizontal">{"by " + props.book.author}</div>
                        <div className="below-book-content-horizontal">
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
                        </div>
                    </Stack>
                    <Button variant="contained" sx={{ "color": "#F9F7F4", "backgroundColor": "#75420e" }} onClick={handleAddClick}>+</Button>
                </Stack>

            </Paper>

        </div>

    );
};

export default BookHorizontal;