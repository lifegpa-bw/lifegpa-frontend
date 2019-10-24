import React, { useState } from 'react'
import Habits from '../components/CreateHabit'
import styled from 'styled-components'

const Habit = props => {
  return (
    <Card>
      <p> {props.description} </p>
      <p> {props.type} </p>
      <Button onClick={() => props.deleteHabit(props.id)}>Delete</Button>
      <Button onClick={() => props.startEdit(props.id)}>Edit</Button>
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
