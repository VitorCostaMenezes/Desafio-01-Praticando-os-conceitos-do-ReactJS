import styles from './NewTask.module.css'
import { PlusCircle } from '@phosphor-icons/react';

export function NewTask() {
    return (
        <div className={styles.divButton}>
            <input className={styles.input} type="text"  placeholder="Adicione uma nova tarefa"/>
            <button className={styles.button} type="button">
                <span>Criar </span> 
                <span className={styles.pluscircle}>
                    <PlusCircle size={16}/> 
                </span> 
            </button>
        </div>
        
      );    
}