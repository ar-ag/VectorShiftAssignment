// import { useState, useRef, useEffect } from 'react';
// import { Position, useUpdateNodeInternals } from 'reactflow';
// import { AbstractNode } from '../components/abstractNode';

// export const TextNode = ({ id, data }) => {
//   const updateNodeInternals = useUpdateNodeInternals();
//   const [currText, setCurrText] = useState(data?.text || '');
//   const [dimensions, setDimensions] = useState({ width: 200, height: 150 });
//   const [detectedVariables, setDetectedVariables] = useState([]); 
//   const inputRef = useRef(null);
//   const margin = 10;

//   const handleTextChange = (e) => {
//     setCurrText(e.target.value);
//   };

//   useEffect(() => {
//     const variableRegex = /{{\s*([a-zA-Z_$][0-9a-zA-Z_$]*)\s*}}/g;
//     const matches = Array.from(currText.matchAll(variableRegex), match => match[1]);
//     setDetectedVariables(matches);
//     updateNodeInternals(id);
//   }, [currText]);

//   useEffect(() => {
//     if (inputRef.current) {
//       const textLength = currText.length;
//       const newWidth = Math.max(200, textLength * 4);
//       const newHeight = Math.max(150, textLength * 6);

//       setDimensions({
//         width: newWidth,
//         height: newHeight,
//       });
//     }
//   }, [currText]);

//   return (
//     <AbstractNode 
//       id={id}
//       width={dimensions.width}
//       height={dimensions.height}
//       handleConfig={[
//         { type: 'source', position: Position.Right, id: `output` },
//         ...detectedVariables.map((variable, index) => ({
//           type: 'target',
//           position: Position.Left,
//           id: `${variable}`,  // Unique id for each handle based on node id and variable name
//           top: `${(index + 1) * 20}%`
//         }))
//       ]}
//     >
//       <div style={{ width: '100%', height: '100%', padding: margin }}>
//         <span>Text</span>
//         <div style={{ display: 'flex', flexDirection: 'column', height: '100%', marginTop: '10px' }}>
//           <label>
//             Text:
//             <textarea 
//               ref={inputRef}
//               value={currText} 
//               onChange={handleTextChange} 
//               style={{ 
//                 width: `calc(100% - ${margin * 2}px)`,
//                 height: 'auto',
//                 margin: margin,
//                 boxSizing: 'border-box',
//                 resize: 'none',
//                 overflow: 'hidden'
//               }}
//               rows={1}
//               onInput={(e) => {
//                 e.target.style.height = 'auto';
//                 e.target.style.height = `${e.target.scrollHeight}px`;
//               }}
//             />
//           </label>
//         </div>
//       </div>
//     </AbstractNode>
//   );
// };


import { useState, useRef, useEffect } from 'react';
import { Position, useUpdateNodeInternals } from 'reactflow';
import { AbstractNode } from '../components/abstractNode';

export const TextNode = ({ id, data }) => {
  const updateNodeInternals = useUpdateNodeInternals();
  const [currText, setCurrText] = useState(data?.text || '');
  const [dimensions, setDimensions] = useState({ width: 200, height: 150 });
  const [detectedVariables, setDetectedVariables] = useState([]); 
  const [textAreaHeight, setTextAreaHeight] = useState(0);  // State to track textarea scroll height
  const inputRef = useRef(null);
  const margin = 10;

  const handleTextChange = (e) => {
    setCurrText(e.target.value);
  };

  useEffect(() => {
    const variableRegex = /{{\s*([a-zA-Z_$][0-9a-zA-Z_$]*)\s*}}/g;
    const matches = Array.from(currText.matchAll(variableRegex), match => match[1]);
    setDetectedVariables(matches);
    updateNodeInternals(id);
  }, [currText]);

  useEffect(() => {
    if (inputRef.current) {
      // Calculate the textarea scroll height
      const newHeight = inputRef.current.scrollHeight;
      
      setTextAreaHeight(newHeight);  // Update textarea height state
    }
  }, [currText]);

  useEffect(() => {
    // Update the dimensions of AbstractNode based on textarea height
    const newWidth = Math.max(200, currText.length * 4);
    const newHeight = Math.max(150, textAreaHeight + 150);  // 60px for other content (label, etc.)

    setDimensions({
      width: newWidth,
      height: newHeight,
    });
  }, [textAreaHeight, currText]);

  return (
    <AbstractNode 
      id={id}
      width={dimensions.width}
      height={dimensions.height}
      handleConfig={[
        { type: 'source', position: Position.Right, id: `output` },
        ...detectedVariables.map((variable, index) => ({
          type: 'target',
          position: Position.Left,
          id: `${variable}`,  // Unique id for each handle based on node id and variable name
          top: `${(index + 1) * 20}%`
        }))
      ]}
    >
      <div style={{ width: '100%', height: '100%', padding: margin }}>
        <span>Text</span>
        <div style={{ display: 'flex', flexDirection: 'column', height: '100%', marginTop: '10px' }}>
          <label>
            Text:
            <textarea 
              ref={inputRef}
              value={currText} 
              onChange={handleTextChange} 
              style={{ 
                width: `calc(100% - ${margin * 2}px)`,
                height: `${textAreaHeight}px`,  // Set the height based on scroll height
                margin: margin,
                boxSizing: 'border-box',
                resize: 'none',
                overflow: 'hidden'
              }}
              rows={1}
              onInput={(e) => {
                e.target.style.height = 'auto';
                e.target.style.height = `${e.target.scrollHeight}px`;
                setTextAreaHeight(e.target.scrollHeight);  // Update textAreaHeight state
              }}
            />
          </label>
        </div>
      </div>
    </AbstractNode>
  );
};
