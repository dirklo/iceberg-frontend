import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import ConnectForm from './ConnectForm'
import ConnectUsers from './ConnectUsers'
import styles from './ConnectContainer.module.css';
import Recommended from '../../assets/recommended.png';
import spStyles from '../splitpane/SplitPane.module.css';

const ConnectContainer = () => {

  const dispatch = useDispatch()

  useEffect(() => 
    fetch("http://localhost:3001/users").then(resp => resp.json()).then(users => dispatch({type: "FETCH_USERS", payload: users}))
  )  
  return (
      <div className={styles.ConnectContainer}>
        <div className={styles.Recommended}>
          <h1>Recommended Connections</h1>
          <img className={styles.SampleList} src={Recommended} />
        </div>
        <div className={styles.ConnectSearch}>
          <h1>Connect</h1>
          <ConnectForm />
          <ConnectUsers />
        </div>
      </div>
  )
}

export default ConnectContainer
