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
            // type='textArea'
            onChange={onChange}
            defaultValue={data.text}
            rows={2}
        />
        <Handle type='source' position={Position.Right} />
        {/* <Handle type='source' position={Position.Left} /> */}
    </div>
}

export default memo(OptionNode);