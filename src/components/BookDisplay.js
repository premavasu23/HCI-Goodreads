import React from "react";
import { Stack, Button, Box } from '@mui/material';
import '../styles/BookDisplay.css'
import BookList from "../data/BookList";
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';


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
        // put add book logic here for tbr
        const ind = props.bookList.indexOf(props.book);
        props.bookList[ind][props.shelfType] = true;

    }

    const [value, setValue] = React.useState(2);
    const [hover, setHover] = React.useState(-1);

    function getLabelText(value) {
        return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
    }

    const updateRating = (newValue) => {

        const ind = props.bookList.indexOf(props.book);
            
        let newBookList = [...props.bookList];

        
        if (props.shelfType === 'isCurrentlyReading') {
            
        }
        else if (props.shelfType === 'isTBR') {
            
        }
        else if (props.shelfType === 'isAlreadyRead') {
            newBookList[ind].personalRating = value;
        }
        else if (props.shelfType === 'isRecommended') {
        
        }

        props.setBookList(newBookList)




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
                        <Button variant="contained" sx={{ "color": "#F9F7F4", "backgroundColor": "#75420e" }} onClick={handleAddClick}>+</Button>
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
                                                setValue(newValue);
                                                updateRating()
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
                                }

                            </div>
                        </Stack>
                    </Stack>
                </Box>)}
        </div>

    );
};


export default BookDisplay;