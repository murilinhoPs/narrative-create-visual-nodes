import React, { memo, useCallback, useRef, useState } from 'react';
import { shallow } from 'zustand/shallow'
import {
    NodeProps,
    Handle,
    Position,
    useReactFlow,
    Node
} from 'reactflow';
import './index.css';

import { OptionNodeData, NarrativeNodeData } from '../../services/NodeTypes';
import * as HandleStles from './HandleStyles'
import useReactFlowStore from '../../stores/ReactFlowStore';


const NarrativeNode: React.FC<NodeProps<NarrativeNodeData>> = ({ data, id }) => {
    let optionNodeId = 1;
    let heightOffset = 46;
    const height = useRef(0);
    const reactFlowInstance = useReactFlow();
    const [textareaheight, setTextareaheight] = useState(4);
    const { updateNodeHeightOffset } = useReactFlowStore((state) => ({
        updateNodeHeightOffset: state.updateOptionNodeHeightOffset,
    }), shallow);

    const onClickAdd = useCallback(
        () => {
            height.current += heightOffset;
            ++optionNodeId
            const optionNode: Node<OptionNodeData> = {
                id: `${id} - ${optionNodeId}`,
                type: 'optionNode',
                draggable: false,
                data: {
                    index: optionNodeId,
                    text: `Option ${optionNodeId}`,
                    nextText: 1,
                    setState: { mapa: true },
                },
                // style: { background: 'rgb(193, 42, 42)' },
                position: { x: 0, y: 120 + height.current },
                parentNode: id,
                zIndex: optionNodeId,
                extent: 'parent',
            }
            reactFlowInstance.addNodes(optionNode)
        }, [])

    const handleChange = (event: any) => {
        const areaHeight = event.target.scrollHeight;
        const rowHeight = 15;
        const trows = Math.ceil(areaHeight / rowHeight) + 1;
        if (trows && textareaheight) {
            setTextareaheight(trows);
        }
        height.current = updateNodeHeightOffset(trows + 16, id, 'optionNode')
    }

    return (
        <>
            <Handle style={{ ...HandleStles.target, top: 90 }} type='target' position={Position.Left} />
            {/* <Handle style={HandleStles.target} type='target' position={Position.Top} /> */}
            <div className='text-node'>
                <label>Id: {id}</label>
                <label>Nome: {data.label}</label>
                <label className="toggle-switch">
                    <input className='toggle-switch-checkbox' type="checkbox" onChange={() => { }} />
                    <span>save: </span>
                </label>
                <div className='narrative-title nodrag'>
                    <label>narrativa: </label>
                    <textarea
                        className='title-input'
                        id='text'
                        defaultValue={data.title}
                        rows={textareaheight}
                        onChange={handleChange}
                    />
                </div>
            </div>
            <button onClick={onClickAdd} className='btn-add-option'>+</button>
        </>)
}

export default memo(NarrativeNode);