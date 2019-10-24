import React, { useState } from 'react';
import Habits from '../components/CreateHabit';
import { testData } from '../testData'
import styled from 'styled-components'

const Habit = (props) => {
  console.log("props passed", props);
  return (
    <Card>
        <p> {props.description} </p>
        <p> {props.type} </p>
        <Button onClick={() => props.deleteHabit(props.id)}>
          Delete
        </Button>
        <Button onClick={() => props.editHabit(props.id)} >
          Edit
        </Button>

    </Card>
  )
}
export default Habit;

const Card = styled.div`
border-radius:10px;
background:#F5DEB3;
display:flex;
justify-content:space-around;
margin:10px auto;
text-align:center;
width:80%;
`
const Button = styled.button`
border-radius:5px;
background:pink;
`