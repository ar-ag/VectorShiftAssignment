// toolbar.js

import { DraggableNode } from './draggableNode';
import { MdOutlineInput } from "react-icons/md";
import { MdOutlineOutput } from "react-icons/md";
import { PiGraphBold } from "react-icons/pi";
import { BsFileText } from "react-icons/bs";
import { CiStickyNote } from "react-icons/ci";
import { SiGitconnected } from "react-icons/si";
import { RiCheckboxMultipleBlankLine } from "react-icons/ri";
import { LuShapes } from "react-icons/lu";
import { HiOutlineMail } from "react-icons/hi";
export const PipelineToolbar = () => {
    return (
        <div className="p-2">
            <div className="mt-0 flex flex-wrap gap-2">
                <DraggableNode type="customInput" label="Input" icon={<MdOutlineInput />} />
                <DraggableNode type="llm" label="LLM" icon={<PiGraphBold />} />
                <DraggableNode type="customOutput" label="Output" icon={<MdOutlineOutput />} />
                <DraggableNode type="text" label="Text" icon={<BsFileText />} />
                <DraggableNode type="test1" label="Test1" icon={<SiGitconnected />} />
                <DraggableNode type="test2" label="Test2" icon={<CiStickyNote />}/>
                <DraggableNode type="test3" label="Test3" icon={<RiCheckboxMultipleBlankLine />} />
                <DraggableNode type="test4" label="Test4" icon={<LuShapes />}/>
                <DraggableNode type="test5" label="Test5" icon={<HiOutlineMail />} />
            </div>
        </div>
    );
};
