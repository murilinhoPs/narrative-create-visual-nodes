import OptionNode from '../components/OptionNode'
import TextNode from '../components/TextNode'
import { Node } from 'reactflow'

export type TextNodeData = {
  value: number
  label: string
  save: Boolean
  title: string
}

export type OptionNodeData = {
  index: number
  text: string
  nextText: number
  setState?: Object
  requiredState?: Object
  remove?: Object
}

export type OptionNodesGroupData = {
  parent: Node
  options: Node<OptionNodeData>[]
}

const nodeTypes = {
  textNode: TextNode,
  optionNode: OptionNode,
}

export default nodeTypes
