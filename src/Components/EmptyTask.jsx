import styles from './EmptyTask.module.css'


export function EmptyTask() {
    return (
        <>

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