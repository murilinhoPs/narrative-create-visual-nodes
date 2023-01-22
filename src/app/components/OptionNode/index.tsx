import React, { useCallback } from 'react';
import { OptionNodeData } from '../../services/NodeTypes';
import { Handle, NodeProps, Position } from 'reactflow';

interface OptionNodeProps {
    onChange: any;
    value: string;
}

const OptionNode = () => {
    const onChange = useCallback((evt: any) => {
        console.log(evt.target.value);
    }, [])

    return <div className='text-node'>
        <span>nome: </span>
        <input className='option-input'
            id='text'
            type='text'
            onChange={onChange}
            defaultValue='props.value'
        />
        <Handle type='source' position={Position.Right} />
        <Handle type='source' position={Position.Left} />
    </div>
}

export default OptionNode;