// llmNode.js

import { AbstractNode } from '../components/abstractNode';
import { Handle, Position } from 'reactflow';

export const TestNode2 = ({ id }) => {
    const handleConnect = (params) => {
        console.log(`i am connected ${params}`)
    }
    
  return (
    <AbstractNode
      id={id}
      title="TestNode2"
      border="2px dashed blue"
      width={200}
      height={80}
      handleConfig={[
        { type: 'target', position: Position.Left, id: 'system', onConnect: handleConnect },
        { type: 'source', position: Position.Right, id: 'prompt', onConnect: handleConnect },
      ]}
    >
      <div>
        <span>This is a TestNode2 with custom border</span>
      </div>
    </AbstractNode>
  );
};
