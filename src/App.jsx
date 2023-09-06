import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.scss'

import Home from './pages/home';
import Professional from './pages/professional';
import Booking from './pages/booking';
import RestrictedRoutes from './routes/RestrictedRoutes';

function App() {
  return (
    <BrowserRouter className="app">
      <Routes>
          <Route element={<RestrictedRoutes />}>
            <Route path='' element={<Home />}></Route>
          </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
