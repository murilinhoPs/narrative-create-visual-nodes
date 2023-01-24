import { create } from 'zustand'
import {
  Connection,
  Edge,
  EdgeChange,
  Node,
  NodeChange,
  addEdge,
  OnNodesChange,
  OnEdgesChange,
  OnConnect,
  applyNodeChanges,
  applyEdgeChanges,
} from 'reactflow'
import initialNodes from '../services/InitialNodes'

export type RFState = {
  nodes: Node[]
  edges: Edge[]
  onNodesChange: OnNodesChange
  onEdgesChange: OnEdgesChange
  onConnect: OnConnect
  updateOptionNodeHeightOffset: (
    height: number,
    parentNode: string,
    type: string,
  ) => number
}

const useReactFlowStore = create<RFState>((set, get) => ({
  nodes: initialNodes,
  edges: [],
  onNodesChange: (changes: NodeChange[]) => {
    set({
      nodes: applyNodeChanges(changes, get().nodes),
    })
  },
  onEdgesChange: (changes: EdgeChange[]) => {
    set({
      edges: applyEdgeChanges(changes, get().edges),
    })
  },
  onConnect: (connection: Connection) => {
    set({
      edges: addEdge(connection, get().edges),
      nodes: get().nodes.map((node) => {
        if (node.id === connection.source) {
          node.data.nextText = parseInt(connection.target ?? '0')
        }
        return node
      }),
    })
  },
  updateOptionNodeHeightOffset: (
    height: number,
    parentNode: string,
    type: string,
  ) => {
    set({
      nodes: get().nodes.map((node) => {
        if (node.parentNode === parentNode && node.type === type) {
          const newNode = {
            ...node,
            position: {
              x: node.position.x,
              y: node.position.y + height,
            },
          }
          return newNode
        }
        return node
      }),
    })
    return height
  },
}))

export default useReactFlowStore
