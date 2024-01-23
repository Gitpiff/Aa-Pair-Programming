import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [ name, setName ] = useState("");
  const [ email, setEmail ] = useState("");
  const [ phone, setPhone ] = useState("");
  const [ bio, setBio ] = useState("");
  
  useEffect(() => {
  })

  return (
    <>
     <form action="">
        <div>
          <label htmlFor="name">Name:</label>
          <input 
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}  
          />
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <input 
            type="email"
            value={email}  
            onChange={(e) => setEmail(e.target.value)} 
          />
        </div>

        <div>
          <label htmlFor="phone">Phone:</label>
          <input 
            type="text"
            value={phone}  
            onChange={(e) => setPhone(e.target.value)} 
          />
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
          <textarea 
            cols="30" 
            rows="10"
            value={bio}
            onChange={(e) => setBio(e.target.value)} 
          >
            Bio:
          </textarea>
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
