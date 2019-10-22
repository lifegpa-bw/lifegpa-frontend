import React, {useState, useEffect} from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Login=({errors, touched, status}) => {
    const [users,setUsers] = useState([]);
    useEffect(() => {
        if (status){
            setUsers([...users, status]);
        }
    },[status]);

    return(

    <Main>
      <Form2>
        <Title>LOGIN</Title>
        <Text>
          <Input 
          type="text" 
          name="username" 
          placeholder="Enter Your Username"
          />
            {touched.username && errors.username && (
            <Errors>{errors.username}</Errors>
                  )}
          <Input 
          type="password" 
          name="password" 
          placeholder="Enter Your Password"/>
            {touched.password && errors.password && (
            <Errors>{errors.password}</Errors>
                  )}
        </Text>
        <Buttonc>
          <Button type="submit" className = "buttonclass" >LOG IN</Button>
        </Buttonc>
      </Form2>
      <Link1 to ="/register">
          <Newlink>Need to create an account? Click here.</Newlink>
      </Link1>
    </Main>
    );
};
const FormikLogin = withFormik({
    mapPropsToValues({username,password}){
        return {
            username: username || "",
            password: password || "",
        };
    },
    validationSchema: Yup.object().shape({
        username: Yup.string().required("Username must be entered"),
        password: Yup.string().required("Password must be entered")    
    }),
    
    handleSubmit(values, { props, setStatus }){
    axios
    .post(`https://reqres.in/api/users`, values)
    .then(event => {
        localStorage.setItem("token", event.data.token);
        localStorage.setItem("user", JSON.stringify(event.data.user));
        setStatus(event.data);
        props.history.push('/dashboard')
    })
    .catch(err => console.log(err.response));

}

})(Login);
console.log(FormikLogin)
export default FormikLogin;

//styling

const Main = styled.div`
height: 87vh;
background-color: #fff;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
text-align: center;
`
const Form2 = styled(Form)`
border: 1px solid black;
background-color: #fff;
padding: 20px;
`
const Title = styled.label`
text-align: center;
margin: 10%;
`
const Text = styled.div`
display: flex;
flex-direction: column;
padding: 60px;
`
const Input = styled(Field)`
width: 100%;
margin-top: 5%;
margin-bottom: 5%;
`
const Buttonc = styled.div`
display: flex;
align-items: center;
justify-content: center;
&: hover .buttonclass{
  background-color: black;
  color: #FFFF00;
  }
`

const Button = styled.button`
background-color: #FFFF00;
color: black;
width: 100%;
text-align: center;
padding: 5%;
`

const Newlink = styled.p`
font-size: 10px;

`

const Link1 = styled(Link)`
color: black;
`

const Errors = styled.p`
font-size: 1rem;
`