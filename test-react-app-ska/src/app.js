import React, { Component } from "react";
import Counter from './components/counter';
import TestRedux from "./testredux";
import ButtonGroup from "./components/buttongroup";
import {store} from "./store";


class App extends Component {
  render() {
      //Note: this returns an array of elements
    return [ 
        <Counter />,
      <TestRedux key={1} tech={store.getState().tech} />,
      <ButtonGroup key={2} technologies={["React", "Javascript", "Angular"]} />
    ];
  }
}

export default App;