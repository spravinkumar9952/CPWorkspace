import React from 'react';
import { BrowserRouter,Routes, Route, Link } from 'react-router-dom';


import Graph from './Pages/Graph';
import Grid from './Pages/Grid';
import Home from './Pages/Home';
import Draw from './Pages/Draw';
import String from './Pages/String';
import Number from "./Pages/Number";
import ShowGraph from './Pages/ShowGraph';


export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path='/draw' element={<Draw/>}/>
          <Route path="/graph" element={<Graph/>}/>
          <Route path="/show-graph" element={<ShowGraph/>}/>
          <Route path="/grid" element={<Grid/>}/>
          <Route path='/string' element={<String/>}/>
          <Route path='/number' element={<Number/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
