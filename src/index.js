import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import * as firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBZtvtCZgNePY-JSsgfo3K_vBPJPoQRZFo",
  authDomain: "cart-1a123.firebaseapp.com",
  databaseURL: "https://cart-1a123.firebaseio.com",
  projectId: "cart-1a123",
  storageBucket: "cart-1a123.appspot.com",
  messagingSenderId: "77821660682",
  appId: "1:77821660682:web:911781bad4959fa30419f3"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
    <App />,
  document.getElementById('root')
);