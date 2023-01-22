import { OptionNodeData, TextNodeData } from './NodeTypes'
import { Node } from 'reactflow'

export const optionNodes: Node<OptionNodeData>[] = [
  {
    id: '1-1',
    type: 'optionNode',
    draggable: false,
    data: {
      index: 0,
      text: 'Option 1',
      nextText: 5,
      setState: { mapa: true },
    },
    position: { x: 0, y: 100 },
    parentNode: '1',
    extent: 'parent',
  },
  {
    id: '1-2',
    type: 'optionNode',
    draggable: false,
    data: {
      index: 1,
      text: 'Option 2',
      nextText: 5,
      setState: { mapa: true },
    },
    position: { x: 0, y: 146 },
    parentNode: '1',
    extent: 'parent',
  },
]

const myTextNode: Node<TextNodeData> = {
  id: '1',
  type: 'textNode',
  data: {
    label: 'Node 3',
    title: 'Nullam molestie vestibulum scelerisqu...',
    save: false,
    value: 1,
  },
  position: { x: 150, y: 25 },
}

const initialNodes: Node[] = [myTextNode, ...optionNodes]

export default initialNodes
