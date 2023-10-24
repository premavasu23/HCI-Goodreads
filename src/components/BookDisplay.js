import { Stack, Button, Box } from '@mui/material';
import '../styles/BookDisplay.css'
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import React, { useState, useEffect } from 'react';
import ReadingProgress from './ReadingProgress';
import Progress from './Progress';


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



// just have all the book horizontal elements, then the add button that adds to tbr

const BookDisplay = (props) => {

    const handleAddClick = (e) => {
        const ind = props.bookList.indexOf(props.book);

        let newBookList = [...props.bookList];

        if (props.shelfType === 'isCurrentlyReading') {
            newBookList[ind].isCurrentlyReading = true;
            newBookList[ind].isTBR = false;
            newBookList[ind].isAlreadyRead = false;
            newBookList[ind].isRecommended = false;
        }
        else if (props.shelfType === 'isTBR') {
            newBookList[ind].isCurrentlyReading = false;
            newBookList[ind].isTBR = true;
            newBookList[ind].isAlreadyRead = false;
            newBookList[ind].isRecommended = false;
        }
        else if (props.shelfType === 'isAlreadyRead') {
            newBookList[ind].isCurrentlyReading = false;
            newBookList[ind].isTBR = false;
            newBookList[ind].isAlreadyRead = true;
            newBookList[ind].isRecommended = false;
        }
        else if (props.shelfType === 'isRecommended') {
            newBookList[ind].isCurrentlyReading = false;
            newBookList[ind].isTBR = true;
            newBookList[ind].isAlreadyRead = false;
            newBookList[ind].isRecommended = false;
        }

        props.setBookList(newBookList)
    }

    const [hover, setHover] = React.useState(-1);

    function getLabelText(value) {
        return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
    }

    const updateRating = (newValue) => {

        const ind = props.bookList.indexOf(props.book);

        let newBookList = [...props.bookList];

        if (props.shelfType === 'isAlreadyRead') {
            newBookList[ind].personalRating = newValue;
        }
        props.setBookList(newBookList)
    }

    //reading progress
    const [newProgress, setNewProgress] = useState(props.book.progressPages);
    const [isEditing, setIsEditing] = useState(false);
    const handleEditProgress = () => {
        setIsEditing(true);
    };
    const handleSaveProgress = () => {
        // Validate the input here, e.g., check if it's a valid number
        const newProgressValue = parseInt(newProgress, 10);
        if (!isNaN(newProgressValue) && newProgressValue >= 0 && newProgressValue <= props.book.pageLength) {
            setNewProgress(newProgressValue);
            setIsEditing(false);
        }
    };


    return (
        <div>
            {props.shelfType === "isRecommended" && (
                <Box sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: "30vw",
                    height: "24vh",
                    bgcolor: 'background.paper',
                    boxShadow: 24,
                    p: 4,
                    display: 'column',
                    borderRadius: '1vh',
                    mt: "0.75vh",
                    mb: "0.75vh",
                    margin: "0.75vh",
                    padding: "1vh"
                }}>
                    <Stack direction="row" spacing={2} justifyContent="space-between">
                        <img className="book-cover-horizontal" src={require('../images/' + props.book.cover)}></img>
                        <Stack direction="column" spacing={1} justifyContent="space-evenly" alignItems="center">
                            <div className="title-horizontal">{props.book.title}</div>
                            <div className="author-horizontal">{"by " + props.book.author}</div>
                            <div className="below-book-content-horizontal">
                                <Box
                                    sx={{
                                        alignItems: 'center',
                                    }}
                                >
                                    <Rating name="read-only" defaultValue={props.book.generalRating} precision={0.5} size="small" readOnly />
                                    <Box sx={{ alignContent: "center" }}>{props.book.numRatings + " Ratings"} </Box>
                                </Box>
                            </div>
                        </Stack>
                        <Button variant="contained" sx={{ "color": "#F9F7F4", "backgroundColor": "#75420e" }} onClick={handleAddClick}>Add to TBR</Button>

                    </Stack>
                </Box>)}
            {props.shelfType !== "isRecommended" && (
                <Box sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: "20vw",
                    height: "24vh",
                    bgcolor: 'background.paper',
                    boxShadow: 24,
                    p: 4,
                    display: 'column',
                    borderRadius: '1vh',
                    mt: "0.75vh",
                    mb: "0.75vh",
                    padding: "1vh"
                }}>
                    <Stack direction="row" spacing={2} justifyContent="space-between">
                        <img className="book-cover-horizontal" src={require('../images/' + props.book.cover)}></img>
                        <Stack direction="column" spacing={1} justifyContent="space-evenly" alignItems="center">
                            <div className="title-horizontal">{props.book.title}</div>
                            <div className="author-horizontal">{"by " + props.book.author}</div>
                            <div className="below-book-content-horizontal">
                                {(props.shelfType === "isTBR" || props.shelfType === "isRecommended") && (
                                    <Box
                                        sx={{
                                            alignItems: 'center',

                                        }}
                                    >
                                        <Rating name="read-only" defaultValue={props.book.generalRating} precision={0.5} size="small" readOnly />
                                        <Box sx={{ alignContent: "center" }}>{props.book.numRatings + " Ratings"} </Box>
                                    </Box>
                                )
                                }
                                {(props.shelfType === "isAlreadyRead") && (
                                    <Box
                                        sx={{
                                            width: 100,
                                            display: 'flex',
                                            alignItems: 'center',
                                        }}
                                    >
                                        <Rating name="read-only" defaultValue={props.book.personalRating} precision={0.5} size="small" sx={{
                                            marginRight: "0.3rem"
                                        }} getLabelText={getLabelText}
                                            onChange={(event, newValue) => {
                                                props.setValue(newValue);
                                                updateRating(newValue)
                                            }}
                                            onChangeActive={(event, newHover) => {
                                                setHover(newHover);
                                            }}
                                            emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                                        />
                                        {props.book.personalRating !== null && (
                                            <Box sx={{ ml: 0.5 }}>{labels[hover !== -1 ? hover : props.book.personalRating]}</Box>
                                        )}
                                    </Box>
                                )
                                }Ï
                                {(props.shelfType === "isCurrentlyReading") && (
                                    <Box className="currently-reading"
                                        sx={{
                                            width: 100,
                                            display: 'flex',
                                            alignItems: 'center',
                                        }}>
                                        <div className='reading-fraction'>{newProgress} / {props.book.pageLength}</div>
                                        <Progress goal={props.book.pageLength} progress={newProgress} /> <br />
                                        <input className='new-update'
                                            type="number"
                                            value={newProgress}
                                            onChange={(e) => setNewProgress(e.target.value)}
                                        />
                                        <button onClick={handleSaveProgress}>update</button>
                                        {/* reading progress end */}
                                    </Box>
                                )}
                            </div>
                        </Stack>
                    </Stack>
                </Box>)}
        </div>
    );
};

export default BookDisplay;