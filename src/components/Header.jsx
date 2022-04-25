import React, { Component } from 'react'
import logo from './images/logo1.jpg'

export default class Header extends Component {
  render() {
    return (
      <div className='header'>
      <img src={logo} width="130px"/>
      </div>
    )
  }
}
