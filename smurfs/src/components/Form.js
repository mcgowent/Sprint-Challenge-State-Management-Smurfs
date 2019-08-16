import React from 'react';
import axios from 'axios';

import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';



const Forms = ({ errors, touched, values, status }) => {

    return (
        <div className="animal-form">
            <h1>New Smurf Creation</h1>
            <Form>
                <Field type="text" name="name" placeholder="Name" />
                {touched.name && errors.name && (
                    <p className="error">{errors.name}</p>
                )}

                <Field type="text" name="age" placeholder="Age" />
                {touched.age && errors.age && (
                    <p className="error">{errors.age}</p>
                )}

                <Field type="text" name="height" placeholder="Height" />
                {touched.height && errors.height && (
                    <p className="error">{errors.height}</p>
                )}

                <button type="submit">Submit!</button>
            </Form>

        </div>
    )
}

const FormikForm = withFormik({
    mapPropsToValues({ name, age, height }) {
        return {
            name: name || '',
            age: age || '',
            height: height || ''
        };
    },

    validationSchema: Yup.object().shape({
        name: Yup.string().required('Username Required'),
        age: Yup.string().required('Age Required'),
        height: Yup.string().required('Height Required'),
    }),

    handleSubmit(values, { resetForm, sendData }) {
        console.log(values)
        axios
            .post('http://localhost:3333/smurfs', values)
            .then(res => {
                console.log(res)
            })
            .catch(err => console.log(err.response));
        resetForm()
    }
})(Forms); // currying functions in Javascript


export default FormikForm;