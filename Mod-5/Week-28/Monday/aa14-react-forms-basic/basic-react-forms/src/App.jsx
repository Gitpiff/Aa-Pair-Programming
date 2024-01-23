import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  useEffect(() => {
    
  })

  return (
    <>
     <form action="">
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" />
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" />
        </div>

        <div>
          <label htmlFor="phone">Phone:</label>
          <input type="text" />
          <select>
            <option>Home</option>
            <option>Work</option>
            <option>Mobile</option>
          </select>
        </div>

        <div>
          <input type="radio" />
          <label htmlFor="Instructor">Instructor:</label>
        </div>
        <div>
          <input type="radio" />
          <label htmlFor="Student">Student:</label>
        </div>
        
        <div>
          <textarea name="" id="" cols="30" rows="10">Bio:</textarea>
        </div>

        <div>
          <input type="checkbox" />
          <label htmlFor="Sign up for email notifications">Sign up for email notifications</label>
        </div>

     </form>  
    </>
  )
}

export default App
