import React from "react"

const Header = ({course}) => {
    console.log('header', course)
    return (
    <h1>{course.name}</h1>
    )
  }
  
  const Part = (props) => {
    console.log('parts', props)
    return (
      <p>{props.part.name} {props.part.exercises}</p>
    )
  }
  const Content = ({course}) => {
    console.log('Content', course.parts)
    return (
        <div>
            {course.parts.map((part) => (
                <Part key ={part.id} part = {part}/>
            ))}
      </div>
    ) 
    
  }
  const Total = ({ course }) => {
    const initialVal = 0
    const total = course.parts.reduce(
      (sum, part) => { 
          return sum+part.exercises}
          ,initialVal)
      
    
    return (
      <div>
        <p>
            <b>Number of exercises {total}</b>
        </p>
      </div>
    )
  }
  const Course = ({ course }) => {
      return (
      <div>
        <Header course = {course} />
        <Content course = {course} />
        <Total course = {course} />
      </div>  
      )
  }

  export default Course;