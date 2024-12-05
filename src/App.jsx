import { useState } from 'react'
import { Header } from './Components/header'

import './global.css';
import { NewTask } from './Components/Newtask';
import { Task } from './Components/Task';

function App() {

  return (
    <>
      <Header/>
      <NewTask/>
      <Task/>
    

    </>
  )
}

export default App
