import React from 'react';
import { Row, Column } from './Grid';
import Discord from '../assets/discord_logo.png';

var footerStyle = {
    color: "gray",
    fontSize: "15px",
    textDecoration: "none"
}

function Footer(){
    return(
        <div>
            <Row style={{height: "100px"}}>
                <Column centered="true">
                    <p style={footerStyle}>
                    <a style={footerStyle} href="https://invite.gg/scorespace">Discord</a> {" - "}
                    <a style={footerStyle} href="https://twitter.com/scorespacejam">Twitter</a> {" - "}
                    <a style={footerStyle} href="mailto:info@scorespace.net">Email</a>
                    </p>
                </Column>
            </Row>
        </div>
        
    )
}

export default Footer;