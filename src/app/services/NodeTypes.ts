import OptionNode from '../components/OptionNode'
import TextNode from '../components/TextNode'

export type TextNodeData = {
  value: number
  label: string
  save: Boolean
  title: string
  options: string[]
}

export type OptionNodeData = {
  index: number
  text: string
  nextText: number
  setState: Object
  requiredState: Object
  remove: string
}

const nodeTypes = {
  textNode: TextNode,
  optionNode: OptionNode,
}

export default nodeTypes
