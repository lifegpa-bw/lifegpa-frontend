import React, { useState, useEffect } from 'react';
import { withFormik, Form, Field } from 'formik';
import * as yup from 'yup';
import axios from 'axios';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Habit from '../components/HabitCard'

const Habits = ({errors, touched, status }) => {
  const [habits, setHabits] = useState([]);

  useEffect(() => {
    if(status) {
      setHabits([...habits, status])
    }
  },[status])

  return (
    
      <Container>
        
         <Title>Creating habit</Title>
          <HabitForm>
            { /*Description Field */}
            {touched.description && errors.description && <p>{errors.description}</p>}
              <Description
                type="text"
                name="description"
                placeholder="Create Habit"
              />
               { /*Good/Bad Field */}
               {touched.type && errors.type && <p>{errors.type}</p>}
              <Type name="type" component="select" placeholder="Type">
                <option>Type</option>
                <option value="Good">Good</option>
                <option value="Bad">Bad</option>
              </Type>
    
              { /*Category Selector Field */}
              {touched.category && errors.category && <p>{errors.category}</p>}
              {/* <Field name="category" component="select" placeholder="Cateogry">
                <option color="blue" value="category1">Cateogry 1</option>
                <option value="category2">Cateogry 2</option>
                <option value="category3">Cateogry 3</option>
                <option value="category4">Cateogry 4</option>
                <option value="category5">Cateogry 5</option>
              </Field> */}
             
               <button>Add</button>
              
          </HabitForm>
          <Habit />
      </Container>
      
    
  )
};
export default withFormik({
  mapPropsToValues:(values) => {
    return {
      description: values.description || '',
      type: values.type || "",
      category: values.category || ""
    }
  },
  validationSchema: yup.object().shape({
    description: yup.string().required('Please describe a habit'),
    type: yup.string().required('Please pick a type'),
    category: yup.string().required('Please pick a category')
  }),
    handleSubmit:(values, { setStatus }) => {
      axios
        .post("https://reqres.in/api/users", values)
          .then(res => {
            setStatus(res.data)
            console.log(res.data)
          })
          .catch((err) => {
            console.log('Error:', err)
          })
    }
})(Habits);

const Container = styled.div`
  display:flex;
  flex-direction:column;
  width:50%:
`
const HabitForm = styled(Form) `
  display:flex;
  justify-content:space-between;
  width:50%;
  margin:auto;
  // background:black;
`
const Title = styled.h1`
  color:blue;
  text-align:center;
`
const Description = styled(Field)`
  padding:5px;
  border:1px solid black;
  border-radius:5px;
`
const Type = styled(Field)`
  padding:5px;
  border-radius:5px;

`

