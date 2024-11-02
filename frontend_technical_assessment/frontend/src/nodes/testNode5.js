

import { AbstractNode } from '../components/abstractNode';
import { Handle, Position } from 'reactflow';

export const TestNode5 = ({ id }) => {
    const handleConnect = (params) => {
        console.log(`i am connected ${params}`)
    }
    
  return (
    <AbstractNode
      id={id}
      title="TestNode5"
      color='blue'
      handleConfig={[
        { type: 'target', position: Position.Left, id: 'system', onConnect: handleConnect },
        { type: 'source', position: Position.Right, id: 'prompt', onConnect: handleConnect },
      ]}
    >
      <div>
        <span>This is a TestNode5 with custom color</span>
      </div>
    </AbstractNode>
  );
};
