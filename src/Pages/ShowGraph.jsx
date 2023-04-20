import React from 'react'
import Graphs from 'react-graph-visualizer'
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';

export default function ShowGraph() {
    const {graphComp} = useParams();

    console.log(graphComp);
    return (
        <div>
            <Graphs
                initialGraph={graphComp}
                width={850}
                height={450}
                labelStyle={{ show: true, color: "green", size: 25 }}
            />
        </div>
    )
}
