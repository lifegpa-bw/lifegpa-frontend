import React  from 'react';
import styled from 'styled-components'



const HabitCard = (props) => {
  return (
    <Card>
      <p>Habit Description - {props.description}</p>
      <p>Habit Type - {props.type}</p>
    </Card>
  )
}
export default HabitCard;

const Card = styled.div`
border: 1px solid black;
`