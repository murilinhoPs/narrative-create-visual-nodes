import { Node } from 'reactflow'
import OptionNode from '../components/OptionNode'
import NarrativeNode from '../components/NarrativeNode'

export type NarrativeNodeData = {
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
  narrativeNode: NarrativeNode,
  optionNode: OptionNode,
}

export default nodeTypes
