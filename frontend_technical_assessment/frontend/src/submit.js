// submit.js

import { useState } from "react";
import Button from "./components/Button";
import { useReactFlow } from 'reactflow';

export const SubmitButton = () => {

    const { getNodes, getEdges } = useReactFlow();
    // Define the function to log a message
    const handleClick = async() => {
        const nodes = getNodes();
        const edges = getEdges();

        // Print each node object
        // console.log("Nodes:");
        // nodes.forEach((node, index) => {
        //     console.log(`Node ${index + 1}:`, node);
        // });

        // // Print each edge object
        // console.log("Edges:");
        // edges.forEach((edge, index) => {
        //     console.log(`Edge ${index + 1}:`, edge);
        // });
        
        console.log(`${nodes.length}, ${edges.length}`)
        console.log("Button is clicked");
        
        const payload = {
            nodes: nodes.map(node => ({ id: node.id })),  // List of nodes with only the 'id' parameter
            edges: edges.map(edge => ({ source: edge.source, target: edge.target }))  // List of edges with 'source' and 'target' parameters
        };

        console.log("Payload:", JSON.stringify(payload));

        const response = await fetch('http://localhost:5000/pipelines/parse', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload)  // Convert payload to a JSON string
        });
        const data = await response.json();
        console.log(`${data.num_nodes} ${data.num_edges} ${data.is_dag}`);
    };

    // Pass the handleClick function to the Button component as the onClick prop
    return (
        <Button text="Submit" onClick={handleClick} />
    );
};
