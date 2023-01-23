import React, { memo, useCallback } from 'react';
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


const NarrativeNode: React.FC<NodeProps<NarrativeNodeData>> = ({ data, xPos, yPos, id }) => {
    let optionNodeId = 1;

    const reactFlowInstance = useReactFlow();

    const onClickAdd = useCallback(
        () => {
            let height = 0;
            for (let index = 0; index < optionNodeId; index++) {
                height += 46;
            }

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
                position: { x: 0, y: 100 + height },
                parentNode: id,
                extent: 'parent',
            }
            reactFlowInstance.addNodes(optionNode)
        }, [])

    return <div className='text-node'>
        <Handle style={HandleStles.target} type='target' position={Position.Left} />
        <Handle style={HandleStles.target} type='target' position={Position.Top} />
        <div>
            <label>Id: {id}</label>
            <label htmlFor='text'>Nome: {data.label}</label>
            <div className='narrative-title'>
                <label>narrativa: </label>
                <textarea className='title-input'
                    id='text'
                    onChange={() => { }}
                    defaultValue={data.title}
                />
            </div>
            <label className="toggle-switch">
                <input className='toggle-switch-checkbox' type="checkbox" onChange={() => { }} />
                <span>save: </span>
            </label>
        </div>
        <button onClick={onClickAdd} className='btn-add-option'>+</button>
    </div>
}

export default memo(NarrativeNode);