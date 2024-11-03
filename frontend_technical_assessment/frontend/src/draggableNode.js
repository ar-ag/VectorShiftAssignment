// draggableNode.js

export const DraggableNode = ({ type, label, icon }) => {
    const onDragStart = (event, nodeType) => {
        const appData = { nodeType };
        event.target.style.cursor = 'grabbing';
        event.dataTransfer.setData('application/reactflow', JSON.stringify(appData));
        event.dataTransfer.effectAllowed = 'move';
    };

    return (
        <div
            className={`${type} cursor-grab w-[80px] h-[80px] flex flex-col items-center justify-center rounded-lg border border-gray-300 bg-white shadow-md`}
            onDragStart={(event) => onDragStart(event, type)}
            onDragEnd={(event) => (event.target.style.cursor = 'grab')}
            draggable
        >
            <div className="text-gray-500 text-2xl mb-1">
                {icon}
            </div>
            <span className="text-gray-500 text-sm">{label}</span>
        </div>
    );
};
