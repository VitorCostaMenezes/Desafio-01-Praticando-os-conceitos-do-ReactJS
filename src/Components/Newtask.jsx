import styles from './NewTask.module.css'
import { CloudFog, PlusCircle } from '@phosphor-icons/react';
import { useState } from 'react';

export function NewTask() {

    const [tasks, setTasks] = useState([
        'Post muito bacana, hein?!'
      ]);

    console.log(tasks)

    const [newTaskText, setNewTaskText] = useState('');


    function handleCrateNewTask() {
        event.preventDefault()
    
        setTasks([...tasks, newTaskText]);
        setNewTaskText('');
        console.log(newTaskText)
      }

    


    return (
        <>
            <form onSubmit={handleCrateNewTask}>
                <div className={styles.divButton}>
                    
                    <input className={styles.input} type="text"  placeholder="Adicione uma nova tarefa" />
                    <button className={styles.button} type="submit">
                        <span>Criar </span> 
                        <span className={styles.pluscircle}>
                            <PlusCircle size={16}/> 
                        </span> 
                    </button>
                </div>
            </form>
        </>
        
      );    
}