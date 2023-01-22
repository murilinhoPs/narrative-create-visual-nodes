import React, { memo } from 'react';
import {
    NodeProps,
    Handle,
    Position,
} from 'reactflow';
import './index.css';

import { TextNodeData } from '../../services/NodeTypes';
import * as HandleStles from './HandleStyles'


const TextNode: React.FC<NodeProps<TextNodeData>> = ({ data, xPos, yPos, id }) => {
    return <div className='text-node'>
        <Handle style={HandleStles.target} type='target' position={Position.Left} />
        <Handle style={HandleStles.target} type='target' position={Position.Right} />
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
    </div>
}

export default memo(TextNode);