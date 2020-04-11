import React from 'react';
import {ReactComponent as SelectArrow} from '../assets/SelectArrow.svg';

import './style/Select.css';

export default class Select extends React.Component {
	constructor(props) {
		super(props);

		this.id = 's' + ~~(Math.random() * 99999);
		this.state = {value: 0, open: false};
		this.value = this.state.value;
	}

	element(main, obj, i) {
		return (
			<div className="element" key={i} onClick={!main ? () => {
				this.setState({value: i, open: false});
				this.value = i;
			} : null}>
				{obj.image ? <img src={obj.image} /> : null}
				<span>{obj.name}</span>
			</div>
		);
	}

	componentDidMount() {
		this.onMouseUpBind = this.onMouseUp.bind(this);
		window.addEventListener('mouseup', this.onMouseUpBind);
	}

	componentWillUnmount() {
		window.removeEventListener('mouseup', this.onMouseUpBind);
	}

	onMouseUp(e) {
		let el = e.target;
		while (el !== null) {
			if (el.className && (el.className === 'select' && el.id === this.id))
				return;
			el = el.parentElement;
		}
		this.setState({open: false});
	}

	toggleOpen() {
		this.setState({
			open: !this.state.open
		});
	}

	render() {
		let elements = this.props.elements;
		let selected = elements ? elements[this.state.value] : null;
		return (
			<div className={"select" + (this.state.error?' error':'')} id={this.id}>
				<div className="main" onClick={this.toggleOpen.bind(this)}>
					{selected && this.element(true, selected, this.state.value)}
					<div className="open-arrow">
						<SelectArrow />
					</div>
				</div>
				{this.state.open &&
					<div className="menu">
						{elements && elements.map(this.element.bind(this, false))}
					</div>
				}
			</div>
		)
	}
}