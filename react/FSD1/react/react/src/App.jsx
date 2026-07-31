import React from 'react'
import Student from './components/Student'

const App = () => {
  return (
    <div style={{ display: 'flex', margin: '20px', gap: '20px' }}>
      <Student />
      <Student />
      <Student />
    </div>
  )
}

export default App
