import React from 'react';
import ProfileListItem from './ProfileListItem';
import styles from './ProfileList.module.css';

// This component will iterate over a user's hobbies, foods, etc. and return each as a profile list item
function ProfileList({name, listArr}) {
  return (
    <div>
      <h2>{name}</h2>
      <div className={styles.ProfileList}>
        {listArr.map(item => {
          return <ProfileListItem text={item.name} key={item.id} />
        })}
      </div>
    </div>
  )
}

ProfileList.defaultProps = {
  name: "I can answer questions about...",
  listArr: [{id: 1, name: "React"}, {id: 2, name: "Rails"}, {id: 3, name: "Printer issues"}]
}

export default ProfileList;