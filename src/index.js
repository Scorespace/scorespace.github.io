import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import {HashRouter} from 'react-router-dom';

ReactDOM.render(
    <div>
    	<HashRouter>
    		<App />
    	</HashRouter>
    </div>,
    document.getElementById("root")
)