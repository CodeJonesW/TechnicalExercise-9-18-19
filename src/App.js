import React, { Component } from 'react';
import './App.css';
import People from './component/PersonContainer'

const APIKEY = process.env.REACT_APP_PROTECT_KEY
const PROXY = "https://cors-anywhere.herokuapp.com/"

class App extends Component {

  state = {
    people: []
  }



  componentDidMount() {
    fetch(PROXY + 'https://api.salesloft.com/v2/people', {
      'headers': {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${APIKEY}`
      }
    })
      .then(res => res.json())
      .then(data => this.setState({ people: data }))
  }


  render() {
    return (
      <div id='simpleApp' style={{ margin: "20px" }}>

        <h1>A Simple Web Application</h1>

        <People allPeople={this.state.people} />

      </div>
    )
  }
}

export default App;
