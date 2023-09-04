import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.scss'

import Home from './page/home'
import Professional from './page/professional'
import Booking from './page/booking'

function App() {
  return (
    <BrowserRouter className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:serviceId" element={<Professional />} />
        <Route path="/:serviceId/:userId" element={<Booking />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
