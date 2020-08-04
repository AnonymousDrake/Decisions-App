import React from 'react';
import Option from './Option'

const Options=props=>(
    <div>
        <div className="widget-header">
            <h3 className="widget-header__title">Your Options</h3>
            <button className="button button--link"
            onClick={props.handleDeleteAll}>
            Remove all
        </button>
        </div>
        {props.options.length ===0 ? <p className="widget__message">Please add an item to get started!</p>:""}
        {props.options.map((option,index)=>
            <Option key={option} 
                index={index+1}
                option={option} 
                handleDeleteOne={props.handleDeleteOne}
            />)}
    </div>
);

export default Options;