import React from 'react';
import './global.css';
import Topbar, {TopbarMargin} from './components/Topbar';
import {Row, Column} from './components/Grid';

import Banner from './assets/scorespace_banner.png';

import MakeGames from './components/pages/makegames';
import PlayGames from './components/pages/playgames';
import Home from './components/pages/home';
import Contact from './components/pages/contact';
import PreviousJams from './components/pages/prevjam';
import Leaderboard from './components/pages/leaderboard';


import Switch from 'react-router-dom/Switch';
import Route from 'react-router-dom/Route';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
        <Topbar/>
        
        <Switch>
            <Route path="/contact" component={Contact}/>
            <Route path="/prevjam" component={PreviousJams}/>
            <Route path="/leaderboard" component={Leaderboard}/>
            <Route path="/makegames" component={MakeGames}/>
            <Route path="/playgames" component={PlayGames}/>
            <Route exact path="/" component={Home}/>
        </Switch>
        
    </div>
  );
}

export default App;
