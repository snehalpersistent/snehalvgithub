import React, { Component } from 'react'; 
import './app.css';

export default class DemoCheckBox extends Component { 
    
    constructor () {
        super()
        this.state = {
            isAttending: true
          }
      //    this.handleInputChange = this.handleInputChange.bind(this);
      }
    
     
      handleInputChange = () => {
        this.setState(prevState => ({
            isAttending: !prevState.isAttending
        }));
      }
   render() { 
    var attendingLabel ='';
       if(this.state.isAttending === true)
            attendingLabel = 'Attending'
        else
            attendingLabel =' Not Attending'
       return (
           <div>
       <label>
          Is attending meeting ?:
          <input
            name="isAttending"
            type="checkbox"
            checked={this.state.isAttending}
            onChange={this.handleInputChange} />
        </label>
        <label>I'm {attendingLabel}</label>
       </div>
       
       );
   }
}