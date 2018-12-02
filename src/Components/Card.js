import React, { Component } from 'react'
import {Jumbotron, Button, ButtonGroup} from 'react-bootstrap';
import Timer from './Timer';

export default class Card extends Component {

    state= {
        hasBeenClicked:false,
        peopleimageurl: ["https://cdn.pixabay.com/photo/2015/07/28/19/21/person-864804_1280.jpg", "https://i.imgur.com/FJUHwPh.jpg"],
        animalimageurl: ["https://i.redd.it/9kafs64ubr121.jpg", "https://i.redd.it/vqhk43no9pw11.jpg"],
        imageUrl: "",
        time: this.props.time,
        imageIncrement: 0,
        pictures: this.props.pictures
    }


  renderAnother = () => {
      this.setState({
          hasBeenClicked: true
      })
  }


  handlePeoplePictures  = () => {
    let currentImage = this.state.imageIncrement;
    currentImage++;
    console.log(currentImage, "THIS IS CURRENT")
    if(currentImage > this.state.peopleimageurl.length) {
      currentImage= 0;
    } else {
      currentImage = this.state.imageIncrement++;
    }

    let newImageUrl = this.state.peopleimageurl[currentImage];
    this.setState({
      imageUrl: newImageUrl
    })
    this.setState({
      imageIncrement: currentImage
    })
    }
  

  handleAnimalPictures = () => {
    let currentImage = this.state.imageIncrement;
    if(currentImage == this.state.animalimageurl.length) {
      currentImage= 0;
    } else {
      currentImage = this.state.imageIncrement++;
    }
    let newImageUrl = this.state.animalimageurl[currentImage];
    this.setState({imageUrl: newImageUrl})
    }
  

  switchPhoto = () => {

    if(this.state.pictures == "People") {
      this.handlePeoplePictures()
    } else {
      this.handleAnimalPictures()
    }  
  }

  componentDidMount() {
    let imageUrl = this.state.peopleimageurl[0];
    this.setState({
      imageUrl:imageUrl
    })
    this.startTimer();
  }

  startTimer = () => {
    setInterval(this.countDown.bind(this), 1000);
  }

  countDown() {
    let time;
    if(this.state.time == 0) {
      time = this.props.time;
    } else {
    // Remove one second, set state so a re-render happens.
    time = this.state.time - 1;
    }
    this.setState(() => ({
      time: time
    }), () => {
        this.checkPicture()
    })
  }

  checkPicture = () => {
    if(this.state.time == 0) {
      this.switchPhoto()
    }
  }
    
  render() {
    return (
      <div className="container">
        <div>
        <Jumbotron>
        <div className="text-center">
        <img src={this.state.imageUrl}></img>
        </div>
        <p>
          <div class="text-center">
          <div class="row" role="group" aria-label="Basic example">
          <div class="col">
          <button type="button" class="btn btn-secondary">Left</button>
          </div>
          <div class="col">
          <Timer time={this.state.time}/>
          </div>
          <div class="col">
          <button type="button" class="btn btn-secondary" onClick={this.switchPhoto}>Changephoto</button>  
          </div>
        </div>
        </div>
        </p>
      </Jumbotron>
      </div>
</div>
    )
  }
}
