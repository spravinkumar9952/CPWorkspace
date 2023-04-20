import React from 'react'
import Navbar from '../Components/Navbar'
import Graphs from 'react-graph-visualizer'
import { useState, useRef } from 'react';
import { useEffect } from 'react';

import { Navigate, useNavigate } from 'react-router-dom';

import ShowGraph from './ShowGraph';

export default function Graph() {

    const navigate = useNavigate()

    const [graph,setGraph]=useState({
        nodes: [
          {
            name: "A",
            id: 1
          },
          {
            name: "B",
            id: 2
          }
        ],
        links: [
          {
            source: 1,
            target: 2,
            label: "A-B"
          }
        ]
      })

    const parseInput = (input) =>{
        const lines = input.split("\n");
        const edges = [];

        for(let line of lines){
            if(line == "")
                continue;
            
            edges.push(
                {
                    source: parseInt(line.split(" ")[0]),
                    target: parseInt(line.split(" ")[1]),
                    label: parseInt(line.split(" ")[2])
                }
            );
        }

        const nodeSet = new Set();
        const nodeMap = new Map(); // added a Map to store nodes by id

        for (let edge of edges) {
            const sourceNode = { name: edge.source.toString(), id: edge.source };
            const targetNode = { name: edge.target.toString(), id: edge.target };

            // add source node to set and map
            if (!nodeMap.has(sourceNode.id)) {
                nodeSet.add(sourceNode);
                nodeMap.set(sourceNode.id, sourceNode);
            }

            // add target node to set and map
            if (!nodeMap.has(targetNode.id)) {
                nodeSet.add(targetNode);
                nodeMap.set(targetNode.id, targetNode);
            }
        }

        return {links: edges, nodes: Array.from(nodeSet)};
        
    }



    const handleSubmit = (e) => {
        e.preventDefault();
        const currGraph = parseInput(e.target.graphInput.value);


        navigate('/show-graph', {state: {graph: currGraph}});
    }


    return (

        <div className='graph'>
            <Navbar/>

            <div className="graph-input-container">
                <div className="info">
                    <h1>Graph</h1>
                    <p>You can visulize your graph by using this tool. it is currently supports only for unweighted directed graphs. Working on others features also.
                    </p>

                    <p>Give the edges like this:<br/>
                        <span>1 2</span><br/><span>2 3</span>
                    </p>
                </div>
                <form onSubmit={handleSubmit}>
                    <textarea name="graphInput" cols="30" rows="10">
                    </textarea>
                    <button>Build Graph</button>
                </form>
            </div>
            
        </div>
        
    );
}
