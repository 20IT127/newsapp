import 'bootstrap/dist/css/bootstrap.min.css';

import React, { Component } from 'react'
import Navigationbar from './components/Navigationbar.js';
import News from './components/News.js';

export default class App extends Component {
  a='20IT127.'
  render() {
    return (
      <div>
        <Navigationbar/>
        <News/>
      </div>
    )
  }
}
