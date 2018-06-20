import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import * as firebase from 'firebase';

const config = {
  apiKey: "xyz",
  authDomain: "fir-react-jabernathy.firebaseapp.com",
  databaseURL: "https://fir-react-jabernathy.firebaseio.com",
  projectId: "fir-react-jabernathy",
  storageBucket: "",
};

firebase.initializeApp(config)

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
