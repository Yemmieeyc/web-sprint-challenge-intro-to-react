import React from 'react'
import axios from 'axios'
import Character from './Character'
import {useState, useEffect} from 'react'

const urlPlanets = 'http://localhost:9009/api/planets'
const urlPeople = 'http://localhost:9009/api/people'


function App() {
    // ❗ Create state to hold the data from the API
    const [planets, setPlanets] = useState([])
    const [people, setPeople] = useState([])
    const [combinedData, setCombinedData] = useState([])
  // ❗ Create effects to fetch the data and put it in state
  useEffect(() =>{
    axios.get(urlPlanets)
    .then(res => {
      //console.log(res.data)
      setPlanets(res.data)
    })
    .catch(err => { console.error(err) })
  })

  useEffect(() => {
    axios.get(urlPeople)
    .then(res => {
      setPeople(res.data)
  
    })
    .catch(err => { console.error(err) })
  })

  useEffect(() => {
    const combinedPeopleData = people.map(person => {
      const homeworldId = person.homeworld
      const homeWorld = planets.find(planet => planet.id === homeworldId)
      return {...person, homeWorld}
    })
    setCombinedData(combinedPeopleData)
  }, [people, planets])
  
  return (
    <div>
      <h2>Star Wars Characters</h2>
      <p>See the README of the project for instructions on completing this challenge</p>
      {/* ❗ Map over the data in state, rendering a Character at each iteration */
      combinedData.map(character => (
        <Character key={Character.id} character={character} />
      ))}
    </div>
  )
}

export default App

// ❗ DO NOT CHANGE THE CODE  BELOW
if (typeof module !== 'undefined' && module.exports) module.exports = App
