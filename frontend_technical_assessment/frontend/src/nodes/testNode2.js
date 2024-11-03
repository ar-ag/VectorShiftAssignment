// llmNode.js

import { AbstractNode } from '../components/abstractNode';
import { Handle, Position } from 'reactflow';
import { useState } from 'react';

export const TestNode2 = ({ id }) => {
    const [text, setText] = useState(''); // State for the input text

    const handleConnect = (params) => {
        console.log(`I am connected ${params}`);
    };

    return (
        <AbstractNode
            id={id}
            handleConfig={[{ id: 'value', type: 'source', position: Position.Right }]} // Optional handle configuration
            bgColor='bg-yellow-100'
        >
            <div className="p-4">
                <textarea
                    className="bg-transparent w-full h-full resize-none outline-none"
                    placeholder="Type your note here..."
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
            </div>
        </AbstractNode>
    );
};
