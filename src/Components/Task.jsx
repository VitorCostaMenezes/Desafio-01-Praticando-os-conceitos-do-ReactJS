import styles from './Task.module.css'

export function Task() {
    return (
        <>
            <header className={styles.info}>

                <aside >
                    Tarefas criadas
                </aside>
                
                <aside>
                    Concluídas
                </aside>
            </header>

            <div className={styles.containerEmpty}>
                <img src="/src/assets/Clipboard.svg" alt="ícone de prancheta" />
                <p>
                    <strong>Você ainda não tem tarefas cadastradas</strong>
                    Crie tarefas e organize seus itens a fazer
                </p>
            </div>
        </>
      );  
    
}