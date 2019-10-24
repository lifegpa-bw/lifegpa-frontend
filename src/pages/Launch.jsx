import React from "react";
import styled from 'styled-components'
import { Link } from 'react-router-dom'


const Launch = () => {
  return( 
    <div>
      <Main>
            <img src = "https://lifegpa-bw.github.io/heather-ui/img/LifeGPA.png"/>
            <Title>Welcome to the New You!</Title>
            <Buttonc1>
              <Link to ="/register"><Button1 className = "buttonclass">CREATE ACCOUNT</Button1></Link>
            </Buttonc1>
            <Buttonc2>
              <Link to ="/login"><Button2 className = "buttonclass">LOGIN</Button2></Link>
            </Buttonc2>
      </Main>
    </div>

    
  )
}


export default Launch;

//styles

const Main = styled.div`
display: flex;
height: 100vh;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: black;
color: #fff;


`

const Title = styled.h3`
font-size: 1rem;
color: #C4C4C4;
`

const Buttonc1 = styled.div`
&: hover .buttonclass{
background-color: #fff;
color: black;
}
margin-top: 7.5%;
`
const Buttonc2 = styled.div`
&: hover .buttonclass{
background-color: #FFEB38;
color: black;
}
`
const Button1 = styled.button`
padding: 2rem 1.5rem;
text-align: center;
font-size: 2rem;
border-radius: 3px;
color: black;
background-color: #FFEB38;
width: 300px;
margin-top: 5%;

`
const Button2 = styled.button`
padding: 2rem 1.5rem;
text-align: center;
font-size: 2rem;
border-radius: 3px;
color: black;
background-color: #fff;
width: 300px;
margin-top: 5%;

`
