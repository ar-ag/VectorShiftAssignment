

import { useState } from 'react';
import { AbstractNode } from '../components/abstractNode';
import { Handle, Position } from 'reactflow';

export const TestNode1 = ({ id }) => {
    const [isConnected, setIsConnected] = useState(false);
    const handleConnect = (params) => {
        console.log(`i am connected ${params}`)
        setIsConnected(true);
    }
    const handleValidConnection = (params) => {
        console.log(`i am valid connected ${params}`)
        return true;
    }
  return (
    <AbstractNode
      id={id}
      title="Test1"
      width={200}
      height={80}
      handleConfig={[
        { type: 'target', position: Position.Left, id: 'system', top: '33%', onConnect: handleConnect, isValidConnection: handleValidConnection },
        { type: 'target', position: Position.Left, id: 'prompt', top: '66%', onConnect: handleConnect, isValidConnection: handleValidConnection },
        { type: 'source', position: Position.Right, id: 'response', onConnect: handleConnect, isValidConnection: handleValidConnection },
        { type: 'target', position: Position.Top, id: 'noConnect', onConnect: handleConnect, isValidConnection: handleValidConnection }
      ]}
    >
      <div>
        <span>This is a TestNode1 with onConnect.</span>
        <br />
        {isConnected ? (<span>is connected</span>) : <span>is not connected</span>}
      </div>
    </AbstractNode>
  );
};
