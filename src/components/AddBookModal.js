import React, { useState, useEffect } from 'react';
import { Box, Typography, IconButton, Modal, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import BookHorizontal from './BookHorizontal'
import BookList from "../data/BookList";

const boxStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "32vw",
    height: "50vh",
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    display: 'column',
    overflow: "auto",
    borderRadius: '1vh',
};


const AddBookModal = (props) => {

    const [searchValue, setSearchValue] = useState("");
    const [showSearchResults, setShowSearchResults] = useState(false);
    const [shelfBookList, setShelfBookList] = useState([]);
    const [searchResults, setSearchResults] = useState([]);


    const handleSearchValue = (e) => {
        setSearchValue(e.target.value);
        console.log(searchValue.length);

    }

    const handleSearchClick = (e) => {
        setShowSearchResults(true);
        setSearchResults(BookList.filter((b) => (b.title.toLowerCase().includes(searchValue.toLowerCase()) || b.author.toLowerCase().includes(searchValue.toLowerCase()))));
        console.log(searchResults);

    }

    useEffect(() => {
        if (props.shelfType === "isCurrentlyReading") {
            setShelfBookList(BookList.filter((b) => b.isCurrentlyReading === false))
        }
        else if (props.shelfType === "isTBR") {
            setShelfBookList(BookList.filter((b) => b.isTBR === false))
        }
        else if (props.shelfType === "isAlreadyRead") {
            setShelfBookList(BookList.filter((b) => b.isAlreadyRead === false))
        }
    }, [props]);

    return (
        <Box sx={boxStyle}>
            <Box sx={{ display: "row" }}>
                <TextField id="outlined-basic" label="Search" variant="outlined" size="small" sx={{ width: "28vw" }} onChange={handleSearchValue} />
                <IconButton aria-label="delete" color="primary" onClick={handleSearchClick}>
                    <SearchIcon />
                </IconButton>
            </Box>
            {(showSearchResults === false || searchValue.length === 0) && (
                shelfBookList.map((b) => (
                    <BookHorizontal book={b} shelfType={props.shelfType}></BookHorizontal>
                )))
            }
            {(showSearchResults === true) && (
                searchResults.map((b) => (
                    <BookHorizontal book={b} shelfType={props.shelfType}></BookHorizontal>
                )))
            }

        </Box>
    );
};

export default AddBookModal;