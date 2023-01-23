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
    nodes?: Node[],
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
    })
  },
  updateOptionNodeHeightOffset: (
    height: number,
    parentNode: string,
    type: string,
    nodes?: Node[],
  ) => {
    set({
      nodes: get().nodes.map((node) => {
        if (node.parentNode === parentNode && node.type === type) {
          //   console.log(`thisOptionNodes: ${node.id}`)
          //   console.log(node.position.y)

          //   height += 1
          const newNode = {
            ...node,
            position: {
              x: node.position.x,
              y: node.position.y + height,
            },
          }
          console.log(newNode.id)
          console.log(newNode.position.y)

          return newNode
        }

        return node
      }),
    })
    return height
  },
}))

export default useReactFlowStore
