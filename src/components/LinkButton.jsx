import React, {Component} from 'react';
import Button from './Button';
import {withRouter} from 'react-router-dom';

class LinkButton extends Component{
    constructor(props){
        super(props);
        this.state = {
            redirect: false
        };

        this.handleClick = () => {
            window.scrollTo(0, 0);
            this.props.history.push(this.props.link)
        }
    }

    render(){
    
        return(
            <Button onClick={this.handleClick}>
                {this.props.children}
            </Button>
        );
    }
}
export default withRouter(LinkButton);