import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import React, {useState} from 'react'
import axios from 'axios'
import Weather from './pages/Weather'


function App() {

  return (
    <div className="App">
  <Router>
        <Routes>
        <Route path='/' element={<Weather />}/>
        </Routes>
      </Router>
      </div>
      )
}

export default App;
