import TextNode from '../components/TextNode'

export type TextNodeData = {
  value: number
  label: String
  save: Boolean
  title: String
  options: String[]
}

const nodeTypes = {
  textNode: TextNode,
}

export default nodeTypes
