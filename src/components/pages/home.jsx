import React from 'react';
import Background from '../../assets/space_background.png';
import { TopbarMargin, BaseMargin } from '../Topbar';
import TypedHeading, {FadeBody} from '../TypedHeading';
import SectionBox from '../SectionBox';
import Button from '../Button';
import Logo from '../../assets/logo.png';
import {withRouter} from "react-router-dom";    

function Home(props){
    return(
        <div>  
            <section className="Banner" style={{background:`url(${Background})`, height: "auto", position: "relative", backgroundSize: "100%", backgroundPositionY: "-10%"}}>
                <TopbarMargin/>
                <SectionBox class="HomeSec" style={{height:"calc(100vh - 80px)"}}>
                
                    <img src={Logo} width="300"></img>

                    <span>
                    <Button onClick={() => props.history.push("/makegames")} style={{display: "inline-flex", flexDirection: "column", width: 200, backgroundColor: "#00C0FF", margin: 20, marginBottom: 0, borderRadius: 2, fontSize: 20}}>
                        <b>MAKE GAMES.</b>
                    </Button>

                    <Button onClick={() => props.history.push("/playgames")} style={{display: "inline-flex", flexDirection: "column", width: 200, backgroundColor: "#7402FF", margin: 20, borderRadius: 2, fontSize: 20}}>
                        <b>PLAY GAMES.</b>
                    </Button>
                    </span>
                    
                </SectionBox>
            </section>
        </div>
    );
}

export default withRouter(Home);