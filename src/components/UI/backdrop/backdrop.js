import React from 'react';
import './backdrop.css';

const Backdrop = (
    {show, dismiss}
) => {
    return show && (
        <div className='backdrop' onClick={dismiss}>

        </div>
    );
};

export default Backdrop;