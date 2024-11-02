// AbstractNode.js

import { Handle, useUpdateNodeInternals } from 'reactflow';

export const AbstractNode = ({ id, color = 'black', width = 200, height = 80, title="Title", border = '1px solid black' , children, handleConfig = [] }) => {
    const updateNodeInternals = useUpdateNodeInternals();
  return (
    <div style={{ width, color, height, border, padding: 5 }}>
        
      {handleConfig.map((handle, index) => {
        updateNodeInternals(id);
       console.log(`${handle.id} ${handle.type} ${handle.isConnectable}`)
        return (
        <Handle
          key={`${id}-${handle.id}-${index}`}
          type={handle.type}
          position={handle.position}
          id={`${id}-${handle.id}`}
          isConnectable={handle.isConnectable !== undefined ? handle.isConnectable : true}
          isConnectableStart={handle.isConnectableStart !== undefined ? handle.isConnectable : true}
          isConnectableEnd={handle.isConnectableEnd !== undefined ? handle.isConnectableEnd : true}
          onConnect={(handle.onConnect) ? (params) => handle.onConnect(params) : undefined}
          isValidConnection={handle.isValidConnection ? (params) => handle.isValidConnection(params) : undefined}
          style={{ top: handle.top }}
        />
      );
    })}
      <div>
        <span>{title}</span>
      </div>
      <div>
        {children}
      </div>
    </div>
  );
};
