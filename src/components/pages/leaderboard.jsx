import React from 'react';

import Select from '../Select';
import Input from '../Input';
import Button from '../FormButton';

import Background from '../../assets/space_background.png';
import {TopbarMargin, BaseMargin} from '../Topbar';
import SectionBox from '../SectionBox';
import Logo from '../../assets/logo.png';
import Footer from '../Footer';

import Loading from '../Loading';
import {ReactComponent as TwitchLogo} from '../../assets/twitch.svg';
import '../style/TwitchLogin.css';
import '../style/Leaderboard.css';

const CLIENT_ID = "366ayo1qq1zw0mbhq50ky99sz71e4f";
const TWITCH_AUTH = 'https://id.twitch.tv/oauth2/authorize?client_id=' + CLIENT_ID + 
						'&redirect_uri=' + encodeURIComponent('https://scorespace.net/#/leaderboard') + 
						'&response_type=code';
function TwitchButton() {
	return (
		<a className="twitch-login" href={TWITCH_AUTH}>
			<TwitchLogo />
			Login with Twitch
		</a>
	);
}

function send(method, url, query, callback) {
	let xhr = new XMLHttpRequest();
	xhr.open(method, url + (query ? '?' + Object.keys(query).map(key => encodeURIComponent(key) + '=' + encodeURIComponent(query[key])).join('&') : ''), true);
	xhr.onreadystatechange = () => {
		if (xhr.readyState !== 4)
			return;

		if (xhr.status !== 200) {
			console.log('Failed: ', xhr);
		} else {
			let body = xhr.responseText;
			try {
				body = JSON.parse(body);
			} catch (e) {}
			console.log(body);
			callback(body);
		}
	}
	xhr.send();
}

const ENDPOINT = 'https://server.scorespace.net:3322';
function loadLeaderboard(onSuccess) {
	send('GET', ENDPOINT + '/board', null, onSuccess);
}
function auth(code, onSuccess) {
	send('POST', ENDPOINT + '/auth', {code}, function (res) {
		onSuccess(res.token, res.users);
	});
}
function fastAuth(code, onSuccess) {
	send('POST', ENDPOINT + '/fast-auth', {code}, onSuccess);
}
function upload(code, game, score, user, proof, onSuccess) {
	send('POST', ENDPOINT + '/upload', {
		code, game, score, user, proof
	}, onSuccess);
}

function parseQuery(queryString) {
	let obj = {};
	let params = queryString.split('&');
	for (let i = 0; i < params.length; ++i) {
		let equalsIndex;
		if ((equalsIndex = params[i].indexOf('=')) < 0)
			obj[decodeURIComponent(params[i])] = true;
		else {
			let key = params[i].substring(0, equalsIndex);
			let value = params[i].substring(equalsIndex+1);
			obj[decodeURIComponent(key)] = decodeURIComponent(value);
		}
	}
	return obj;
}
function takeCode() {
	let href = window.location.href;
	let hash = window.location.hash, 
		url = href.indexOf('#') >= 0 ? href.substring(0, href.indexOf('#')) : href,
		query = null;
	if (hash.indexOf('?') >= 0) {
		query = parseQuery(hash.substring(hash.indexOf('?') + 1));
		window.location.hash = hash.substring(0, hash.indexOf('?'));
	} else if (url.indexOf('?') >= 0)
		query = parseQuery(url.substring(url.indexOf('?') + 1));

	if (query != null && query.code)
		return query.code;
	return null;
}

function readToken() {
	if (localStorage.getItem('token'))
		return localStorage.getItem('token');
	return null;
}
function saveToken(token) {
	localStorage.setItem('token', token);
}
class SubmitForm extends React.Component {
	constructor(props) {
		super(props);
		this.button = React.createRef();
		this.gameInput = React.createRef();
		this.userInput = React.createRef();
		this.scoreInput = React.createRef();
		this.proofInput = React.createRef();
	}
	render() {
		// let games = props.games.map((g, i) => ({label: g.name, value: i}));
		// let users = props.users.map((u, i) => ({label: u.name, value: i, icon: u.image}));
		return (
			<div className='score-submit'>
				<span className="label">Game</span>
				<Select ref={this.gameInput} elements={this.props.games} />
				<br />
				<span className="label">Twitch user</span>
				<Select ref={this.userInput} elements={this.props.users} />
				<br />
				<span className="label">Score</span>
				<Input ref={this.scoreInput} placeholder="Score (number)" />
				<br />
				<span className="label">Footage proof link</span>
				<Input ref={this.proofInput} placeholder="Link to Twitch VOD/YouTube video " />
				<br />
				<Button ref={this.button} label='Submit' onClick={() => {
					let user = this.props.users[this.userInput.current.value];
					let game = this.gameInput.current.value;
					let score = parseFloat(this.scoreInput.current.value);
					if (isNaN(score))
						return this.scoreInput.current.error();

					let proof = this.proofInput.current.value;
					if (proof.length == 0)
						return this.proofInput.current.error();

					upload(this.props.token, 
						   game, 
						   score, 
						   user.id,
						   proof, () => {
						this.button.current.setState({label: "Success!"})
						this.props.onSubmit();
					});
				}} />
			</div>
		);
	}
}

export default class LeaderboardPage extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			token: readToken(),
			authed: false,
			users: null,

			login: "",

			board: null
		};
		let code = takeCode();
		if (code !== null) {
			auth(code, (token, users) => {
				saveToken(token);
				this.setState({authed: true, users, token});
			});
		} else if (this.state.token !== null) {
			fastAuth(this.state.token, (users) => {
				this.setState({authed: true, users});
			});
		}

		this.update();
	}

	board(i, game, data) {
		let elements = data.map((element, j) => (
			<tr key={j}>
				<td>{element.place}.</td>
				<td className="streamer">
					<img src={element.image} />
					<span><a href={element.link}>{element.name}</a></span>
				</td>
				<td>
					<a href={element.proof}>{element.score}</a>
				</td>
			</tr>
		));
		if (elements.length == 0)
			elements = <tr><td className="empty" colSpan={3}>Empty</td></tr>

		return (
			<div className="table" key={i}>
				<table>
					<tbody>
						<tr>
							<th colSpan={3}><a href={game.link}>{game.name}</a></th>
						</tr>
						<tr>
							<th>Place</th>
							<th>Streamer</th>
							<th>Score</th>
						</tr>
						{elements}
					</tbody>
				</table>
			</div>
		);
	}

	allboards(data) {
		return data.board.map((board, i) => this.board(i, data.games[i], board));
	}

	update() {
		loadLeaderboard(board => {
			this.setState({loading: false, board});
		});
	}

	render() {
		return (
			<div>
				<TopbarMargin/>
                <SectionBox style={{height: "auto"}}>
                    <h2>ScoreSpace #10 Leaderboard</h2>
                    <p>Here is a live leaderboard of twitch streamers:</p>
                    {
                    	this.state.board === null ? 
                    		<Loading /> : 
                    		<div className="leaderboard">
                    			{this.allboards(this.state.board)}
                    		</div>
                    }
                    <br />
                    {
                    	this.state.authed ? (
                    			this.state.board === null ? 
	                    			<Loading /> :
	                    			<SubmitForm
	                    				users={this.state.users}
	                    				games={this.state.board.games}
	                    				token={this.state.token}
	                    				onSubmit={this.update.bind(this)}
	                    			 />
                    		) :
	                    	<p>If you are a streamer, login with Twitch and submit your score: <br /><TwitchButton /></p>
	                }
                </SectionBox>
                <Footer />
			</div>
		);
	}
}