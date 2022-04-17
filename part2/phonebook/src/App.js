import { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/filter.js'
import PersonForm from './components/personForm.js'
import Persons from './components/persons.js'

const Name = (props) => (
  <div key = {props.id}>
    {props.name} {props.number}
  </div>
)
const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNum, setNewNumber] = useState('')
  const [filterName, setFilter] = useState('')
  
  useEffect(()=>{
    axios.get('http://localhost:3001/persons')
    .then(response => {
      setPersons(response.data)
    })
  }, [])
  

  const addName = (event) => {
    event.preventDefault()

    const nameObject = {
      name: newName,
      number: newNum,
      id: persons.length + 1
    }

    const existingPerson = persons.find(
      (person) => person.name.toLowerCase() === newName.toLowerCase()
    )
   
    if (existingPerson) {
      window.alert(`${newName} is already added to phonebook`)
      setNewName('')
      setNewNumber('')
    
    } else {
        setPersons(persons.concat(nameObject))
        setNewName('')        
        setNewNumber('')
    }
  }

  const handleNameChange = (event) => {
    console.log("name", event.target.value)
    setNewName(event.target.value)
    
  }
  const handleNumberChange = (event) => {
    console.log("number", event.target.value)
    setNewNumber(event.target.value)
  }

  const handleNameFilter = (event) => {
    console.log("filter", event.target.value)
    setFilter(event.target.value)
  }

  const showAll = persons.filter(person => person.name.toLowerCase().match(filterName.toLowerCase()))
  const displayNames = showAll.map(person => <p key = {person.id}> 
    {person.name} {person.number} </p>)

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter value ={filterName} onChange={handleNameFilter} />
      <h3>Add a Name</h3>
      <PersonForm onSubmit={addName} 
      name = {{value: newName, onChange: handleNameChange}}
      number = {{value: newNum, onChange: handleNumberChange}}/>
        
      <h3>Numbers</h3>
          <Persons persons = {displayNames} />
    </div>
  )
}

export default App