import React from 'react';
import Background from '../../assets/space_background.png';
import {TopbarMargin, BaseMargin} from '../Topbar';
import SectionBox from '../SectionBox';
import Logo from '../../assets/logo.png';
import Footer from '../Footer';

import Space from '../../assets/JamLogos/space.png';
import Waves from '../../assets/JamLogos/waves.png';
import Underground from '../../assets/JamLogos/underground.png';
import Growth from '../../assets/JamLogos/growth.png';
import Destruction from '../../assets/JamLogos/destruction.png';
import Karma from '../../assets/JamLogos/karma.png';
import Gravity from '../../assets/JamLogos/gravity.png';
import Balance from '../../assets/JamLogos/balance.png';

var listOfJams = [
    {
        logo: Logo,
        title: "The First ScoreSpace Game Jam!",
        link: "https://itch.io/jam/scorejam1",
        desc: "Where it all began; the theme was 'Space.'",
        pic: Space
    },

    {
        logo: Logo,
        title: "Scorespace Jam #2",
        link: "http://jams.gamejolt.io/scorejam2",
        desc: "Waves are absolutely everywhere - sound waves, sea waves, shockwaves or even waves of zombies or orcs! This makes it a perfect theme; your game could be anything from a wave-based shooter to an experimental puzzle game involving sound. We're sure that the community will come up with many crazy ideas that didn't even cross our minds for a second. If you have a great idea, get out there and make it!",
        pic: Waves
    },

    {
        logo: Logo,
        title: "The New ScoreSpace Game Jam!",
        link: "https://itch.io/jam/scorejam3",
        desc: "The theme is... UNDERGROUND! There’s an undeniable sense of mystery to do with everything underground, whether that means simply below the earth, or an outside of mainstream view. This is why we picked it for this jam; there is so much potential for creativity!",
        pic: Underground
    },

    {
        logo: Logo,
        title: "ScoreSpace Jam #4",
        link: "https://itch.io/jam/scorejam4",
        desc: "The theme is... GROWTH!",
        pic: Growth
    },

    {
        logo: Logo,
        title: "ScoreSpace Jam #5 [Presented by Shacknews]",
        link: "https://itch.io/jam/scorejam5",
        desc: "The theme is... DESTRUCTION",
        pic: Destruction
    },

    {
        logo: Logo,
        title: "ScoreSpace Jam #6 [Presented by Shacknews]",
        link: "https://itch.io/jam/scorejam6",
        desc: "The theme for the 6th ScoreSpace jam (sponsored by @shacknews) is..... ✨KARMA✨",
        pic: Karma
    },

    {
        logo: Logo,
        title: "ScoreSpace Jam #7 [Presented by Shacknews]",
        link: "https://itch.io/jam/scorejam7",
        desc: "The theme for the 7th ScoreJam presented by @shacknews is... GRAVITY!!! It's what holds our universe together and it is what will alter your game universe. There are so many ways to interpret this theme and we can't wait to see the games you create :D #doitforshacknews #indiedev",
        pic: Gravity
    },

    {
        logo: Logo,
        title: "ScoreSpace Jam #8",
        link: "https://itch.io/jam/scorejam8",
        desc: "The theme for the 8th ScoreSpace Jam is... BALANCE!!! ",
        pic: Balance
    }
]

function Contact(props){
    var items = listOfJams.map(
        (item, key) => {
            var style = {};
            if(key % 2 == 0){
                style.backgroundColor = "#09021f";
            } else{
                style.backgroundColor = "#090015";
            }

            return(
                <SectionBox style={style}>
                    <img src={item.pic} style={{width: 200, float: "left"}}/>
                    <h2>{item.title}</h2> 
                    <a href={item.link} style={{color:"#00C0FF"}}>{item.link}</a>
                    <p> "{item.desc}" </p>
                </SectionBox>
            )
        }
    );

    return(
        <div>
            <section className="Banner" style={{background:`url(${Background})`, width: "100%", height: "auto", position: "absolute", backgroundSize: "100%", backgroundPosition: "0% -53%"}}>
                <TopbarMargin/>
                <SectionBox style={{height: "auto"}}>
                    <h2>Previous Jams</h2>
                    <p>
                    Here is a list of all of the previous ScoreSpace game jams. 
                    </p>
                </SectionBox>
                {items}
                <Footer/> 
            </section>        
        </div>
    );
}

export default Contact;