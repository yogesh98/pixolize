import React, { useState } from 'react'
import {
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BaseLayout from './layouts/BaseLayout';
import { Login } from './views/Login';
const NotFound = React.lazy(() => import('./views/NotFound'));


function App() {
  const [count, setCount] = useState(0)
  console.log(import.meta.env.BASE_URL)
  return (
    <>
      <Routes>
        <Route path="/" element={<BaseLayout />}>
          <Route path="login" element={<Login/>}/>
          <Route path="*" element={<NotFound />}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
