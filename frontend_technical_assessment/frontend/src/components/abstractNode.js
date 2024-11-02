// AbstractNode.js

import { Handle } from 'reactflow';

export const AbstractNode = ({ id, color = 'black', width = 200, height = 80, title="Title", border = '1px solid black' , children, handleConfig = [] }) => {
  return (
    <div style={{ width, color, height, border, padding: 5 }}>
        
      {handleConfig.map((handle, index) => {
       
        return (
        <Handle
          key={`${id}-${handle.id}-${index}`}
          type={handle.type}
          position={handle.position}
          id={`${id}-${handle.id}`}
          isConnectable={handle.isConnectable !== undefined ? handle.isConnectable : true}
          isConnectableStart={handle.isConnectableStart}
          isConnectableEnd={handle.isConnectableEnd}
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
