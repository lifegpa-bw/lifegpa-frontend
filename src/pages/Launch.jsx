import React from "react";
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import NavBar from "../components/NavBar";

const Launch = () => {
  return( 
    <div>
      <NavBar/>
      <Main>
            <img src = "https://lifegpa-bw.github.io/heather-ui/img/LifeGPA.png"/>
            <Title>Welcome to the New You!</Title>
            <Buttonc2>
              <Link to ="/login"><Button className = "buttonclass">Login</Button></Link>
            </Buttonc2>
            <Buttonc1>
              <Link to ="/register"><Button className = "buttonclass">Register</Button></Link>
            </Buttonc1>
      </Main>
    </div>

    
  )
}


export default Launch;

//styles

const Main = styled.div`
display: flex;
height: 92vh;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: black;
color: #fff;


`

const Title = styled.h3`
font-size: 1rem;
`

const Buttonc1 = styled.div`
&: hover .buttonclass{
background-color: black;
color: #FFEB38;
}
`
const Buttonc2 = styled.div`
&: hover .buttonclass{
background-color: black;
color: #FFEB38;
}
`
const Button = styled.button`
padding: 1rem 0.5rem;
text-align: center;
font-size: 2rem;
border-radius: 3px;
color: black;
background-color: #FFEB38;
width: 200px;
margin-top: 5%;

`
