import { PipelineToolbar } from './toolbar';
import { SubmitButton } from './submit';
import { PipelineUI } from './ui';
import ReactFlow, { ReactFlowProvider } from 'reactflow';

function App() {
  return (
    <>
    <ReactFlowProvider className="h-screen w-full">
        <div className="h-screen w-full">
        {/* Top navigation bar */}
        <div className="flex items-center justify-between px-4 py-1 border-b border-gray-300">
            {/* Toolbar with boxes */}
            <PipelineToolbar />

            {/* Submit button aligned to the right */}
            <SubmitButton />
        </div>

        {/* The rest of the screen (for your canvas) */}
        <div className="p-4 h-screen">
            <PipelineUI />
        </div>
        </div>
    </ReactFlowProvider>
    </>
  );
}

export default App;
