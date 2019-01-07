import React, { Component } from 'react'; 
import './app.css';
import axios from 'axios'; // Axios is a lightweight HTTP client based on the $http service Using Axios to access the common JSON Placeholder API within a React application
//https://jsonplaceholder.typicode.com/ is being used as a fake json REST API server


export default class Counter extends Component { 
    
    constructor () {
        super()
        this.state = {
            persons: [],
            value: 1
          }
        this.handleClick = this.handleClick.bind(this)
      }
      handleClick () {
        console.log('Success!')
        axios.get(`https://jsonplaceholder.typicode.com/users`)
        .then(res => {
          const persons = res.data;
          this.setState({ persons });
        })
      }
  

   render() { 
       return (
           <div>
       <h1>Hello - Welcome to Snehal's React training examples page</h1>
       <div className='button_container'>
       <button className='increment_button' onClick={() => { this.setState({ value: this.state.value + 1 }) }}>Increment</button>
       <span className='counter_span'>{ this.state.value }</span>
       <div>
       <button className='button' onClick={this.handleClick}>Get Users from https://jsonplaceholder.typicode.com/ mock REST API</button>
       </div>
       <div>
       <ul>
        { this.state.persons.map(person => <li>{person.name}</li>)}
      </ul>
       </div>
      </div>
       </div>
       );
   }
}