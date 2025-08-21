import React from 'react'
import { useState } from 'react'

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  return (
    <div className='max-w-md mx-auto'>
        <h2 className='text-2xl font-bold mb-4'>Registration Form</h2>
        <form className='space-y-4'>
                <label htmlFor="username" className='block mb-1'>Username:</label>
                <input type="text" id="username" name="username" required value={formData.username} onChange={handleChange} className='border border-gray-300 p-2 w-full' />

                <label htmlFor="email" className='block mb-1'>Email:</label>
                <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange} className='border border-gray-300 p-2 w-full' />
                <label htmlFor="password" className='block mb-1'>Password:</label>
                <input type="password" id="password" name="password" required value={formData.password} onChange={handleChange} className='border border-gray-300 p-2 w-full' />

            <button type="submit" onClick={handleSubmit} className='bg-blue-500 text-white py-2 px-4 rounded'>Register</button>
        </form>
    </div>
  )
}

export default RegistrationForm
