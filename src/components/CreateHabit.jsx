import React, { useState, useEffect } from 'react'
import { Formik, Form, Field } from 'formik'
import { useSelector, useDispatch } from 'react-redux'
import * as yup from 'yup'
import axios from 'axios'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Habit from '../components/HabitCard'
import { addHabit, deleteHabit, editHabit } from '../actions'

const Habits = props => {
  const { dailyReport } = useSelector(store => store.User)
  const habits = dailyReport.habits
  const dispatch = useDispatch()
  /*
  const [editing, setEditing] = useState({
    isEditing: false,
    editID: null
  })
  */

  const [editID, setEditID] = useState('')

  const validationSchema = yup.object().shape({
    description: yup.string().required('Field required'),
    type: yup.string().required('Field required')
    // category: yup.string().required('Please pick a category')
  })

  let initialValues = null
  // if editID use habit as initial value
  if (editID) {
    let toEdit = habits.filter(habit => habit.id === editID)[0]
    initialValues = {
      description: toEdit.description,
      type: ''
    }
  } else {
    initialValues = {
      description: '',
      type: ''
    }
  }
  // else use empy string
  return (
    <Formik
      enableReinitialize
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        console.log('form values', values)
        if (editID) {
          dispatch(
            editHabit({
              id: editID,
              description: values.description,
              type: values.type
            })
          )
          setEditID('')
        } else {
          dispatch(
            addHabit({
              id: Date.now(),
              description: values.description,
              type: values.type,
              performed: false
            })
          )
        }
        resetForm()
      }}
      render={({ touched, errors, values, handleChange }) => (
        <Container>
          <Title>Habits</Title>
          <HabitForm>
            {/*Description Field */}
            {touched.description && errors.description && (
              <Error>{errors.description}</Error>
            )}
            <Description
              type='text'
              name='description'
              placeholder='Create Habit'
              value={values.description}
              onChange={handleChange}
            />
            {/*Good/Bad Field */}
            {touched.type && errors.type && <Error>{errors.type}</Error>}
            <Type name='type' component='select' placeholder='Type'>
              <option>Type</option>
              <option value='Good'>Good</option>
              <option value='Bad'>Bad</option>
            </Type>

            <Button type='submit'>{editID ? 'Done' : 'Add'}</Button>
          </HabitForm>
          <GuideMain>List Habits</GuideMain>

          {habits.map(habit => (
            <Habit
              key={habit.id}
              description={habit.description}
              type={habit.type}
              deleteHabit={deleteHabit}
              editHabit={setEditID}
              id={habit.id}
            />
          ))}
        </Container>
      )}
    />
  )
}

export default Habits

const Container = styled.div`
  display: flex;
  flex-direction: column;
  font-family: 'Rajdhani', sans-serif;
  justify-content: space-between;
`
const HabitForm = styled(Form)`
  display: flex;
  justify-content: space-around;
  width: 40%;
  margin: auto;
`
const Title = styled.h1`
  color: blue;
  text-align: center;
`

const Description = styled(Field)`
  padding: 5px;
  border: 1px solid black;
  border-radius: 5px;
`
const Type = styled(Field)`
  padding: 5px;
  border-radius: 5px;
  margin: auto;
`
//  const Guide = styled.div`
//   // display:flex;
//   // flex-direction:row;
//   // justify-content:flex-start;
//   margin:2px auto;
//   padding:2px;
// `
const GuideMain = styled.h3`
  color: black;
  margin: 40px 0 25px;
  border-bottom: 1px solid black;
`

const Button = styled.button`
  border-radius: 5px;
  background: slateblue;
  width: 20%;
  &:hover {
    background: purple;
  }
`
const Error = styled.p`
  padding: 2px;
  color: red;
  font-size: 1.2rem;
  margin: auto;
`
