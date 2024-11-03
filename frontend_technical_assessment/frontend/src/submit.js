import React, { useState, useEffect } from "react";
import Button from "./components/Button";
import { useReactFlow } from 'reactflow';
import SimpleAlert from "./components/SimpleAlert";
import { FaRegCircleCheck } from "react-icons/fa6";
import { IoWarningOutline } from "react-icons/io5";

export const SubmitButton = () => {
    const { getNodes, getEdges } = useReactFlow();
    const [alertData, setAlertData] = useState(null); // Holds the data to display in SimpleAlert
    const [isAlertVisible, setIsAlertVisible] = useState(false); // Controls SimpleAlert visibility

    const handleClick = async () => {
        const nodes = getNodes();
        const edges = getEdges();
        console.log(`${nodes.length}, ${edges.length}`);

        const payload = {
            nodes: nodes.map(node => ({ id: node.id })),
            edges: edges.map(edge => ({ source: edge.source, target: edge.target }))
        };

        try {
            const response = await fetch('http://localhost:5000/pipelines/parse', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload)
            });

            if (!response.ok) throw new Error('Network response was not ok');

            const data = await response.json();
            console.log(`${data.num_nodes} ${data.num_edges} ${data.is_dag}`);

            setAlertData({
                numNodes: data.num_nodes,
                numEdges: data.num_edges,
                isDAG: data.is_dag
            });
            setIsAlertVisible(true); // Show the alert each time submit is clicked
        } catch (error) {
            console.error("Error fetching data:", error);
            setAlertData({ numNodes: null, numEdges: null, isDAG: "Error fetching data. Please try again." });
            setIsAlertVisible(true);
        }
    };

    return (
        <div>
            <Button text="Submit" onClick={handleClick} />
            {isAlertVisible && (
                <SimpleAlert 
                    numNodes={alertData.numNodes} 
                    numEdges={alertData.numEdges} 
                    isDAG={alertData.isDAG} 
                    severity={alertData.isDAG ? "success":"warning"}
                    icon = {alertData.isDAG ? <FaRegCircleCheck /> : <IoWarningOutline />}
                    onClose={() => setIsAlertVisible(false)} // Hide alert on close
                />
            )}
        </div>
    );
};
