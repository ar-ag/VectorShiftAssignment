// inputNode.js

import { useState } from 'react';
import { Position } from 'reactflow';
import { AbstractNode } from '../components/abstractNode';

export const InputNode = ({ id, data }) => {
  // State to track the current name and input type
  const [currName, setCurrName] = useState(data?.inputName || id.replace('customInput-', 'input_'));
  const [inputType, setInputType] = useState(data.inputType || 'Text');

  // Handlers for input changes
  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  const handleTypeChange = (e) => {
    setInputType(e.target.value);
  };

  // Define handle configuration
  const handleConfig = [
    {
      id: 'value',
      type: 'source',
      position: Position.Right,
      top: '50%'
    }
  ];

  return (
    <AbstractNode
      id={id}
      title="Input"
      width={200}
      height={120} // Adjusted height to accommodate input fields
      
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
          <select value={inputType} onChange={handleTypeChange}>
            <option value="Text">Text</option>
            <option value="File">File</option>
          </select>
        </label>
      </div>
    </AbstractNode>
  );
};
