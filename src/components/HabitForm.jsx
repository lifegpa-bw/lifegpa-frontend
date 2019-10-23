import React, { useState,useEffect } from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";
import HabitCard from "./HabitCard";
import {testData} from "../testData";


const HabitForm = ({errors, touched,status}) => {
    const [habits, setHabits] = useState([]);
    console.log('test data', testData)
    useEffect(()=>{
        if (status) {
            setHabits([...habits, status]);
        }
    }, [status])

    return (
        <div>
            <Form>
                <Field
                type="text"
                name="description"
                placeholder="Description"
                />
                {touched.description&&errors.description&&(<p>{errors.description}</p>)}
                {touched.type && errors.type && <p>{errors.type}</p>}
              <Field name="type" component="select" placeholder="Type">
                <option>Type</option>
                <option value="Good">Good</option>
                <option value="Bad">Bad</option>
              </Field>
              {touched.type && errors.type && <p>{errors.type}</p>}
              <button type="submit">Submit</button>
            </Form>
            {habits.map(event => (
                <HabitCard 
                description={event.description}
                type={event.type}
                />
            ))}
        </div>
    )
}
const FormikForm = withFormik({
    mapPropsToValues({description, type}){
        return {
            description: description || "",
            type: type || ""
        }
    },
    validationSchema: Yup.object().shape({
        description: Yup.string().required("Please the description"),
    }),
    handleSubmit(values, {setStatus}){
        axios.post("https://reqres.in/api/users", values)
        .then(response => {
            setStatus(response.data)
            console.log("post test",response.data)
        })
        .catch(error=>console.log(error.response));
    }
    
})(HabitForm) 


export default FormikForm;