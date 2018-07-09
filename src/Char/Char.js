import React from 'react';
import './Char.css';

const char = (props) => {
    return (<div className="char" onClick={() => {props.click(props.index)}}>{props.letter}</div>)
}

export default char;
