

import { AbstractNode } from '../components/abstractNode';
import { Handle, Position } from 'reactflow';
import { useState } from 'react';

export const TestNode4 = ({ id, data }) => {
    const handleConnect = (params) => {
        console.log(`i am connected ${params}`)
    }

    const [currName, setCurrName] = useState(data?.outputName || id.replace('customOutput-', 'output_'));

    const handleNameChange = (e) => {
        setCurrName(e.target.value);
    };


    
  return (
    <AbstractNode
      id={id}
      border="border-rose-500"
      shadow="shadow-rose-800"
      title="TestNode4"
      handleConfig={[
        { type: 'target', position: Position.Left, id: 'system', onConnect: handleConnect },
        { type: 'source', position: Position.Right, id: 'prompt', onConnect: handleConnect },
      ]}
    >
      <div>
        <span>This is a TestNode4 with custom border</span>

      </div>
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
    </AbstractNode>
  );
};
