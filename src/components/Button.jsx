import React from 'react';
import './style/Button.css';



function Button(props){
    return ( 
        <div className="Button" onClick={props.onClick} style={props.style}>
            {props.children}
        </div> 
    );
}

export default Button;