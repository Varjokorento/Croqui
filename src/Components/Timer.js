import React, { Component } from 'react'

export default class Timer extends Component {


  render() {
    return (
      <div>
        <p>{this.props.time}</p>
      </div>
    )
  }
}
