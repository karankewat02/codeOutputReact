import React from 'react'
import './App.css'
import Home from './Screens/Home'
import Output from './Screens/Output'
import { Route, Routes } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'

export default function App() {
  return (
    <>
      <Toaster/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/output" element={<Output />} />
      </Routes>
    </>
  )
}
