import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Page from './components/Page';
import Home from '../components/Home';
function router() {
  return (
    <div>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path={`/${page}/${currentPage}`} element={<Home/>}/>
   </Routes>
    </div>
  )
}

export default router