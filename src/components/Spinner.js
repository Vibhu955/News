import React, { Component } from 'react'
import spin from './Spinnergif.gif'

export default class Spin extends Component {
  render() {
    return (
      <div className='spin' style={{position:"absolute", left:"45%",top:"45%"}}>
        <img src={spin} alt="loading" />
        </div>
    )
  }
}
