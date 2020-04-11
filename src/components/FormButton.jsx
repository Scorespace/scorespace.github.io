import React from 'react';
import './style/FormButton.css';

export default class Button extends React.Component {
	constructor(props) {
		super(props);
		this.state = {label: props.label || ''};
	}
	
	render () {
		return (
			<div className='form-button' onClick={this.props.onClick}>
				{this.state.label}
			</div>
		);
	}
}