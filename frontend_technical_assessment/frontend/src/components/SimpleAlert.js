// SimpleAlert.js

import * as React from 'react';
import Alert from '@mui/material/Alert';

export default function SimpleAlert({ numNodes, numEdges, isDAG, onClose, severity, icon }) {
  return (
    <Alert
      icon={icon}
      severity={severity}
      className="fixed top-5 left-1/2 transform -translate-x-1/2 z-50 max-w-[85%] w-full sm:w-[600px] p-6 text-lg shadow-lg"
      onClose={onClose}
    >
      <p>Number of Nodes: {numNodes}</p>
      <p>Number of Edges: {numEdges}</p>
      <p>Is DAG: {isDAG ? 'Yes' : 'No'}</p>
    </Alert>
  );
}
