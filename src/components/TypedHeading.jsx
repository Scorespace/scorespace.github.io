import React, {Component} from 'react';
import './style/TypedHeading.css'
import { Row, Column } from './Grid';
import Body from './Body';


class TypedHeading extends Component{
    constructor(props){
        super(props);

        this.state = {
            isIntersecting: false
        };
        this.node = React.createRef(null);

        const callback = (entries) => {
            this.setState({
                isIntersecting: entries[0].isIntersecting
            });
        }   

        this.observer = new IntersectionObserver(callback)
    }

    componentDidMount(){
        if(this.node.current) this.observer.observe(this.node.current);
    }

    componentWillUnmount(){
        this.observer.disconnect(this.node.current);
    }
    
    render(){
        if(this.state.isIntersecting){
            this.node.current.classList.add("TypingAnimation");
        }

        return(
            <Row>
                <Column>
                    <h1 className="TypedHeading" ref={this.node}>
                        {this.props.children}      
                    </h1>
                </Column>
            </Row>
        );
    }
}

export default TypedHeading;

export class FadeBody extends Component{
    constructor(props){
        super(props);

        this.state = {
            isIntersecting: false
        };
        this.node = React.createRef(null);

        const callback = (entries) => {
            this.setState({
                isIntersecting: entries[0].isIntersecting
            });
        }   

        this.observer = new IntersectionObserver(callback)
    }

    componentDidMount(){
        if(this.node.current) this.observer.observe(this.node.current);
    }

    componentWillUnmount(){
        this.observer.disconnect(this.node.current);
    }
    
    render(){
        if(this.node.current){
            if(this.state.isIntersecting){
                this.node.current.classList.add("FadeAnimation");
            }
        }   

        return(
            <Body>
                    <div ref={this.node} className={`FadeBody ${this.props.class}`} style={this.props.style}>
                        {this.props.children}
                    </div>      
            </Body>
        );
    }
}


