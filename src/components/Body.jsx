import React from 'react';
import { Row, Column } from './Grid';

function Body(props){
    return(
        <Row style={props.style}>
            <Column>
                {props.children}
            </Column>
        </Row>
    )
}

export default Body;