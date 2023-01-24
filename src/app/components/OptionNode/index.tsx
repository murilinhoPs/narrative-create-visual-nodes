import React, { useCallback, memo } from 'react';
import { OptionNodeData } from '../../services/NodeTypes';
import { Handle, NodeProps, Position } from 'reactflow';
import './styles.css'


const OptionNode: React.FC<NodeProps<OptionNodeData>> = ({ data, id }) => {
    const onChange = useCallback((evt: any) => {
        console.log(evt.target.value);
    }, [])

    return (
        <div className='option-node'>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                <label>escolha: </label>
                <label style={{ marginLeft: 12 }}>próxima escolha ID: {data.nextText} </label>
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