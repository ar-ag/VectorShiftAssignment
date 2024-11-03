// outputNode.js

import { useState } from 'react';
import { Position } from 'reactflow';
import { AbstractNode } from '../components/abstractNode';

export const OutputNode = ({ id, data }) => {
  // State to track the current name and output type
  const [currName, setCurrName] = useState(data?.outputName || id.replace('customOutput-', 'output_'));
  const [outputType, setOutputType] = useState(data.outputType || 'Text');

  // Handlers for input changes
  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  const handleTypeChange = (e) => {
    setOutputType(e.target.value);
  };

  // Define handle configuration for the output node
  const handleConfig = [
    {
      id: 'value',
      type: 'target',
      position: Position.Left,
      top: '50%' // Center the handle vertically
    }
  ];

  return (
    <AbstractNode
      id={id}
      title="Output"
      width={200}
      height={120} // Adjusted height to accommodate input fields
      border="1px solid black"
      handleConfig={handleConfig}
    >
      {/* Children elements with input fields for name and type */}
      <div>
        <label>
          Name:
          <input 
            type="text" 
            value={currName} 
            onChange={handleNameChange} 
          />
        </label>
      </div>
      <div>
        <label>
          Type:
          <select value={outputType} onChange={handleTypeChange}>
            <option value="Text">Text</option>
            <option value="Image">Image</option>
          </select>
        </label>
      </div>
    </AbstractNode>
  );
};
