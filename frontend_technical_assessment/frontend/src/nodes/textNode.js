import { useState, useRef, useEffect } from 'react';
import { Position } from 'reactflow';
import { AbstractNode } from '../components/abstractNode';

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '{{input}}');
  const [dimensions, setDimensions] = useState({ width: 200, height: 150 }); // Start with a 4:3 ratio (200x150)
  const inputRef = useRef(null);
  const margin = 10; // Margin around the input box

  const handleTextChange = (e) => {
    setCurrText(e.target.value);
  };

  useEffect(() => {
    if (inputRef.current) {
      // Calculate width based on text length, set a minimum width of 200
      const textLength = currText.length;
      const newWidth = Math.max(200, textLength * 4);  // Adjust multiplier to control width growth

      // Update height based on the scrollHeight of the textarea
      const newHeight = Math.max(150, textLength * 4); // +2*margin for padding

      setDimensions({
        width: newWidth,
        height: newHeight,
      });
    }
  }, [currText]);

  return (
    <AbstractNode 
      id={id}
      width={dimensions.width}
      height={dimensions.height}
      handleConfig={[
        { type: 'source', position: Position.Right, id: 'output' }
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
                width: `calc(100% - ${margin * 2}px)`,  // Subtract margin from width
                height: 'auto', // Set height to auto to allow dynamic resizing
                margin: margin,  // Apply margin to all sides
                boxSizing: 'border-box', // Ensure padding/margin is included in width/height
                resize: 'none', // Prevent manual resizing
                overflow: 'hidden' // Hide overflow
              }}
              rows={1} // Set initial row count
              onInput={(e) => {
                e.target.style.height = 'auto'; // Reset height
                e.target.style.height = `${e.target.scrollHeight}px`; // Update height based on scrollHeight
              }}
            />
          </label>
        </div>
      </div>
    </AbstractNode>
  );
};
