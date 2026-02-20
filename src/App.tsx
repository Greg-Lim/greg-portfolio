import { useState } from 'react'
import tailwindcss from '@tailwindcss/vite'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from './Pages/home'
import { Projects } from './Pages/projects'
import './App.css'
import BaseLayout from './components/BaseLayout';
import { ThemeProvider } from './components/theme-provider'

function App() {

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Router>
        <Routes>
          <Route path="/" element={<BaseLayout/>}>
            <Route path='/' element={<Home/>}/>
            {/* <Route path='/projects' element={<Projects/>}/> */}
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>

  )
}

export default App
