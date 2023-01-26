import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import React, {useState} from 'react'
import axios from 'axios'
import Weather from './pages/Weather'
import Home from './pages/Home'

function App() {

  return (
    <div className="App">
  <Router>
        <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/weather' element={<Weather />}/>
        {/* <Route path='/:id/edit' element={<EditTodo />}/> */}
        </Routes>
      </Router>
      </div>
      )
}

export default App;
