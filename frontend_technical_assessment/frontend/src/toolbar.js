// toolbar.js

import { DraggableNode } from './draggableNode';

export const PipelineToolbar = () => {

    return (
        <div style={{ padding: '10px' }}>
            <div style={{ marginTop: '20px', display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                <DraggableNode type='customInput' label='Input' />
                <DraggableNode type='llm' label='LLM' />
                <DraggableNode type='customOutput' label='Output' />
                <DraggableNode type='text' label='Text' />
                <DraggableNode type='test1' label='Test1' />
                <DraggableNode type='test2' label='Test2' />
                <DraggableNode type='test3' label='Test3' />
                <DraggableNode type='test4' label='Test4' />
                <DraggableNode type='test5' label='Test5' />
            </div>
        </div>
    );
};
