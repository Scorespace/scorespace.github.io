import React from 'react';
import './style/Jumbotron.css';
import { Row } from "./Grid";
import {BaseMargin} from "./Topbar";
import { FadeBody } from './TypedHeading';

function Jumbotron(props){
    return(
        <div style={props.style}>
            <BaseMargin/>
            <Row>
                
                <FadeBody class="Jumbotron" style={props.pStyle}>
                    {props.children}
                </FadeBody>
            </Row>
            <BaseMargin/>
        </div>
    );
}

export default Jumbotron;
