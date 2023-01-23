import React, { useCallback, memo } from 'react';
import { OptionNodeData } from '../../services/NodeTypes';
import { Handle, NodeProps, Position } from 'reactflow';
import './styles.css'


const OptionNode: React.FC<NodeProps<OptionNodeData>> = ({ data, xPos, yPos, id }) => {
    const onChange = useCallback((evt: any) => {
        console.log(evt.target.value);
    }, [])

    return <div className='option-node'>
        <label>nome: </label>
        <textarea className='option-input'
            id='text'
            onChange={onChange}
            defaultValue={data.text}
        />
        <Handle type='source' position={Position.Right} style={{ right: 4, top: 28 }} />
    </div>
}

export default memo(OptionNode);