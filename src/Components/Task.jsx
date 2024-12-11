import { Trash, Check } from '@phosphor-icons/react'

import styles from './Task.module.css'


export function Task() {


  return (
    <>
    <div className={styles.container}>
      <div>
        <label htmlFor="checkbox" >
          <input  readOnly type="checkbox"  />
          {/* <input readOnly type="text"  /> */}
          <span  className={`${styles.checkbox} ${styles.checkbox_unchecked}`} >
            {/* <span className={styles.check}><Check size={12} /></span>  */}
          </span>

          <p className={styles.paragraph}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius reprehenderit doloribus.
          </p>
        </label>
      </div> 

      <button >
        <Trash size={16} color="#808080" />
      </button>
    </div>
    <br/>
    <div className={styles.container}>
      <div>
        <label htmlFor="checkbox" >
          <input  readOnly type="checkbox"  />
          {/* <input readOnly type="text"  /> */}
          <span  className={`${styles.checkbox} ${styles.checkbox_checked}`} >
            <span className={styles.check}><Check size={12} /></span> 
          </span>

          <p className={styles.paragraph_checked}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius reprehenderit doloribus.
          </p>
        </label>
      </div> 

      <button >
        <Trash size={16} color="#808080" />
      </button>
    </div>

    </>
  )
}
