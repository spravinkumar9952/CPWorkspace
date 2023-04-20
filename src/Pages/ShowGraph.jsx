import React from 'react'
import Graphs from 'react-graph-visualizer'
import { useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import Navbar from '../Components/Navbar';

export default function ShowGraph() {
    const {state} = useLocation();

    return (
        <div>
            <Navbar/>

            <div className="show-graph">
                <Graphs 
                    initialGraph={state.graph}
                    width={window.innerWidth}
                    height={window.innerHeight}
                    labelStyle={{ show: true, color: "green", size: 25 }}
                />
            </div>
            
        </div>
    )
}
