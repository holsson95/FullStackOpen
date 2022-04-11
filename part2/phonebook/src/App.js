import { useState } from 'react'
const Name = (props) => (
  <div key = {props.id}>
    {props.name}
  </div>
)
const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  console.log(persons)
  

  const addName = (event) => {
    event.preventDefault()

    const nameObject = {
      content: newName,
      id: persons.length + 1
    }

    const existingPerson = persons.find(
      (person) => person.content.toLowerCase() === newName.toLowerCase()
    )
   
    if (existingPerson) {
      window.alert(`${newName} is already added to phonebook`)
      setNewName('')
      
    } else {
        setPersons(persons.concat(nameObject))
        setNewName('')        
    }
  }

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName} >
        <div>
          name: <input value = {newName} onChange={handleNameChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
       
          {persons.map(person =>
            <Name key={person.id} name ={person.content} />
            )}
       
    </div>
  )
}

export default App