import React, { useState, useEffect } from 'react'
import { withFormik, Form, Field } from 'formik'
import { connect } from 'react-redux'
import * as yup from 'yup' 
import axios from 'axios'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Habit from '../components/HabitCard'
import { addHabit, deleteHabit } from '../actions'

const Habits = ({ errors, touched, status, ...props }) => {
  const habits = props.dailyReport.habits

  return (
      <Container>
        
         {/* <Title>Create Habits</Title> */}
          <HabitForm>
            { /*Description Field */}
            {touched.description && errors.description && <Error>{errors.description}</Error>}
              <Description
                type="text"
                name="description"
                placeholder="Create Habit"
              />
               { /*Good/Bad Field */}
               {touched.type && errors.type && <Error>{errors.type}</Error>}
              <Type name="type" component="select" placeholder="Type">
                <option>Type</option>
                <option value="Good">Good</option>
                <option value="Bad">Bad</option>
              </Type>
    
              { /*Category Selector Field */}
              {/* {touched.category && errors.category && <p>{errors.category}</p>} */}
              {/* <Field name="category" component="select" placeholder="Cateogry">
                <option color="blue" value="category1">Cateogry 1</option>
                <option value="category2">Cateogry 2</option>
                <option value="category3">Cateogry 3</option>
                <option value="category4">Cateogry 4</option>
                <option value="category5">Cateogry 5</option>
              </Field> */}
             
               <Button type='submit'>Add</Button>
              
          </HabitForm>
            <GuideMain>List of your Habits</GuideMain>
            
         
          {habits.map(habit => (

          <Habit 
            key = {habit.id}
            description={habit.description}
            type={habit.type}
            deleteHabit={props.deleteHabit}
            id = {habit.id}          />
          ))}
      </Container>
      
    
  )
}
const LoginFormik = withFormik({
  mapPropsToValues: values => {
    return {
      description: values.description || '',
      type: values.type || ''
    }
  },
  validationSchema: yup.object().shape({
    description: yup.string().required('Field required'),
    type: yup.string().required('Field required')
    // category: yup.string().required('Please pick a category')
  }),
  handleSubmit: (values, { props }) => {
    console.log('form submited')
    props.addHabit({
      id: Date.now(),
      description: values.description,
      type: values.type,
      performed: false
    })
  }
})(Habits)

const mapStateToProps = state => {
  return {
    dailyReport: state.User.dailyReport
  }
}

export default connect(
  mapStateToProps,
  { addHabit, deleteHabit }
)(LoginFormik)

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content:space-between;
  align-items:center;
  margin:auto;
  height:70vh;
`
const HabitForm = styled(Form)`
  display: flex;
  justify-content: space-around;
  width: 40%;
  margin-top:50px;
`
const Description = styled(Field)`
  padding: 5px;
  border: 1px solid black;
  border-radius: 5px; 
`
const Type = styled(Field)`
  padding: 5px;
  border-radius: 5px;
  margin:auto;
`
//  const Guide = styled.div`
//   // display:flex;
//   // flex-direction:row;
//   // justify-content:flex-start;
//   margin:2px auto;
//   padding:2px;
// `
const GuideMain = styled.h3 `
    color:black;
    margin:40px 0 25px;
    border-bottom:1px solid black;
`

const Button = styled.button`
  border-radius: 5px;
  // background:slateblue;
  width: 20%;
  &:hover {
    background: purple;
  }
`
const Error = styled.p`
  padding: 2px;
  color: red;
  font-size: 1.2rem;
  margin:auto;
`
