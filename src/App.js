import React from 'react'
import Provider from './context/Provider'
import Main from './components/layouts/Main'

const App = () => {
  return (
    <div>
      <Provider>
        <Main />
      </Provider>
    </div>
  )
}

export default App
