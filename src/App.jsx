import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Homepage from './components/homepage/homepage'
import Donations from './components/donations/donations'
import { Route, Routes , BrowserRouter} from 'react-router-dom'

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage/>}/>
      <Route path="/donations" element={<Donations/>}/>
    </Routes>
    </BrowserRouter>
    
        </>
  );
}

export default App
