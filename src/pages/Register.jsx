import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

const Register = () => {
  return (
    <>
    <Formik initialValues={{fname:'', lname:'', email:'', password:'', cpassword:''}} 
    validationSchema={Yup.object({
        fname:Yup.string()
        .min(2, 'Too Short!')
        .max(20, 'First name must contain only 20 character')
        .required(),
        lname:Yup.string()
        .min(2, 'Too Short!')
        .max(20, 'last name must contain only 20 character')
        .required(),
        email:Yup.string()
        .email()
        .required(),
        password:Yup.string()
        .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&*!]).{8,20}$/, "Week password")
        .required(),
        cpassword:Yup.string()
        .oneOf([Yup.ref('password'), null], 'Password did not match')
        .required()
        

    })}
    >
        <div className="flex justify-center">

        <Form className='my-5 shadow-cyan-500 shadow-sm p-4'>
            <h1 className='text-center font-bold text-black text-xl mb-2'>User Registration Forms</h1>
            <div className="mb-2">
                <label htmlFor="fname">First Name</label>
                <Field type='text' name='fname' id='fname' placeholder="Enter your firstname" className="w-full" />
                <ErrorMessage name='fname'>
                
                    {mgs=><div style={{color:'red'}}>{mgs}</div>}
                </ErrorMessage>
            </div>
            <div className="mb-2">
                <label htmlFor="lname">Last Name</label>
                <Field type='text' name='lname' id='lname' placeholder="Enter your lastname" className="w-full" />
                <ErrorMessage name='lname'>
                    {mgs=><div style={{color:'red'}}>{mgs}</div>}
                </ErrorMessage>
            </div>
            <div className="mb-2">
                <label htmlFor="email">Email</label>
                <Field type='email' name='email' id='email' placeholder="xyz@gmail.com" className="w-full" />
                <ErrorMessage name='email'>
                    {mgs=><div style={{color:'red'}}>{mgs}</div>}
                </ErrorMessage>
            </div>
            <div className="mb-2">
                <label htmlFor="password">Password</label>
                <Field type='password' name='password' id='password' placeholder="**********" className="w-full" />
                <ErrorMessage name='password'>
                    {mgs=><div style={{color:'red'}}>{mgs}</div>}
                </ErrorMessage>
            </div>
            <div className="mb-2">
                <label htmlFor="cpassword">Confirm Password</label>
                <Field type='password' name='cpassword' id='cpassword' placeholder="**********" className="w-full" />
                <ErrorMessage name='cpassword'>
                    {mgs=><div style={{color:'red'}}>{mgs}</div>}
                </ErrorMessage>
            </div>
            <div className="mb-2">
                <button className="bg-blue-500 px-3 py-2 text-white">Register</button>
            </div>
            


     </Form>
        </div>
     
    </Formik>
    </>
  )
}

export default Register