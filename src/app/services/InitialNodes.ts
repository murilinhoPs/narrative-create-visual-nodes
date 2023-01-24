import { OptionNodeData, NarrativeNodeData } from './NodeTypes'
import { Node } from 'reactflow'
import { nodeDefaultHeight } from '../utils/NodesVars'

export const optionNodes: Node<OptionNodeData>[] = [
  {
    id: '1-1',
    type: 'optionNode',
    draggable: false,
    data: {
      index: 0,
      text: 'Option 1',
      nextText: 0,
      setState: { mapa: true },
    },
    position: { x: 0, y: nodeDefaultHeight },
    parentNode: '1',
    extent: 'parent',
    zIndex: 1,
  },
]

const myNarrativeNode: Node<NarrativeNodeData> = {
  id: '1',
  type: 'narrativeNode',
  data: {
    label: 'Node 3',
    title: 'Nullam molestie vestibulum scelerisqu...',
    save: false,
    value: 1,
  },
  position: { x: 150, y: 25 },
  zIndex: -1,
}

const initialNodes: Node[] = [myNarrativeNode, ...optionNodes]

export default initialNodes
