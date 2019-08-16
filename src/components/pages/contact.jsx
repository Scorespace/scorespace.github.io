import React from 'react';
import Background from '../../assets/space_background.png';
import {TopbarMargin, BaseMargin} from '../Topbar';
import Jumbotron from '../Jumbotron';
import Mailbox from '../../assets/mailbox.png';
import Discord from '../../assets/discord_logo.png';
import Email from '../../assets/envelope.png';
import Reddit from '../../assets/reddit_logo.png';
import Twitter from '../../assets/twitter_logo.png';
import Footer from '../Footer';

const discord_color = "#2C2F33";
const email_color = "gray";
const twitter_color = "#1da1f2";

function Contact(props){
    return(
        <div>
            <section style={{background:`url(${Background})`, width: "100%", height: "auto", position: "absolute", backgroundSize: "100%", backgroundPosition: "0% -53%"}}>
                <TopbarMargin/>
                <Jumbotron style={{height: "75vh"}}>
                    <img src={Mailbox} width={200} style={{marginBottom: 40}}/>
                    <h2>Contact</h2>
                    <p>
                    If you need to get in contact with us (or other members of the community) you've come to the right place! 
                    </p>
                </Jumbotron>

                <Jumbotron style={{backgroundColor: discord_color}} pStyle={{color: "white"}}>
                    <img src={Discord} width={200}/>
                    <p>
                    Discord is by far the fastest way to reach us. If you want to discuss general gamedev, jam ideas & suggestions for future scorespace jams this is the place to be. You can join us <a href="https://invite.gg/scorespace">here.</a>
                    </p>
                </Jumbotron>

                <Jumbotron style={{backgroundColor: email_color}} pStyle={{color: "white"}}>
                    <img src={Email} width={100}/>
                    <p>
                    If you have a more professional enquiry (i.e sponsorship, business deal etc.) you can contact us at <a href="mailto:info@scorespace.net">info@scorespace.net</a>
                    </p>
                </Jumbotron>

                <Jumbotron style={{backgroundColor: twitter_color}} pStyle={{color: "white"}}>
                    <img src={Twitter} width={100}/>
                    <p>
                    If you want to keep up with our news and see what other developers are doing, you can follow us on twitter for some quality content! You can follow us <a href="https://twitter.com/scorespacejam">here.</a>
                    </p>
                </Jumbotron>

                <Jumbotron style={{backgroundColor: "white"}} pStyle={{color: "black"}}>
                    <img src={Reddit} width={200}/>
                    <p>
                    While it may not be the most active, our subreddit is still a cool place to post your gamedev content. You can browse it <a href="https://reddit.com/r/scorespace">here.</a>
                    </p>
                </Jumbotron>

                
            </section>
            <Footer/>
        </div>
    );
}

export default Contact;