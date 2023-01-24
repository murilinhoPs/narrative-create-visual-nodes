import React, { memo, useCallback, useRef } from 'react';
import { shallow } from 'zustand/shallow'
import TextareaAutosize, { TextareaHeightChangeMeta } from 'react-textarea-autosize';
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
import { heightOffsetY, nodeDefaultHeight } from '../../utils/NodesVars';


const NarrativeNode: React.FC<NodeProps<NarrativeNodeData>> = ({ data, id }) => {
    let optionNodeId = 1;
    let heightOffset = heightOffsetY;
    const height = useRef(0);
    const reactFlowInstance = useReactFlow();
    const { updateNodeHeightOffset } = useReactFlowStore((state) => ({
        updateNodeHeightOffset: state.updateOptionNodeHeightOffset,
    }), shallow);

    const onClickAdd = useCallback(
        () => {
            height.current += heightOffset;
            ++optionNodeId
            const optionNode: Node<OptionNodeData> = {
                id: `${id}-${optionNodeId}`,
                type: 'optionNode',
                draggable: false,
                data: {
                    index: optionNodeId,
                    text: `Option ${optionNodeId}`,
                    nextText: 0,
                    setState: { mapa: true },
                },
                position: { x: 0, y: nodeDefaultHeight + height.current },
                parentNode: id,
                zIndex: optionNodeId + 1,
                extent: 'parent',
            }
            reactFlowInstance.addNodes(optionNode)
        }, [])

    const handleHeightChange = (value: number, { rowHeight }: TextareaHeightChangeMeta) => {
        height.current = updateNodeHeightOffset((rowHeight / 4) + 0.28, id, 'optionNode')
    }

    return (
        <>
            <Handle style={{ ...HandleStles.target, top: 90 }} type='target' position={Position.Left} />
            <div className='text-node'>
                <label>Id: {id}</label>
                <label>Nome: {data.label}</label>
                <label className="toggle-switch">
                    <input className='toggle-switch-checkbox' type="checkbox" onChange={() => { }} />
                    <span>save: </span>
                </label>
                <div className='narrative-title nodrag'>
                    <label>narrativa: </label>
                    <TextareaAutosize
                        className='title-input'
                        id='text'
                        rows={6}
                        minRows={3}
                        maxRows={6}
                        defaultValue={data.title}
                        onHeightChange={handleHeightChange}
                    />
                </div>
            </div>
            <button onClick={onClickAdd} className='btn-add-option'>+</button>
        </>)
}

export default memo(NarrativeNode);