import { TextNodeData } from './NodeTypes'
import { Node } from 'reactflow'

const myTextNode: Node<TextNodeData> = {
  id: '4',
  type: 'textNode',
  data: {
    label: 'Node 3',
    title: 'A narrativa da opção...',
    save: false,
    value: 1,
    options: ['option1', 'option2', 'option3'],
  },
  position: { x: 150, y: 25 },
}

const initialNodes: Node[] = [
  {
    id: '1',
    type: 'input',
    data: { label: 'Node 1' },
    position: { x: 5, y: 5 },
  },
  {
    id: '2',
    data: { label: 'Node 2' },
    position: { x: 250, y: 250 },
  },
  {
    id: '3',
    type: 'output',
    data: { label: 'Node 3' },
    position: { x: 100, y: 25 },
  },
  myTextNode,
]

export default initialNodes
