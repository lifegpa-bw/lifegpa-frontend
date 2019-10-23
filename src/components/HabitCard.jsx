import React, { useState } from 'react';
import Habits from '../components/CreateHabit';
import { testData } from '../testData'
import styled from 'styled-components'
import { deleteItem } from '../actions/axios_delete_action'

const Habit = (props) => {
  const [remove, setRemove] = useState();
  
  // const removeHabit = e=> {
  //   const id = e.target.getAttribute('id')
  //     setRemove(remove.filter(item => item.id !== id));
  // }
  
  return (
    <Card>

        <p> {props.description} </p>
        <p> {props.type} </p>
        <Button>
          Delete
        </Button>

    </Card>
  )
}
export default Habit;

const Card = styled.div`
// border: 1px solid black;
border-radius:5px;
background:#F5DEB3;
display:flex;
justify-content:space-around;
width:50%;
margin:10px auto;
text-align:center;
`
const Button = styled.button`
border-radius:5px;
background:pink;
width:20%;
`