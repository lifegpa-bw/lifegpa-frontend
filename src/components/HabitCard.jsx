import React, { useState } from 'react'
import Habits from '../components/CreateHabit'
import styled from 'styled-components'

<<<<<<< HEAD
const Habit = (props) => {
  console.log("props passed", props);
=======
const Habit = props => {
>>>>>>> master
  return (
    
    <Card>
<<<<<<< HEAD
        <DescriptionInput> {props.description} </DescriptionInput>
        {/* <p> {props.type} </p> */}
      <Buttons>
          <DeleteButton onClick={() => props.deleteHabit(props.id)}>
            Delete
          </DeleteButton>
          <Button >
            Edit
          </Button>
      </Buttons>

=======
      <p> {props.description} </p>
      <p> {props.type} </p>
      <Button onClick={() => props.deleteHabit(props.id)}>Delete</Button>
      <Button onClick={() => props.startEdit(props.id)}>Edit</Button>
>>>>>>> master
    </Card>
  )
}
export default Habit

const DescriptionInput = styled.div`
  width:20%;
  text-align:center;
  display:flex;
  align-items:center;
  justify-content:center;
`

const Card = styled.div`
<<<<<<< HEAD
display:flex;
justify-content:space-evenly;
margin:10px auto;
text-align:center;
width:60%;
border-bottom:1px solid black;
padding-bottom:5px;
`
const Buttons = styled.div`
      display:flex;
      justify-content:space-evenly;
      width:30%;

`
const Button = styled.button`
border-radius:5px;
background:white;
width:60px;
height:30px;

&:hover {
  background: yellow;
}
`
const DeleteButton = styled.button`
border-radius:5px;
background:white;
width:60px;
height:30px;
&:hover {
  background: pink;
}
`
=======
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
>>>>>>> master
