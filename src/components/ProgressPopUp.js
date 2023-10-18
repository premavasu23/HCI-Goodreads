import React, { useState, useEffect } from 'react';
import Modal from '@mui/material/Modal';

const ProgressPopUp = ((props) => {




    return(
        <div>

            <Modal>
                {props.book.title};
            </Modal>

        </div>
    )
})

export default ProgressPopUp;