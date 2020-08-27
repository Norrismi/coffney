import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import "bootstrap/dist/css/bootstrap.css";
import {StateProvider} from './components/ContextAPI/StateProvider'
import reducer, {initialState} from './components/ContextAPI/Reducer'
import firebase from "firebase";



const functions = require('firebase-functions')
let config = require('./env.json')

if(Object.keys(functions.config()).length){
config = functions.config()
}



// const firebaseApp = 
firebase.initializeApp({
    apiKey: config.service.api_key, 
    projectId: config.service.api_project_id, 

});

//const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };



ReactDOM.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>

    <App />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
