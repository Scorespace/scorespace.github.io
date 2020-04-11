import React from 'react';
import './style/SectionBox.css';
import { Row } from "./Grid";
import {BaseMargin} from "./Topbar";
import { FadeBody } from './TypedHeading';

function SectionBox(props){
    return(
        <div style={props.style}>
            <BaseMargin/>
            <Row>
                
                <FadeBody class="SectionBox" style={props.pStyle}>
                    {props.children}
                </FadeBody>
            </Row>
            <BaseMargin/>
        </div>
    );
}

export default SectionBox;
