import React from 'react'; 
import ReactDOM from 'react-dom'; 
import App from './app';
import {store } from './store';

//Main fle rendering the root html element from App commponent
const render = function() {
    ReactDOM.render(<div>
        <App />
        </div>, document.getElementById('root'));
 }
 render()
 store.subscribe(render);

