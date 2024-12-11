import styles from './HeaderTask.module.css'

export function HeaderTask() {
    return (
        <>
            <header className={styles.info}>
                <aside className={styles.criadas}>
                    <p>Tarefas criadas</p>
                    <span>0</span>
                </aside>
                
                <aside className={styles.concluidas}>
                   <p>Concluídas</p>
                   <span>0</span> 
                </aside>
            </header>

        </>
      );  
    
}