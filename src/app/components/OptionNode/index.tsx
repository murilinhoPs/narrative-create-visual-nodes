import React, { useCallback, memo, useEffect } from 'react';
import { OptionNodeData } from '../../services/NodeTypes';
import { Handle, NodeProps, Position } from 'reactflow';
import './styles.css'
import useReactFlowStore from '../../stores/ReactFlowStore';
import { shallow } from 'zustand/shallow';


const OptionNode: React.FC<NodeProps<OptionNodeData>> = ({ data, id }) => {
    const { nodes } = useReactFlowStore((state) => ({
        nodes: state.nodes,
    }), shallow);
    const nextText = nodes.find((node) => node.id === id)?.data.nextText;

    const onChange = useCallback((evt: any) => {
        console.log(evt.target.value);
    }, [])

    useEffect(() => {
        console.log(data.index);
    },)


    return (
        <div className='option-node'>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                <label>escolha: </label>
                <label style={{ marginLeft: 12 }}>próxima escolha ID: {nextText} </label>
            </div>
            <textarea className='option-input'
                id='text'
                onChange={onChange}
                defaultValue={data.text}
                rows={3}
            />
            <Handle type='source' position={Position.Right} style={{ right: 4, top: 36 }} />
        </div>)
}

export default memo(OptionNode);