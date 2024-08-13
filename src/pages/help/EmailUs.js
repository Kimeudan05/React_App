import React from 'react'
import { Form } from 'react-router-dom'

const EmailUs = () => {
  return (
    <Form className='w-75 bg-body-secondary p-3 '>
      <p className='text-center h1'>Keep in touch</p>
      <div className="form-group">
        <label htmlFor="name">Full name</label>
        <input type="text" className="form-control form-control-lg" id='name' placeholder="Enter full name here" />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input type="email" className="form-control form-control-lg" placeholder="Email address"/>
      </div>
      <div className="form-group">
        <label htmlFor="message">Mesage</label>
        <textarea name="msg" id="message" className='form-control form-control-lg' placeholder="Type something ....."></textarea>    
      </div>
      <button className='btn btn-primary m-2 w-50'>Send</button>
    </Form>
  )
}

export default EmailUs