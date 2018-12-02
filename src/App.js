import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './Components/Card';
import {Button, ButtonGroup, ButtonToolbar, ToggleButtonGroup, ToggleButton, FormControl, FormGroup} from 'react-bootstrap';

class App extends Component {

  state = {
    time: 10,
    flag: false,
    value: "",
    pictures: "null"
  }

  startDrawing = () => {
    let timevalue = this.state.value
    this.setState(prevState => ({flag: !prevState.flag, time: timevalue}))
  }

  
  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  handleAnimal = () => {
    this.setState({
      pictures: "Animal"
    })
  }

  handlePeople  = () => {
    console.log(this.state);
    this.setState({pictures: "People"})
  }
  

  render() {
    return (
      <div className="App">
      <div className="container">
      <div className="text-center">
      </div>
      <FormGroup>
      <Button onClick={this.startDrawing}>Click me</Button>
      <FormControl
            type="text"
            value={this.state.value}
            placeholder="Enter time"
            onChange={this.handleChange.bind(this)}
          />
      <ButtonToolbar>
        <ButtonGroup>
          <Button onClick={this.handleAnimal}>Animals</Button>
          <Button onClick={this.handlePeople}>People</Button>
        </ButtonGroup>;
      </ButtonToolbar>
      </FormGroup>
      </div>
      {this.state.flag ? (
      <Card time={this.state.time} pictures={this.state.pictures}/>) :(null) }
      </div>
    );
  }
}

export default App;
