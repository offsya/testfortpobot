import React from 'react';
import './Button.css';

const Plus = (props) => {
    return (
        <button {...props} className={'button ' + props.className}/>
    );
};

export default Plus;
