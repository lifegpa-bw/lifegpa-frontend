import React, { useState, useEffect } from 'react';
import { withFormik, Form, Field } from 'formik';
import * as yup from 'yup';
import axios from 'axios';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Habits = ({errors, touched, status }) => {
  const [habits, setHabits] = useState([]);

  useEffect(() => {
    if(status) {
      setHabits([...habits, status])
    }
  },[status])

  return (
    
      
        <Form>
          <h1>Creating habit</h1>
          { /*Description Field */}
          {touched.description && errors.description && <p>{errors.description}</p>}
            <Field
              type="text"
              name="description"
              placeholder="Create Habit"
            />
             { /*Good/Bad Field */}
             {touched.type && errors.type && <p>{errors.type}</p>}
            <Field name="type" component="select" placeholder="Type">
              <option value="Good">Good</option>
              <option value="Bad">Bad</option>
            </Field>
  
            { /*Category Selector Field */}
            {touched.category && errors.category && <p>{errors.category}</p>}
            <Field name="category" component="select" placeholder="Cateogry">
              <option color="blue" value="category1">Cateogry 1</option>
              <option value="category2">Cateogry 2</option>
              <option value="category3">Cateogry 3</option>
              <option value="category4">Cateogry 4</option>
              <option value="category5">Cateogry 5</option>
            </Field>
           
             <button>Add</button>
  
        </Form>
      
    
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

// const HabitForm = styled(Form) `
//   display:flex;
//   justify-content:center;
//   flex-direction:column;
//   background:black;
// `
