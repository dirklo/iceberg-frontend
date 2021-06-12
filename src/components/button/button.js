import React from 'react';
import styles from './button.module.css';

function Button({onClick, style, text}) {

  const btnStyle = styles[`${style}`]

  return (
    <button 
      className={`${styles.Btn} ${btnStyle}`}
      onClick={onClick}
    >
      {text}
    </button>
  )
}

export default Button;