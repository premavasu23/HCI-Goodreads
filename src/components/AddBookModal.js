import React, { useState, useEffect } from 'react';
import {Box, Typography, IconButton, Modal, TextField} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import Book from './Book'
import BookList from "../data/BookList";

const boxStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    display: 'column'
  };
  

const AddBookModal = (props) => {

    useEffect(() => {
      }, []);

    return (
        <Box sx={boxStyle}>
            <Box sx={{display: "row"}}>
                <TextField id="outlined-basic" label="Search" variant="outlined" size="small" sx={{width: "29vw"}}/>
                <IconButton aria-label="delete" color="primary">
                <SearchIcon />
            </IconButton>
            </Box>
        </Box>
    );
};

export default AddBookModal;