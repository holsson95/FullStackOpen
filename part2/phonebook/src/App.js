import { useState } from 'react'
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
  

  console.log(persons)
  

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
  
  return (
    <div>
      <h2>Phonebook</h2>
      <div>Filter by name: <input value = {filterName} onChange={handleNameFilter} /></div>
      <h3>Add a Name</h3>
      <form onSubmit={addName} >
        <div> name: <input value = {newName} onChange={handleNameChange} /> </div>
        <div> number: <input value = {newNum} onChange={handleNumberChange} /> </div>
        <div> <button type="submit">add</button> </div>
      </form>
      <h3>Numbers</h3>
          {showAll.map(person =>
            <Name key={person.id} name ={person.name} number = {person.number} />
            )}
    </div>
  )
}

export default App