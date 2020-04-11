import React from 'react';
import PC from '../../assets/pc.png';
import { TopbarMargin, BaseMargin } from '../Topbar';
import TypedHeading, {FadeBody} from '../TypedHeading';
import Background from '../../assets/space_background.png';
import SectionBox from '../SectionBox';
import Footer from '../Footer';


function Gamedevs(props){
    return(
        <div>
            <section style={{background:`url(${Background})`, height: "auto", position: "absolute", backgroundSize: "100%", backgroundPosition: "0% -53%"}}>
                <TopbarMargin/>
                <SectionBox style={{height: "auto"}}>
                    <img src={PC} width={200} style={{marginBottom: 40, marginTop: "51px"}}/>
                    <h2>Gamedevs</h2>
                    <p>
                    This is where the jam begins; the game developers have 72 hours to make a game with any kind of score system. This can be an online leaderboard or just an offline value that is clearly shown in the game.
                    Once they've done this, a rating period will begin, where the other jam participants rate each game. The rating period is critical; it determines who wins this portion!
                    </p>
                    <BaseMargin/>
                </SectionBox>

                <SectionBox style={{backgroundColor: "white"}} pStyle={{color: "black", textAlign: "left"}}>
                    <h2>Rules</h2>
                    <p>
                        <ol style={{textAlign: "left"}}>
                            <li>All games must include a leaderboard system (offline or online) so that the streamers can compete for the highscore if you happen to win the contest.</li>
                            <li>You can compete in teams of up to 4. You can find other people to team up with on our Crowdforge page.</li>
                            <li>All game engines (and frameworks) are allowed, as long as no actual game content / mechanics are implemented before the jam.</li>
                            <li>Games that are NSFW should have a warning in the description or when the game first loads up.</li>
                            <li>You and your team must make everything from scratch during the event. If you use any pre-made assets or game-creation frameworks you must list them in the description of the game.</li>
                            <li>All games submitted must be digital games that can be played on the Web or Windows.</li>
                        </ol>
                    </p>
                </SectionBox>

                <Footer/>
            </section>
        </div>
    );
}

export default Gamedevs;