import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import UserLayout from '../components/Layout/UserLayout'

function App() {
  

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<UserLayout/>}>{/*User layout */}</Route>
        <Route>{/*Admin layout */}</Route>
        <Route>{/*User layout */}</Route>
        
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
