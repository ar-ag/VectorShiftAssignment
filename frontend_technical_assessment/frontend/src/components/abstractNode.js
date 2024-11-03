
// // AbstractNode.js

// import { Handle, useUpdateNodeInternals } from 'reactflow';

// export const AbstractNode = ({ id, color = 'black', width = 200, height = 80, title="Title", border = '1px solid black' , children, handleConfig = [] }) => {
//     const updateNodeInternals = useUpdateNodeInternals();
//   return (
//     <div style={{ width, color, height, border, padding: 5 }}>
        
//       {handleConfig.map((handle, index) => {
//         updateNodeInternals(id);
//        console.log(`${handle.id} ${handle.type} ${handle.isConnectable}`)
//         return (
//         <Handle
//           key={`${id}-${handle.id}-${index}`}
//           type={handle.type}
//           position={handle.position}
//           id={`${id}-${handle.id}`}
//           isConnectable={handle.isConnectable !== undefined ? handle.isConnectable : true}
//           isConnectableStart={handle.isConnectableStart !== undefined ? handle.isConnectable : true}
//           isConnectableEnd={handle.isConnectableEnd !== undefined ? handle.isConnectableEnd : true}
//           onConnect={(handle.onConnect) ? (params) => handle.onConnect(params) : undefined}
//           isValidConnection={handle.isValidConnection ? (params) => handle.isValidConnection(params) : undefined}
//           style={{ top: handle.top }}
//         />
//       );
//     })}
//       <div>
//         <span>{title}</span>
//       </div>
//       <div>
//         {children}
//       </div>
//     </div>
//   );
// };


// AbstractNode.js

import { Handle, useUpdateNodeInternals } from 'reactflow';

export const AbstractNode = ({
  id,
  textColor = 'text-gray-500',
  bgColor = 'bg-gray-50',
  border = 'border-violet-500',
  shadow = 'shadow-violet-500',
  width = 300,
  height = 200,
  title = "",
  children,
  handleConfig = [],
}) => {
  const updateNodeInternals = useUpdateNodeInternals();
  return (
    <div className={`flex flex-col justify-center ${textColor} rounded-md border ${border} p-2 ${bgColor} hover:shadow hover:${shadow} transition-shadow duration-300`} style={{ width, height }}>
      {handleConfig.map((handle, index) => {
        updateNodeInternals(id);
        console.log(`${handle.id} ${handle.type} ${handle.isConnectable}`);
        
        return (
          <Handle
            key={`${id}-${handle.id}-${index}`}
            type={handle.type}
            position={handle.position}
            id={`${id}-${handle.id}`}
            isConnectable={handle.isConnectable !== undefined ? handle.isConnectable : true}
            isConnectableStart={handle.isConnectableStart !== undefined ? handle.isConnectable : true}
            isConnectableEnd={handle.isConnectableEnd !== undefined ? handle.isConnectableEnd : true}
            onConnect={handle.onConnect ? (params) => handle.onConnect(params) : undefined}
            isValidConnection={handle.isValidConnection ? (params) => handle.isValidConnection(params) : undefined}
            style={{
                top: handle.top,
                // Styling the handle to appear as an outlined circular node
                border: '0.5px solid black', // Outline color and width
                borderRadius: '50%', // Circular shape
                width: '12px', // Set width for the circular handle
                height: '12px', // Set height for the circular handle
                position: 'absolute', // Positioning the handle absolutely
                // transform: 'translate(-50%, -50%)', // Center the handle
                backgroundColor: 'white', // No fill color
                zIndex: 1, // Ensure it appears above other elements
              }}
          />
        );
      })}
      <div className="text-lg font-semibold">
        {title}
      </div>
      <div className="mt-2">
        {children}
      </div>
    </div>
  );
};


