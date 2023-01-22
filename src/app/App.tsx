import React from 'react'
import MainFlow from './pages/MainFlow'
import { ReactFlowProvider } from 'reactflow'

const App: React.FC = () => {
  return <ReactFlowProvider>
    <MainFlow />
  </ReactFlowProvider>
}

export default App
