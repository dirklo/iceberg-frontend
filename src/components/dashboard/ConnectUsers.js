import React from 'react'
import { useSelector } from 'react-redux'
import ConnectUser from './ConnectUser'
import styles from './ConnectUsers.module.css'


export default function ConnectUsers() {

    const connnectUsers = useSelector(state => state.appReducer.connectUsers)

    return (
        <ul className={styles.ConnectUserList}>
            {connnectUsers.map(u => <li key={u.id} > <ConnectUser user={u}/> </li>)}
        </ul>
    )
}