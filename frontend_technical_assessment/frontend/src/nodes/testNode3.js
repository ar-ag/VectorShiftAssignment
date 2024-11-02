

import { AbstractNode } from '../components/abstractNode';
import { Handle, Position } from 'reactflow';

export const TestNode3 = ({ id }) => {
    const handleConnect = (params) => {
        console.log(`i am connected ${params}`)
    }
    
  return (
    <AbstractNode
      id={id}
      title="TestNode3"
      width={500}
      height={200}
      handleConfig={[
        { type: 'target', position: Position.Left, id: 'system', onConnect: handleConnect },
        { type: 'source', position: Position.Right, id: 'prompt', onConnect: handleConnect },
      ]}
    >
      <div>
        <span>This is a TestNode3 with custom height and width</span>
      </div>
    </AbstractNode>
  );
};
