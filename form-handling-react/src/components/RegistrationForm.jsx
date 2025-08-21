import React from 'react'
import { useState } from 'react'
import { Formik, Form, Field,ErrorMessage } from 'formik'
import * as Yup from 'yup'

const validationSchema = Yup.object().shape({
  username: Yup.string().required('Username is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required')
})

const RegistrationForm = () => {
  const [formData] = useState({
    username: '',
    email: '',
    password: ''
  })


  const handleSubmit = (values) => {
    console.log('Form submitted:', values)
  }

  

  return (
    <div className='max-w-md mx-auto'>
        <h2 className='text-2xl font-bold mb-4'>Registration Form</h2>
        <Formik
          initialValues={formData}
            validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form className='space-y-4'>
            <label htmlFor="username" className='block mb-1'>Username:</label>
            <Field type="text" id="username" name="username" className='border border-gray-300 p-2 w-full' />
            <ErrorMessage name="username" component="div" className='text-red-500 text-sm' />

            <label htmlFor="email" className='block mb-1'>Email:</label>
            <Field type="email" id="email" name="email" className='border border-gray-300 p-2 w-full' />
            <ErrorMessage name="email" component="div" className='text-red-500 text-sm' />

            <label htmlFor="password" className='block mb-1'>Password:</label>
            <Field type="password" id="password" name="password" className='border border-gray-300 p-2 w-full' />
            <ErrorMessage name="password" component="div" className='text-red-500 text-sm' />

            <button type="submit" className='bg-blue-500 text-white py-2 px-4 rounded'>Register</button>
          </Form>
        </Formik>
    </div>
  )
}

export default RegistrationForm
