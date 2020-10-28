import React from 'react';
import { Row, Column } from './Grid';
import Discord from '../assets/discord_logo.png';
import Twitter from '../assets/twitter_logo.png';
import Email from '../assets/envelope.png';

var footerStyle = {
    color: "gray",
    fontSize: "15px",
    textDecoration: "none",
    margin: "10px",
    padding: "0"
}

function Footer(){
    return(
        <div>
            <Row style={{height: "100px"}}>
                <Column centered="true">
                    <p style={footerStyle}>
                    <a target="_blank" style={footerStyle} href="https://twitter.com/scrspc"><img height={29} src={Twitter}/></a>{"   "}
                    <a target="_blank" style={footerStyle} href="https://invite.gg/scorespace"><img height={27.5} src={Discord}/></a> {"  "}
                    <a target="_blank" style={footerStyle} href="mailto:info@scorespace.net"><img height={27} src={Email}/></a>
                    </p>
                </Column>
            </Row>
        </div>
        
    )
}

export default Footer;