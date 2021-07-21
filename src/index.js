import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import GMap from './components/GMap'
//import GMap2 from './components/GMap2'
import registerServiceWorker from './registerServiceWorker';
//import  GoogleMap  from './components/GoogleMap';

ReactDOM.render(<GMap />, document.getElementById('root'));
registerServiceWorker();
