import React from 'react';
import ReactDOM from 'react-dom';
import { Formik, Field, Form } from 'formik';
import Input from '../ui/InputComponent';
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
const PurchaseForm = () => {
    return (
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
            {(props) => {
                console.log(props)
                return (
                    <form onSubmit={props.handleSubmit}
                        style={{
                            width: '100%'
                        }}
                    >
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center'
                        }}>
                            <Input
                                id="firstName"
                                name="firstName"
                                placeholder="Enter your Name"
                                label="First Name"
                            />
                            <Input
                                id="lastName"
                                name="lastName"
                                placeholder="Enter your Last Name"
                                label="Last Name"
                            />
                            <Input
                                id="email"
                                name="email"
                                placeholder="Enter your email"
                                label="Email"
                                error={props.errors}
                            />
                            <Button sx={{
                                ":hover": {
                                    background: '#4C8C48',
                                    color: '#000'
                                },
                                fontFamily: 'Inter',
                                background: '#899EA3',
                                borderRadius: '8px',
                                margin: '5px',
                                color: '#D9D9D9',
                                letterSpacing: '2px'
                            }} type="submit" >Submit</Button>
                        </div>
                    </form>
                )
            }}
        </Formik >
    )
}

export default PurchaseForm;

