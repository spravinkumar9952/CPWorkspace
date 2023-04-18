import React from 'react'
import Navbar from '../Components/Navbar'
import Graphs from 'react-graph-vis'
import { useState,useRef } from 'react';

export default function Graph() {
    const [edges, setEdges] = useState([]);
    const [nodes,setNodes] = useState([]);
    const key=useRef(1);

    const graph = {
        nodes:nodes,
        edges:edges
    };

    const options = {
        layout: {
            hierarchical: true
        },
        edges: {
            color: "#000000"
        },
        nodes: {
            color: "#1cd553"
        },
        height: "500px"
    };

    const events = {
        select: function (event) {

            var { nodes, edges } = event;
        }
    };


    const parseInput = (input) =>{
        
    }

    const isNodeExist = (node,inputNodes)=>{
        
        
        for(let temp of inputNodes){
            if(temp.id==node)return true;
        }

        return false;
    }

    const createNode = (id)=>{
        return {id:id,label:"n"+id,weight:5}
    }

    const handleSubmit = (e) =>{

        e.preventDefault()
        let inputEdges=e.target.graphInput.value.split("\n");
        let inputNodes=[];
        
        for(let edge of inputEdges){

            let v=edge.split(" ");
            
            if(!isNodeExist(v[0],inputNodes))
            inputNodes.push(createNode(v[0]));
            if(!isNodeExist(v[1],inputNodes))
            inputNodes.push(createNode(v[1]));

            edges.push({from:v[0],to:v[1]});
        }
        
        setNodes(inputNodes);

    }
    return (
        <div className='graph'>

            <Navbar/>

            <form onSubmit={handleSubmit} className='graph-form'>
                <textarea name="graphInput"  cols="30" rows="10">

                </textarea>
                <button type="submit">Submit</button>
            </form>


            <Graphs
        key={key.current++}       
        graph={graph}
        options={options}
        events={events}
        getNetwork={network => {
            //  if you want access to vis.js network api you can set the state in a parent component using this property
        }}
    />

        </div>
    );
}
