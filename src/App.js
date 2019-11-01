import React, { Component, Fragment } from 'react'
import AddPerson from './components/AddPerson/AddPerson'
import Persons from './components/Persons/Persons.js'

//manage all the states and components of the App
class App extends Component {
  state = {
    persons: [
      {
        _id: '5db9322777a4b810e68c819e',
        name: 'Luke Skywalker',
        height: 172,
        mass: 77,
        gender: 'male',
        __v: 0
      },
      {
        _id: '5db9322777a4b810e68c819f',
        name: 'C-3PO',
        height: 167,
        mass: 75,
        gender: 'n/a',
        __v: 0
      },
      {
        _id: '5db9322777a4b810e68c81a0',
        name: 'R2-D2',
        height: 96,
        mass: 32,
        gender: 'n/a',
        __v: 0
      },
      {
        _id: '5db9322777a4b810e68c81a1',
        name: 'Darth Vader',
        height: 202,
        mass: 136,
        gender: 'male',
        __v: 0
      },
      {
        _id: '5db9322777a4b810e68c81a2',
        name: 'Leia Organa',
        height: 150,
        mass: 49,
        gender: 'female',
        __v: 0
      },
      {
        _id: '5db9322777a4b810e68c81a3',
        name: 'Owen Lars',
        height: 178,
        mass: 120,
        gender: 'male',
        __v: 0
      },
      {
        _id: '5db9322777a4b810e68c81a4',
        name: 'Beru Whitesun lars',
        height: 165,
        mass: 75,
        gender: 'female',
        __v: 0
      },
      {
        _id: '5db9322777a4b810e68c81a5',
        name: 'R5-D4',
        height: 97,
        mass: 32,
        gender: 'n/a',
        __v: 0
      },
      {
        _id: '5db9322777a4b810e68c81a6',
        name: 'Biggs Darklighter',
        height: 183,
        mass: 84,
        gender: 'male',
        __v: 0
      },
      {
        _id: '5db9322777a4b810e68c81a7',
        name: 'Obi-Wan Kenobi',
        height: 182,
        mass: 77,
        gender: 'male',
        __v: 0
      }
    ],
    selectedPerson: null
  }

  updateSelectedPerson = (id) => {
    this.setState(({ persons }) => ({
      selectedPerson: persons.find((person) => person._id === id)
    }))
  }

  render() {
    const { persons, selectedPerson } = this.state
    return (
      <Fragment>
        <AddPerson />
        <Persons persons={persons} selectedPerson={selectedPerson} selectPerson={this.updateSelectedPerson} />
      </Fragment>
    )
  }
}

export default App
