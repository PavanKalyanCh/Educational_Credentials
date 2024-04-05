import { useState } from 'react' // Import the useState hook from React for managing component state
import 'bootstrap/dist/css/bootstrap.min.css' // Import Bootstrap CSS for styling
import { BrowserRouter, Routes, Route } from 'react-router-dom' // Import BrowserRouter, Routes, and Route from react-router-dom for routing

import Signup from './Signup' // Import the Signup component
import Login from './Login' // Import the Login component
import Home from './Home' // Import the Home component
import HomePage from './HomePage' // Import the HomePage component

function App() { // Define the App component
  return (
    <BrowserRouter> {/* Use BrowserRouter to enable routing */}
      <Routes> {/* Define the routes */}
        <Route path='/register' element={<Signup />} /> {/* Define the route for the Signup component */}
        <Route path='/login' element={<Login />} /> {/* Define the route for the Login component */}
        <Route path='/home' element={<Home />} /> {/* Define the route for the Home component */}
        <Route path='/homepage' element={<HomePage />} /> {/* Define the route for the HomePage component */}
      </Routes>
    </BrowserRouter>
  )
}

export default App // Export the App component as the default export
