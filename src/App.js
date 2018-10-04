import React, { Component } from 'react';
import './App.css';
import {Attendee} from './attendee.js'
import {ManageAttendees} from './manage-attendees.js'


class App extends Component {
  constructor(){
    super()
    this.state = {attendees:[{name:'Joe',color:'orange'},
      {name:'Tom',color:'green'},
      {name:'Greg',color:'blue'},
      {name:'Suzie',color:'yellow'},
      {name:'Beth',color:'brown'},
      {name:'Kelly',color:'red'}]}
      this.handleSubmit = this.handleSubmit.bind(this)
      this.handleClick = this.handleClick.bind(this)
  }
  handleSubmit(e){
    e.preventDefault() //will stop default form submit event
    if(this.state.addOrRemove === 'add'){
      let tempObj = {}
      tempObj.name = e.target.name.value //value attribute of my name input field
      tempObj.color = e.target.color.value //value attribute of my color input field
      this.setState({attendees:[...this.state.attendees,tempObj]}) //updating state using spread operator so I do not overwrite my current array
      document.getElementById("manageAttendeesForm").reset(); //targets my form to reset input fields
    }else if(this.state.addOrRemove === 'remove'){
      console.log("in remove");
      let removeMe = e.target.name.value
      let tempArr = this.state.attendees
      for (var i = 0; i < tempArr.length; i++) {
        if (tempArr[i].name.toLowerCase().trim() === removeMe.toLowerCase().trim()) {
          tempArr.splice(i,1)
          i--;
          this.setState({attendees:tempArr})
        }
      }
      document.getElementById("manageAttendeesForm").reset();
    }else{
      return;
    }
  }
  handleClick(e){
    if(e.target.name === 'add'){
      this.setState({addOrRemove:'add'})
    }else{
      this.setState({addOrRemove:'remove'})
    }
  }
  render() {
    return (
      <div className="container">
        <h1 className='text-center'>Attendees</h1>
        <ManageAttendees handleOnSubmit={this.handleSubmit} handleOnClick={this.handleClick} />
        <Attendee attendees={this.state.attendees} />
      </div>
    );
  }
}

export default App;
