import React from 'react';
import Background from '../../assets/space_background.png';
import Controller from '../../assets/controller.png';
import Evertower from '../../assets/evertower.png';
import { TopbarMargin, BaseMargin } from '../Topbar';
import TypedHeading, {FadeBody} from '../TypedHeading';
import SectionBox from '../SectionBox';
import Button from '../Button';
import QuoteBox from '../QuoteBox';
import Footer from '../Footer';
    
function Home(props){
    return(
        <div>  
            <section className="Banner" style={{background:`url(${Background})`, height: "auto", position: "relative", backgroundSize: "100%", backgroundPositionY: "-10%"}}>
                <TopbarMargin/>
                <SectionBox style={{height: "auto"}}>
                    <h1>Play games.</h1>
                    <p>
                    ScoreDrops are games made by ScoreSpace gamedevs that are published on mobile for people to compete for high-scores for 24 hours. Whoever has the high-score after the time is up wins a prize. After the competition is over the games stay up for more people to discover.
                    </p>

                    <span>
                    <Button onClick={() => window.open("https://invite.gg/scorespace")} style={{display: "inline-flex", flexDirection: "column", width: 200, backgroundColor: "#2C2F33", margin: 20, borderRadius: 2, fontSize: 20}}>
                        <b>DISCORD</b>
                    </Button>

                    </span>

                    <iframe width="1280" height="720" src="https://www.youtube.com/embed/xM-pnLuQUmM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <BaseMargin/>
                </SectionBox>

                <SectionBox style={{background:"#09021f"}}>
                    <h1>Evertower</h1>
                    <BaseMargin/>
                    <img src={Evertower} style={{width:"80%", marginTop:0}}></img>
                    
                    <p>Embark onto an endless journey in an endlessly tiled tower full of enemies and riches. Evertower is an endless tower climber platformer with a grappling hook and a gun. Use your grappling hook to reach further than you can jump! Or shoot your way through the tower with your gun.</p>
                      
                    
                </SectionBox>

            </section>
            <Footer/>
        </div>
    );
}

export default Home;