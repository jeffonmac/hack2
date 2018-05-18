import React, { Component } from 'react'
import Scroll from '../components/Scroll'
import CardList from '../components/CardList'
import SearchBox from '../components/SearchBox'

import './App.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      character: [],
      searchfield: ''
    }
  }

  componentDidMount() {
    fetch('https://cdn.rawgit.com/akabab/starwars-api/0.2.1/api/all.json')
      .then(res=> res.json())
      .then(users => {this.setState({ character: users})})
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
  }

  render() {
    const { character, searchfield } = this.state
    const filteredCharacter = character.filter(character =>{
      return character.name.toLowerCase().includes(searchfield.toLowerCase())
    })
    return !character.length ?
      <h1>Loading</h1> :
      (
        <div className='tc'>
          <h1 className='f1'>starwars</h1>
          <SearchBox searchChange={this.onSearchChange}/>
          <Scroll>
            <CardList character={filteredCharacter} />
          </Scroll>
        </div>
      )
  }
}

export default App