import React from 'react';
import { BrowserRouter,Routes, Route, Link } from 'react-router-dom';


import Graph from './Pages/Graph';
import Grid from './Pages/Grid';
import Home from './Pages/Home';
import Draw from './Pages/Draw';
import String from './Pages/String';


export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path='/draw' element={<Draw/>}/>
          <Route path="/graph" element={<Graph/>}/>
          <Route path="/grid" element={<Grid/>}/>
          <Route path='/string' element={<String/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
