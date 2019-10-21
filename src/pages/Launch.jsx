import React from "react";
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Launch = props => {
  return( 
    <Main>
        <Title>LifeGPA: Welcome to the New You!</Title>
        <Buttonc>
          <Link to ="/register"><Button className = "buttonclass">Register</Button></Link>
        </Buttonc>
        <Buttonc>
          <Link to ="/login"><Button className = "buttonclass">Login</Button></Link>
        </Buttonc>
   </Main>
    
  )
}


export default Launch;

//styles

const Main = styled.div`
display: flex;
border: 1px solid black;
height: 100vh;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: #fff;

`

const Title = styled.h3`
`

const Buttonc = styled.div`
&: hover .buttonclass{
background-color: black;
color: #FFFF00;
}
`
const Button = styled.button`
&: hover .buttonclass{
  background-color: black;
  color: #FFFF00;
  }
`
