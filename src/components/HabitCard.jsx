import React, { useState } from 'react'
import Habits from '../components/CreateHabit'
import styled from 'styled-components'

const Habit = props => {
  return (
    
    <Card>
         {props.type === 'Bad' ? <p className="redText">{props.type}</p> :  <p className="greenText">{props.type}</p> } 
        <DescriptionInput> {props.description} </DescriptionInput>
      <Buttons>
          <DeleteButton onClick={() => props.deleteHabit(props.id)}>
            Delete
          </DeleteButton>
          <Button >
            Edit
          </Button>
      </Buttons>

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
display:flex;
justify-content:space-evenly;
margin:10px auto;
text-align:center;
width:60%;
border-bottom:1px solid black;
padding-bottom:5px;
border-radius:12px;
`
const Buttons = styled.div`
      display:flex;
      justify-content:flex-end;
      width:60%;

`
const Button = styled.button`
margin:auto 10px;
border-radius:5px;
background:white;
width:60px;
height:30px;

&:hover {
  background: yellow;
}
`
const DeleteButton = styled.button`
margin:auto 10px;
border-radius:5px;
background:white;
width:60px;
height:30px;
&:hover {
  background: pink;
}
`
