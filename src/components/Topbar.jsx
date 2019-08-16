import React from 'react';
import './style/Topbar.css';
import LinkButton from './LinkButton';
import logo from '../assets/logo.png';

function Nav(props){
    return(
        <div className="Nav">
            {props.children}
        </div>
    );
}

function Topbar(){
    return ( 
        <div className="Topbar">
            <img alt="ScoreSpace's logo" src={logo} width={125} height={125} className="Logo"/>

            <Nav>
                <LinkButton link="/">HOME</LinkButton>
                <LinkButton link="/gamedevs/">GAMEDEVS</LinkButton>
                <LinkButton link="/streamers/">STREAMERS</LinkButton>
                <LinkButton link="/contact/">CONTACT</LinkButton>
            </Nav>
        </div>
    );
}

export function TopbarMargin(){
    return(
        <div className="TopbarMargin"></div>
    );
}

export function BaseMargin(){
    return(
        <div className="BaseMargin"></div>
    );
}

export default Topbar;
