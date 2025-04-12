import { useState } from 'react'
import './App.css'
import './media/navBar.css'
import './media/common.css'
import { BrowserRouter, Route, Routes } from "react-router";
import MainPage from './pages';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
