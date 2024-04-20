import React from 'react'
import Home from './Components/Home/Home'
import {Routes,Route} from 'react-router-dom'
import Courses from './Components/Courses/Courses'
import Signup from './Components/Signup'
import Login from './Components/Login'

const App = () => {
  return (
    <div>
     <div >
     <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/course' element={<Courses/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
     </div>
    </div>
  )
}

export default App
