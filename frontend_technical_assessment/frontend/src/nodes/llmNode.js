// llmNode.js

import { Position } from 'reactflow';
import { AbstractNode } from '../components/abstractNode';

export const LLMNode = ({ id, data }) => {
  // Define handle configuration for the LLM node
  const handleConfig = [
    {
      id: 'system',
      type: 'target',
      position: Position.Left,
      top: `${100 / 3}%`
    },
    {
      id: 'prompt',
      type: 'target',
      position: Position.Left,
      top: `${200 / 3}%`
    },
    {
      id: 'response',
      type: 'source',
      position: Position.Right,
      top: '50%'
    }
  ];

  return (
    <AbstractNode
      id={id}
      title="LLM"
      width={200}
      height={80}
      border="1px solid black"
      handleConfig={handleConfig}
    >
      <div>This is a LLM.</div>
    </AbstractNode>
  );
};
