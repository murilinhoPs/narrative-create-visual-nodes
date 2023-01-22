import React, { useCallback, memo, useState } from 'react';
import {
    NodeProps,
    Handle,
    Position,
} from 'reactflow';
import './index.css';

import { TextNodeData } from '../../services/NodeTypes';
import * as HandleStles from './HandleStyles'


const TextNode: React.FC<NodeProps<TextNodeData>> = ({ data, xPos, yPos, id }) => {
    const [dimensions, setDimensions] = useState({ width: 20, height: 20 });

    const onChange = useCallback((evt: any) => {
        console.log(evt.target.value);
    }, [])

    return <div className='text-node'>
        <Handle style={HandleStles.target} type='target' position={Position.Top} />
        <div>
            <label>Id: {id}</label>
            <label htmlFor='text'>Name: {data.label}</label>
            <label className="toggle-switch">
                <input className='toggle-switch-checkbox' type="checkbox" onChange={() => { }} />
                <span>save: </span>
            </label>
        </div>
        {data.options.map((option, index) =>
            <div className='options-inputs'>
                <input className='option-input'
                    id='text'
                    type='text'
                    onChange={onChange}
                    defaultValue={option.toString()}
                />
            </div>
        )}
        {data.options.map((_, index) =>
            <Handle
                style={{ ...HandleStles.source, ...{ top: 70 + index * 26 + 1, right: 6 } }}
                id={index.toString()}
                type='source'
                position={Position.Right}
            />
        )}
    </div>
}

export default memo(TextNode);