import React, { useCallback } from 'react'
import { shallow } from 'zustand/shallow'
import ReactFlow, {
    Node,
    Controls,
    Background,
    MiniMap,
    useReactFlow,
    BackgroundVariant,
} from 'reactflow';
import 'reactflow/dist/style.css';

import nodeTypes, { OptionNodeData, NarrativeNodeData } from '../../services/NodeTypes';
import './index.css'
import useReactFlowStore, { RFState } from '../../stores/ReactFlowStore';

export let nodeId = 1;

const selector = (state: RFState) => ({
    nodes: state.nodes,
    edges: state.edges,
    onNodesChange: state.onNodesChange,
    onEdgesChange: state.onEdgesChange,
    onConnect: state.onConnect,
})

const MainFlow = () => {
    const { nodes, edges, onNodesChange, onEdgesChange, onConnect } = useReactFlowStore(selector, shallow);
    const reactFlowInstance = useReactFlow();
    const onClickAdd = useCallback(
        () => {
            const id = `${++nodeId}`
            const newNarrativeNode: Node<NarrativeNodeData> = {
                id: id,
                type: 'narrativeNode',
                data: {
                    label: 'Node A',
                    title: 'A narrativa da opção...',
                    save: false,
                    value: 1,
                },
                position: {
                    x: Math.random() * 500,
                    y: Math.random() * 500
                },
            }
            const defaultOptionNode: Node<OptionNodeData> = {
                id: `${id} - 1`,
                type: 'optionNode',
                draggable: false,
                data: {
                    index: 0,
                    text: 'Option 1',
                    nextText: 1,
                    setState: { mapa: true },
                },
                position: { x: 0, y: 124 },
                parentNode: id,
                extent: 'parent',
                zIndex: -1
            }
            reactFlowInstance.addNodes([newNarrativeNode, defaultOptionNode])
        }, [])

    return (
        <div style={{ height: '100vh' }}>
            <ReactFlow
                nodeTypes={nodeTypes}
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                onConnect={onConnect}
                fitView
                style={{ backgroundColor: '#a5a2bf' }}
                connectionLineStyle={{ stroke: 'black' }}>
                <MiniMap nodeColor='#ff0073b5' nodeStrokeWidth={3} zoomable pannable />
                <Controls />
                <Background variant={BackgroundVariant.Cross} color='#8e8e8e' gap={30} />
            </ReactFlow>
            <button onClick={onClickAdd} className='btn-add'>add node</button>
        </div>
    )
}

export default MainFlow
