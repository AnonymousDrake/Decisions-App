import React from 'react';

const Option=(props)=>(
    <div className="option">
        <p className="option__text">{props.index}. {props.option}</p> <button className="button button--link" onClick={(e)=>{props.handleDeleteOne(props.option)}}>Remove</button>
    </div>
);

export default Option;