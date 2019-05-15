import React from 'react'
import Header from "./Header"
import Content from "./Content"
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlus, faSync, faMinus } from '@fortawesome/free-solid-svg-icons'

library.add(faPlus, faSync, faMinus)

function App() {
  return (
    <div className="App">
      <Header title="Counter React"></Header>
      <Content></Content>
    </div>
  );
}

export default App;
