import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.scss'

import Home from './pages/home';
import Professional from './pages/professional';
import Booking from './pages/booking';
import RestrictedRoutes from './routes/RestrictedRoutes';
import LoginProvider from './context/loginContext';

function App() {
  return (
    <BrowserRouter className="app">
      <LoginProvider>
        <Routes>
            <Route element={<RestrictedRoutes />}>
              <Route path='/:store' element={<Home />}></Route>
              <Route path='' element={"not found"}></Route>
            </Route>
        </Routes>
      </LoginProvider>
    </BrowserRouter>
  )
}

export default App
