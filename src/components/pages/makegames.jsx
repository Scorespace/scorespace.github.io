import React from 'react';
import Background from '../../assets/space_background.png';
import Controller from '../../assets/controller.png';
import PC from '../../assets/pc.png';
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
                
                    <h1>Make games.</h1>
                    <p>
                    We run a two sided game development competition for gamedevs and streamers called <b>ScoreJam</b>. Developers make a high-score based game in 72 hours then streamers play the top 3 rated games for the highest score. This is where we find games to publish as <b>ScoreDrops</b> on mobile.
                    </p>

                    <span>
                    <Button onClick={() => window.open("https://invite.gg/scorespace")} style={{display: "inline-flex", flexDirection: "column", width: 200, backgroundColor: "#2C2F33", margin: 20, marginBottom: 0, borderRadius: 2, fontSize: 20}}>
                        <b>DISCORD</b>
                    </Button>

                    <Button onClick={() => window.open("https://itch.io/jam/scorejam10")} style={{display: "inline-flex", flexDirection: "column", width: 200, backgroundColor: "#00C0FF", margin: 20, borderRadius: 2, fontSize: 20}}>
                        <b>MOST RECENT JAM</b>
                    </Button>
                    </span>
                    <iframe style={{marginBottom: 0}} width="280" height="157.5" src="https://www.youtube.com/embed/Xo6VWiJkOIk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </SectionBox>

                <SectionBox>
                    <h1 style={{marginBottom:50}}>How it works</h1>
                    <BaseMargin/>
                    <div className={"icon"}>
                        <img src={PC} width={100}/>
                    </div>
                    <h2>
                        Developers
                    </h2>
                    <p style={{lineHeight: 1.5}}>
                    The jam starts with the game developers. Their job is to create a game within a 72 hour period. Once the time is up, there is a three day judging period in which the games are judged by the jam participants. The winning games are made a highlight video. The top three games are then played by the streamers.
                    </p>

                    <TopbarMargin/>
                    <div className={"icon"}>
                        <img src={Controller} width={100}/>
                    </div>
                    <h2>
                        Streamers
                    </h2>
                    <p style={{lineHeight: 1.5}}>
                    When the video is uploaded is also when the 48 hour timer starts for the streamers. The goal for the streamers is to get a highscore in one of the three games. Once the timer runs out the streamers submit their VOD and the player who achieves the highest score in each game wins. 
                    </p>
                </SectionBox>

                <SectionBox  pStyle={{color: `white`}}>
                    <QuoteBox/>
                </SectionBox>
            </section>
            <Footer/>
        </div>
    );
}

export default Home;