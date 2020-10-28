import React from 'react';
import './style/Topbar.css';
import LinkButton from './LinkButton';
import Button from './Button'
import logo from '../assets/logo.png';
import {withRouter} from 'react-router-dom';

function Nav(props){
    return(
        <div className="Nav">
            {props.children}
        </div>
    );
}

function Topbar(props){
    return ( 
        <div className="Topbar">
            <img alt="ScoreSpace's logo" src={logo} width={125} height={125} className="Logo" style={{cursor:"pointer"}} onClick={() => props.history.push("/")}/>

            <Nav>
                <LinkButton link="/makegames">SCOREJAM</LinkButton>
                <LinkButton link="/playgames">SCOREDROPS</LinkButton>
                <Button onClick={() => window.open("https://teespring.com/stores/scorespace-store")}>MERCH</Button>
                <LinkButton link="/leaderboard">LEADERBOARD</LinkButton>
                <LinkButton link="/contact">CONTACT</LinkButton>
                <LinkButton link="/prevjam">PREVIOUS JAMS</LinkButton>
                
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

export default withRouter(Topbar);
