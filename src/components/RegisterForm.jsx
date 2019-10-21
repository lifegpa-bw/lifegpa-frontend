import React, {useState, useEffect} from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Register=({errors, touched, status}) => {
  const [newUser,setNewUser] = useState([]);
  useEffect(() => {
      if (status){
          setNewUser([...newUser, status]);
      }
  },[status]);

  return(

  <Main>
    <Form2>
      <Title>REGISTER</Title>
      <Text>
        <Input type= "text" name="username" placeholder="Create a Username"/>
          {touched.username && errors.username && (
            <p>{errors.username}</p>
                )}
        <Input type="password" name="password" placeholder="Create a Password"/>
          {touched.password && errors.password && (
            <p>{errors.password}</p>
                )}
      </Text>
      <Buttonc>
        <Button className = "buttonclass">SIGN UP</Button>
      </Buttonc>
    </Form2>
    <Link1 to ="/login"><Newlink>Already have an account? Click here.</Newlink></Link1>
   </Main>
  );

  
};
const FormikSignup = withFormik({
  mapPropsToValues({username,password}){
      return {
          username: username || "",
          password: password || ""
      };
  },
  validationSchema: Yup.object().shape({
      username: Yup.string()
      .required("You must create a username before continuing")
      .min(4, "must be 4 or more characters")
      .max(15, 'thats a bit long, make it less than 15 characters'),
      password: Yup.string()
      .required("Password must be entered")       
      .min(4, "must be 4 or more characters")
      .max(15, 'thats a bit long, make it less than 15 characters')

  }),    
  handleSubmit(values,  {props, setStatus }){
  axios
  .post(`https://reqres.in/api/users`, values)
  .then(event => {
    console.log("login information",event)
      setStatus(event.data);
          props.history.push('/login')
  })
  .catch(err => console.log(err.e));

}

})(Register);
console.log(FormikSignup)
export default FormikSignup

//styles

const Main = styled.div`
height: 100vh;
background-color: #fff;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
text-align: center;

`
const Form2 = styled(Form)`
border: 1px solid black;
background-color: #ffffff;
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