import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router';
import './index.css'
import App from './App.jsx'
import Data from './Data.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
         <Route path="/" element={<App />} />
         <Route path="/data" element={<Data />} />
      </Routes>
    </Router>
  </StrictMode>,
)
