import { OptionNodeData, TextNodeData } from './NodeTypes'
import { Node } from 'reactflow'

export const optionNodes: Node<OptionNodeData>[] = [
  {
    id: '4-1',
    type: 'optionNode',
    draggable: false,
    data: {
      index: 0,
      text: 'Option 1',
      nextText: 5,
      setState: { mapa: true },
    },
    position: { x: 0, y: 55 },
    parentNode: '4',
    extent: 'parent',
  },
  {
    id: '4-2',
    type: 'optionNode',
    draggable: false,
    data: {
      index: 1,
      text: 'Option 2',
      nextText: 5,
      setState: { mapa: true },
    },
    position: { x: 0, y: 100 },
    parentNode: '4',
    extent: 'parent',
  },
]

const myTextNode: Node<TextNodeData> = {
  id: '4',
  type: 'textNode',
  extent: 'parent',
  data: {
    label: 'Node 3',
    title: 'A narrativa da opção...',
    save: false,
    value: 1,
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
  ...optionNodes,
]

export default initialNodes
