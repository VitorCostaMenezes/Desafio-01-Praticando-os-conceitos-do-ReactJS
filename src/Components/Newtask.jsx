import styles from './NewTask.module.css'
import { CloudFog, PlusCircle } from '@phosphor-icons/react';
import { useState } from 'react';
import { Task } from './Task';
import { HeaderTask } from './HeaderTask';
import { EmptyTask } from './EmptyTask';

export function NewTask() {

    const [tasks, setTasks] = useState([]);

    const [newTaskText, setNewTasksText] = useState('');

    function handleCrateNewTask() {
        event.preventDefault()
    
        setTasks([...tasks, newTaskText]);
        setNewTasksText('');
        console.log(newTaskText)
      }

      function handleNewTasksChange() {
        event.target.setCustomValidity('');
        setNewTasksText(event.target.value);
      }
    
      function handleNewTasksInvalid() {
        event.target.setCustomValidity('Esse campo é obrigatório!');
      }
    
    

    return (
        <>
            <form onSubmit={handleCrateNewTask}>
                <div className={styles.divButton}>
                    
                    <input className={styles.input} type="text" 
                        value={newTaskText}
                        onChange={handleNewTasksChange}
                        onInvalid={handleNewTasksInvalid}
                        placeholder="Adicione uma nova tarefa" />
                    <button className={styles.button} type="submit">
                        <span>Criar </span> 
                        <span className={styles.pluscircle}>
                            <PlusCircle size={16}/> 
                        </span> 
                    </button>
                </div>
            </form>

            <HeaderTask />

            {tasks.length > 0 ? (
            <div>
              {tasks.map((task) => (
                <Task texto={task} />
              ))}
            </div>
          ) : (
            <EmptyTask />
          )}


        </>
        
      );    
}