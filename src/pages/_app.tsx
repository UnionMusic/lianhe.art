import React from 'react'
import 'tailwindcss/tailwind.css'
import '../styles/global.css'

interface Props {
  Component: string
}

const App: React.FC<Props> = ({ Component }) => {
  return <Component />
}

export default App
