import React from 'react';
import Controller from '../../assets/controller.png';
import Background from '../../assets/space_background.png';
import {TopbarMargin, BaseMargin} from '../Topbar';
import SectionBox from '../SectionBox';
import Footer from '../Footer';

function Streamers(props){
    return(
        <div>
            <section className="Banner" style={{background:`url(${Background})`, height: "auto", position: "absolute", backgroundSize: "100%", backgroundPosition: "0% 62%"}}>
                <TopbarMargin/>
                <SectionBox>
                    <img src={Controller} width={200} style={{marginBottom: 25}}/>
                    <h2>Streamers</h2>
                    <p>
                    After the game developers are finished, the streamer's portion of the jam begins. The streamers compete against each other in order to get the highest score in each of the winning games; they will then submit recordings of themselves achieving these scores as evidence.
                    The highest scoring legitimate streamers will be announced as the winner.
                    </p>
                    <BaseMargin/>
                </SectionBox>

                <SectionBox style={{backgroundColor: "white"}} pStyle={{color: "black", textAlign:"left"}}>
                    <h2>Rules</h2>
                    <p>
                        <ol>
                            <li>Anyone can participate, as long as they record their score. However, streaming is encouraged.</li>
                            <li>You MUST fill in the signup form after you have your final score.</li>
                            <li>You MUST submit some kind of recording, i.e a VOD or YouTube video.</li>
                            <li>Any game-altering software (even with developer consent) is NOT allowed. </li>
                            <li>If you're a developer, you cannot play your own game. You can, however, play games made by other contestants.</li>
                        </ol>
                    </p>
                </SectionBox>
                <Footer/>
            </section>
            
        </div>  
    );
}

export default Streamers;