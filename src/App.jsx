import { useState } from 'react'
import { Header } from './Components/header'

import './global.css';
import { NewTask } from './Components/Newtask';
import { EmptyTask } from './Components/EmptyTask';
import { Task } from './Components/Task';
import { HeaderTask } from './Components/HeaderTask';

function App() {

  return (
    <>
      <Header/>
      <NewTask/>
      {/* <HeaderTask/> */}
      {/* <EmptyTask/> */}
      {/* <Task/> */}
    
    </>
  )
}

export default App
