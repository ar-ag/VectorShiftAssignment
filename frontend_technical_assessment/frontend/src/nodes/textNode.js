import { useState, useRef, useEffect } from 'react';
import { Position } from 'reactflow';
import { AbstractNode } from '../components/abstractNode';

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '{{input}}');
  const [dimensions, setDimensions] = useState({ width: 200, height: 150 });
  const [textHeight, setTextHeight] = useState(0); // State to track scrollHeight of input box
  const inputRef = useRef(null);
  const margin = 10;

  const handleTextChange = (e) => {
    setCurrText(e.target.value);
  };

  useEffect(() => {
    if (inputRef.current) {
      const textLength = currText.length;
      const newWidth = Math.max(200, textLength * 4);
      const newHeight = Math.max(150, textHeight * 2.4); // Adjust node height based on textHeight

      setDimensions({
        width: newWidth,
        height: newHeight,
      });
    }
  }, [currText, textHeight]);

  const handleInput = (e) => {
    e.target.style.height = 'auto';
    e.target.style.height = `${e.target.scrollHeight}px`;
    setTextHeight(e.target.scrollHeight); // Update textHeight with scrollHeight
  };

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
              onInput={handleInput} // Track input changes to adjust scrollHeight
              style={{ 
                width: `calc(100% - ${margin * 2}px)`,
                height: 'auto',
                margin: margin,
                boxSizing: 'border-box',
                resize: 'none',
                overflow: 'hidden'
              }}
              rows={1}
            />
          </label>
        </div>
      </div>
    </AbstractNode>
  );
};
