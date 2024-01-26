import { NavLink, RouterProvider, createBrowserRouter, Outlet } from 'react-router-dom'
import './App.css'
import Home  from './components/Home'
import SampleSurvey from './components/SampleSurvey'
import SensoryPreferenceSurvey from './components/SensoryPreferencesSurvey'
import Logo from "../../_assets/logo.png"


function Layout() {
  return (
    <div>
      <img src={Logo} alt="" />
      <h1>Survey Tool</h1>
      <h3>Home</h3>
      <nav className='comp nav'>
        <button>
          <NavLink 
              to="sample"
            >
              Sample Survey
            </NavLink>
        </button>
        <button>
          <NavLink 
              to="sensory"
            >
              Sensory Preferences
          </NavLink>
        </button>
        <button>
          <NavLink 
              to="report"
            >
              Report
            </NavLink>
        </button>
         <button>
         <NavLink 
              to="/"
            >
              Home
            </NavLink>
         </button>
      </nav>
      <h4></h4>
      <main>
        <Outlet />
      </main>
    </div>
  )
}

const router =  createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "sample",
        element: <SampleSurvey />
      },
      {
        path: "sensory",
        element: <SensoryPreferenceSurvey />
      },
      {
        path: '*',
        element: <h1>Page Not Found</h1>
      }
    ]
  }
  
]
)

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
