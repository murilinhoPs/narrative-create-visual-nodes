import React, { memo, useCallback, useRef, useState } from 'react';
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


const NarrativeNode: React.FC<NodeProps<NarrativeNodeData>> = ({ data, id }) => {
    let optionNodeId = 1;
    let heightOffset = 46;
    const height = useRef(0);
    const reactFlowInstance = useReactFlow();
    const [textareaheight, setTextareaheight] = useState(1);

    const updateNodesOffset = (flowNodeStates: Node<OptionNodeData>[]): Node<OptionNodeData>[] => {
        return flowNodeStates.map((node) => {
            console.log(node.parentNode);

            height.current += 20;
            return {
                ...node,
                position: {
                    x: 0,
                    y: node.position.y + height.current,
                },
            };
        });
    };

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
                position: { x: 0, y: 100 + height.current },
                parentNode: id,
                extent: 'parent',
            }
            reactFlowInstance.addNodes(optionNode)
        }, [])

    const handleChange = (event: any) => {
        const height = event.target.scrollHeight;
        const rowHeight = 15;
        const trows = Math.ceil(height / rowHeight) - 1;
        if (trows && textareaheight) {
            setTextareaheight(trows);
        }
        let thisOptionNodes = reactFlowInstance.getNodes().filter((e) => e.type === 'optionNode' && e.parentNode === `${id}`)
        console.log(thisOptionNodes);
        // reactFlowInstance.setNodes((nds) => updateNodesOffset(thisOptionNodes))
        // reactFlowInstance.setNodes()
    }

    return (
        <>
            <Handle style={{ ...HandleStles.target, top: 80 }} type='target' position={Position.Left} />
            <Handle style={HandleStles.target} type='target' position={Position.Top} />
            <div className='text-node'>
                <label>Id: {id}</label>
                <label>Nome: {data.label}</label>
                <label className="toggle-switch">
                    <input className='toggle-switch-checkbox' type="checkbox" onChange={() => { }} />
                    <span>save: </span>
                </label>
                <div className='narrative-title'>
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