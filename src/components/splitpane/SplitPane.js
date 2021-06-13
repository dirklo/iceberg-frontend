import React from 'react';
import styles from './SplitPane.module.css';

function SplitPane({left, right}) {
  return (
    <div className={styles.SplitPane}>
      <div className={styles.Left}>
        {left} 
      </div>
      <div className={styles.Right}>
        {right}
      </div>
    </div>
  )
}

export default SplitPane;