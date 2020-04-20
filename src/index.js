import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import fruits from './foods';
import {choice, remove} from './helpers';

let fruit = choice(fruits);

console.log(`I’d like one RANDOMFRUIT, please ${fruit}, please`);
console.log(`Here you go: ${fruit}`);
console.log('Delicious! May I have another?');

remove(fruits, fruit);

console.log(`I’m sorry, we’re all out. We have ${fruits.length} left`)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
