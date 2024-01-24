import React from 'react'
import {
  Routes,
  Route,
} from "react-router-dom";

import './App.css'

import BaseLayout from './layouts/BaseLayout';
import RequireAuthLayout from './layouts/RequireAuthLayout';
import { Login } from './views/Login';
import DashboardLayout from './layouts/DashboardLayout';

const Signup = React.lazy(() => import('./views/Signup'));
const NotFound = React.lazy(() => import('./views/NotFound'));


function App() {
  console.log(import.meta.env.BASE_URL)
  return (
    <>
      <Routes>
        <Route path="/" element={<BaseLayout />}>
          <Route path="login" element={<Login/>}/>
          <Route path="signup" element={<Signup/>}/>
          <Route path="dashboard/" element={<RequireAuthLayout redirectTo="/login"/>}>
            <Route path="" element={<DashboardLayout/>}>
              <Route path="" element={<div>upload component</div>}/>
            </Route>
          </Route>
          <Route path="*" element={<NotFound />}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
