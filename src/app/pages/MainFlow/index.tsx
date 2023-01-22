import React, { useState, useCallback } from 'react'
import ReactFlow, {
    addEdge,
    applyNodeChanges,
    applyEdgeChanges,
    Node,
    Edge,
    NodeChange,
    EdgeChange,
    Connection,
    Controls,
    Background,
    MiniMap,
    useReactFlow,

} from 'reactflow';
import 'reactflow/dist/style.css';

import initialNodes from '../../services/InitialNodes';
import initialEdges from '../../services/InitialEdges';
import nodeTypes, { OptionNodeData, TextNodeData } from '../../services/NodeTypes';
import './index.css'

let nodeId = 1;

const MainFlow = () => {
    const [nodes, setNodes] = useState<Node[]>(initialNodes);
    const [edges, setEdges] = useState<Edge[]>(initialEdges);

    const onNodesChange = useCallback(
        (changes: NodeChange[]) => setNodes((nds) => applyNodeChanges(changes, nds)),
        [setNodes]
    );
    const onEdgesChange = useCallback(
        (changes: EdgeChange[]) => setEdges((eds) => applyEdgeChanges(changes, eds)),
        [setEdges]
    );
    const onConnect = useCallback(
        (connection: Connection) => setEdges((eds) => addEdge(connection, eds)),
        [setEdges]
    );

    const reactFlowInstance = useReactFlow();

    const onClickAdd = useCallback(
        () => {
            const id = `${++nodeId}`
            const newTextNode: Node<TextNodeData> = {
                id: id,
                type: 'textNode',
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
                position: { x: 0, y: 55 },
                parentNode: id,
                extent: 'parent',
            }
            reactFlowInstance.addNodes([newTextNode, defaultOptionNode])
        }, [])



    return (

        <div style={{ height: '100vh' }}>
            <ReactFlow
                nodeTypes={nodeTypes}
                defaultNodes={nodes}
                defaultEdges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                onConnect={onConnect}
                fitView>
                <MiniMap nodeColor='#ff0071' nodeStrokeWidth={3} zoomable pannable />
                <Controls />
                <Background />
            </ReactFlow>
            <button onClick={onClickAdd} className='btn-add'>add node</button>
        </div>
    )
}

export default MainFlow
