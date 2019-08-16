import React, {useState, Component} from 'react';
import PC from '../assets/pc.png'
import './style/QuoteBox.css'

class QuoteBox extends Component{
    constructor(props){
        super(props);
        this.quotes = [
            {
                text: "Having devs make a game with high scores arcade style with streamers promoting them and trying for the high score is basically playing at an arcade from the comfort of your home. Fantastic.",
                image: PC,
                author: "Alan",
                title: "Alan's Beer and Gaming"
            },
            {
                text: "I like this idea because it gives game-devs real time genuine feedback on what implementations streamers like and don’t like in their games. Great idea.",
                image: PC,
                author: "Thomas Milworth",
                title: ""
            }
        ]

        this.quoteIndex = 0;

        this.state = {
            quote: this.quotes[this.quoteIndex]
        }
    }

    updateIndex(x){
        this.quoteIndex += x;

        if(this.quoteIndex >= this.quotes.length ){
            this.quoteIndex = 0;
        }


        this.setState({
            quote: this.quotes[this.quoteIndex]
        })
    }

    leftArrowClicked(){
        this.updateIndex(-1)
    }

    rightArrowClicked(){
        this.updateIndex(1)
    }

    render(){

        return(
            <div className="QuoteBox">
                <div className="ArrowIcon" onClick={this.leftArrowClicked.bind(this)}>
                    <b>
                    {"⮜"}
                    </b>
                </div>

                <div className="Quote">
                    <b>{this.state.quote.text}</b>
                    <span style={{fontSize: 18, fontWeight: 50, marginTop: 10}}>{this.state.quote.author}</span>
                    <span style={{fontSize: 18, fontWeight: 50}}>{this.state.quote.title}</span>
                </div>


                <div className="ArrowIcon" onClick={this.rightArrowClicked.bind(this)}>
                    <b>
                    {"⮞"}
                    </b>
                </div>
            </div>
        );
    }
}
export default QuoteBox;