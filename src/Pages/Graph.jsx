import React from 'react'
import Navbar from '../Components/Navbar'
import Graphs from 'react-graph-visualizer'
import { useState, useRef } from 'react';
import { useEffect } from 'react';

import { Navigate, useNavigate } from 'react-router-dom';

export default function Graph() {

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

  const gref=useRef()



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
                
        console.log(nodeSet);

        return {links: edges, nodes: Array.from(nodeSet)};
        
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const newGraph = parseInput(e.target.graphInput.value);
        gref.current.setGraph(newGraph)
    }

    return (

        <div className='graph'>

            <form onSubmit={handleSubmit}>
                <textarea name="graphInput" cols="30" rows="10">

                </textarea>
                <button>Submit</button>
            </form>
         
          
            <Graphs className='graph-comp'
                backgroundColor={"transparent"}
                ref={gref}
                initialGraph={graph}
                width={1400}
                height={600}
                linkStyle={{directed:true}}
                labelStyle={{ show: true, color: "green", size: 25 }}
                nodeStyle = {{background: "pink", borderColor: "black" , borderWidth: 1}}
            />
         
        </div>
        
    );
}
