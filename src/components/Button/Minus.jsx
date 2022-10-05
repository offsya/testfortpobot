import React from 'react';
import './Button.css';

const Minus = (props) => {
    return (
        <button {...props} className={'button ' + props.className}/>
    );
};

export default Minus;
