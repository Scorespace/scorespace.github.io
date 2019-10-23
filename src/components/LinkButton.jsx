import React, {Component} from 'react';
import NavLink from 'react-router-dom/NavLink';
import {withRouter} from 'react-router-dom';

class LinkButton extends Component{
    constructor(props){
        super(props);
        this.state = {
            redirect: false
        };
    }

    render(){
    
        return(
            <NavLink exact={this.props.exact} className="Button" to={this.props.link}>
                {this.props.children}
            </NavLink>
        );
    }
}
export default withRouter(LinkButton);