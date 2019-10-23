import React from 'react';
import './style/Button.css';



function Button(props){
    return ( 
        <span className="Button" onClick={props.onClick} style={props.style}>
            {props.children}
        </span> 
    );
}

export default Button;