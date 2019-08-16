import React from 'react';
import './style/Grid.css';

function Row(props){
    return(
        <div className={"Row " + props.class} style={props.style} >
            {props.children}
        </div>
    );
}

function Column(props){
    const style = {
        justifyContent: props.centered === "true" ? "center" : null,
        alignItems: props.centered === "true" ? "center" : null,
        height: props.height
    }

    return(
        <div className="Column" style={style}>
            {props.children}
        </div>
    );
}

export {Row, Column};