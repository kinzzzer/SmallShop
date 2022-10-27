import React from 'react';
import ReactDOM from 'react-dom';
import { Formik, Field, Form } from 'formik';
import Button from '@mui/material/Button';


const validate = values => {
    const errors = {};
    if (!values.firstName) {
        errors.firstName = 'Required';
    } else if (values.firstName.length > 15) {
        errors.firstName = 'Must be 15 characters or less';
    }

    if (!values.lastName) {
        errors.lastName = 'Required';
    } else if (values.lastName.length > 20) {
        errors.lastName = 'Must be 20 characters or less';
    }

    if (!values.email) {
        errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }

    return errors;
};
const PurchaseForm = () => (

    <div>
        <Formik
            validate={validate}
            style={{ justifyContent: 'center' }}
            initialValues={{
                firstName: '',
                lastName: '',
                email: '',
            }}
            onSubmit={async (values) => {
                await new Promise((r) => setTimeout(r, 500));
                alert(JSON.stringify(values, null, 2));
            }}
        >

            {/* const Input (name, errors, placeholder) */}
            {({ errors, touched, validateField, validateForm }) => {
                console.log(errors);
                return (
                    <Form style={{
                        display: 'flex',
                        flexDirection: 'column',
                    }}>
                        <div>{errors[name]}</div>
                        <Field style={{
                            height: '20px',
                            border: '2px solid',
                            borderRadius: 2
                        }}
                            id="firstName"
                            name="firstName"
                            placeholder="firstName"
                        />
                        <div>{errors[name]}</div>
                        <Field style={{
                            height: '20px',
                            border: '2px solid',
                            borderRadius: 2
                        }}
                            id="lastName"
                            name="lastName"
                            placeholder="Last Name"
                        />
                        <div>{errors[name]}</div>
                        <Field style={{
                            height: '20px',
                            border: '2px solid',
                            borderRadius: 2
                        }}
                            id="email"
                            name="email"
                            placeholder="jane@acme.com"
                            type="email"
                        />
                        <Button type="submit" variant="contained" color="success">Submit</Button>
                    </Form>
                )
            }}
        </Formik>
    </div>
);
export default PurchaseForm;