import React, { useState, useEffect } from 'react';
import {Box, Typography, Button, Modal} from '@mui/material';
import Book from '../components/Book'
import AddBookModal from '../components/AddBookModal'
import '../styles/Shelf.css'

const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  

const Shelf = (props) => {

    const [shelfBookList, setShelfBookList] = useState([]);
    const [showAddBooks, setShowAddBooks] = useState(false);
    const [openAddBooksModal, setOpenAddBooksModal] = useState(false);

    const handleClose = () => setOpenAddBooksModal(false);


    const handleAddPress = () => {
        setOpenAddBooksModal(true);

    }


    useEffect(() => {
        if(props.type === "isCurrentlyReading") {
            setShelfBookList(props.bookList.filter((b) => b.isCurrentlyReading === true))
        }
        else if(props.type === "isTBR") {
            setShelfBookList(props.bookList.filter((b) => b.isTBR === true))
        }
        else if(props.type === "isAlreadyRead") {
            setShelfBookList(props.bookList.filter((b) => b.isAlreadyRead === true))
        }
      }, [props]);


    return (
    <div className="shelf">
        <h3 className="shelf-title">{props.shelfTitle}</h3>
        <p className='shelf.count'>{shelfBookList.length + " books"}</p>
        <div className="shelf-content">
            <div className="books-container">
                {
                    shelfBookList.map((b) => (
                        <Book book={b} shelfType={props.type} bookList={props.bookList} setBookList={props.setBookList}></Book>
                    ))
                }
            </div>
            <Button className="add-button" variant="contained" sx={{"color": "#F9F7F4", "backgroundColor": "#75420e", "&:hover": {backgroundColor: '#553b08', color: 'white'}}} onClick={handleAddPress}>+</Button>
            <Modal 
                open={openAddBooksModal}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                sx={{overflow:"auto"}}
            >
            <AddBookModal shelfType={props.type} shelfTitle={props.shelfTitle} shelfBookList={props.shelfBookList} bookList={props.bookList} setBookList={props.setBookList}/>
        </Modal>
        </div>
    </div>
    );
};

export default Shelf;