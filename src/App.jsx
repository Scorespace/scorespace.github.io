import React from 'react';
import './global.css';
import Topbar, {TopbarMargin} from './components/Topbar';
import {Row, Column} from './components/Grid';

import Banner from './assets/scorespace_banner.png';

import Home from './components/pages/home';
import Streamers from './components/pages/streamers';
import Gamedevs from './components/pages/gamedevs';
import Contact from './components/pages/contact';


import Switch from 'react-router-dom/Switch';
import Route from 'react-router-dom/Route';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
        <Topbar/>
        
        <Switch>
            <Route path="/gamedevs" component={Gamedevs}/>
            <Route path="/streamers" component={Streamers}/>
            <Route path="/contact" component={Contact}/>
            <Route path="/" component={Home}/>
        </Switch>
        
    </div>
  );
}

export default App;
