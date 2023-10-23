import React, { useState, useEffect } from 'react';
import {Box, Typography, IconButton, Modal, TextField} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import BookHorizontal from './BookHorizontal'

const boxStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "34vw",
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
    }

    const handleSearchClick = (e) => {
        setShowSearchResults(true);
        setSearchResults(props.bookList.filter((b) => (b.title.toLowerCase().includes(searchValue.toLowerCase()) || b.author.toLowerCase().includes(searchValue.toLowerCase()))));
        console.log(searchResults);

    }

    useEffect(() => {
        if(props.shelfType === "isCurrentlyReading") {
            setShelfBookList(props.bookList.filter((b) => b.isCurrentlyReading === false))
        }
        else if(props.shelfType === "isTBR") {
            setShelfBookList(props.bookList.filter((b) => b.isTBR === false))
        }
        else if(props.shelfType === "isAlreadyRead") {
            setShelfBookList(props.bookList.filter((b) => b.isAlreadyRead === false))
        }
      }, [props]);

    return (
        <Box sx={boxStyle}>
            <Box sx={{display: "row"}}>
                <TextField id="outlined-basic" label="Search" variant="outlined" size="small" sx={{width: "26vw"}} onChange={handleSearchValue}/>
                <IconButton aria-label="delete" color="primary" onClick={handleSearchClick} sx={{"color": "#75420e", "&:hover": {backgroundColor: 'white', color: '#75420e'}}}>
                <SearchIcon/>
                </IconButton>
            </Box>
            {(showSearchResults === false || searchValue.length === 0) && (
                    shelfBookList.map((b) => (
                        <BookHorizontal book={b} shelfType={props.shelfType} bookList={props.bookList} setBookList={props.setBookList}></BookHorizontal>
                    )))
                    }
            {(showSearchResults === true) && (
                    searchResults.map((b) => (
                        <BookHorizontal book={b} shelfType={props.shelfType} bookList={props.bookList} setBookList={props.setBookList}></BookHorizontal>
                    )))
                    }
            
        </Box>
    );
};

export default AddBookModal;