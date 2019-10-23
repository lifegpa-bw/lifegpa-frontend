import React, { useState } from 'react'
import Habits from '../components/CreateHabit'
import { testData } from '../testData'
import styled from 'styled-components'
import { deleteHabit } from '../actions'

const Habit = props => {
  const [remove, setRemove] = useState()

<<<<<<< HEAD
const Habit = (props) => {
  const [remove, setRemove] = useState([])

  const removeHabit = id => {
    setRemove(remove.filter(item => item.id !== id));
  }
  console.log("remove", remove);
  return (
    <Card>
        <p> {props.description} </p>
        <p> {props.type} </p>
        <Button onClick={removeHabit}>
          Delete
        </Button>

=======
  // const removeHabit = e=> {
  //   const id = e.target.getAttribute('id')
  //     setRemove(remove.filter(item => item.id !== id));
  // }

  return (
    <Card>
      <p> {props.description} </p>
      <p> {props.type} </p>
      <Button>Delete</Button>
>>>>>>> ed3168f60af48469ce8d0b48122cf97e3343e248
    </Card>
  )
}
export default Habit

const Card = styled.div`
  border-radius: 10px;
  background: #f5deb3;
  display: flex;
  justify-content: space-around;
  margin: 10px auto;
  text-align: center;
  width: 80%;
`
const Button = styled.button`
  border-radius: 5px;
  background: pink;
`
