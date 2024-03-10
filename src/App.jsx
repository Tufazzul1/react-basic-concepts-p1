import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from '../todo'
import Actor from './Actor'
import Singer from '../Singer'
import Bookstore from '../Bookstore'
import Book from './Book'

function App() {


  const books = [
    {id: 1, name : 'physics', price : 100},
    {id: 2, name : 'Biology', price : 200},
    {id: 3, name : 'Math', price : 150},
    {id: 4, name : 'bangla', price : 10},
  ]

  const actors = ['Shakib Khan', 'Shoriful Raj', 'Jashim', 'Rubel', 'salman shah'];
  const singers = [
    { id: 1, name: 'Mahfuzur Rahman', age: 68 },
    { id: 2, name: 'Arjith Singh', age: 45 },
    { id: 3, name: 'Eva Rahman', age: 35 },
    { id: 4, name: 'shubro dev', age: 50 },
  ]

  return (
    <>
      <h3>Vite + React</h3>

      <Bookstore books = {books}></Bookstore>

      {singers.map(singer => <Singer singer= {singer}></Singer>)}


      <Actor name={"bappa raj"}></Actor>
      {
        actors.map(actor => <Actor name={actor}></Actor>)
      }
      {/* <Todo
        task="Learn React" isDone={true}></Todo>
      <Todo
        task="Explore Core Concepts" isDone={false}></Todo>
      <Todo
        task="Try Jsx" isDone={true}></Todo>


         */}
      {/* <Device name="Laptop" price="55"></Device>
      <Device name="mobile" price="17"></Device>
      <Device name="watch" price="10"></Device>
      <Person></Person>
      <Student grade="7" score="99" height = "70"></Student>
      <Student grade="4"></Student>
      <Student grade="5" score="80"></Student>
      <Student grade="5" score="80" weight = "50"></Student>
      <Developer></Developer> */}
    </>
  )
}

function Device(props) {
  // console.log(props)
  return (
    <h2>This device : {props.name}  price: ${props.price}</h2>
  )
}

function Person() {
  const age = 25;
  const money = 5400;
  const person = { name: 'shakib', age: 34 }
  return (
    <h1>Hello Im {person.name} with age: {age} money: {money}</h1>
  )
}



const { grade, score } = { grade: '7', score: '99' };

function Student({ grade, score = 0, height, weight }) {

  return (
    <div className='student'>
      <h3>This is a student</h3>
      <p>Class: {grade}</p>
      <p>score: {score}</p>
      {height && <p>height: {height}</p>}
      {weight && <p>weight: {weight}</p>}
    </div>
  )

}

function Developer() {
  const developerStyle = {
    margin: '20px',
    padding: '20px',
    border: '2px solid purple',
    borderRadius: '20px'
  }
  return (
    <div style={developerStyle}>
      <h5>Devo devo</h5>
      <p>Coding:</p>
    </div>
  )
}

export default App
