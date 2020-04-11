import React from 'react';

import './style/Input.css';

export default class Input extends React.Component {
	constructor(props) {
		super(props);
		this.state = {error: false};
		this.ref = React.createRef();
		this.value = this.default || '';
		this.lastError = -1;
	}
	onChange() {
		this.value = this.ref.current.value;
		return true;
	}
	error() {
		this.setState({error: true});
		this.lastError = Date.now();
		setTimeout(() => {
			if (Date.now() - this.lastError >= 500)
				this.setState({error: false});
		}, 500);
	}
	render() {
		return (
			<div className={"input" + (this.state.error?' error':'')}>
				<input type="text"
					ref={this.ref}
					onKeyPress={this.onChange.bind(this)}
					onChange={this.onChange.bind(this)} 
					placeholder={this.props.placeholder} />
			</div>
		);
	}
}