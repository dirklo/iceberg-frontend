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
          return <ProfileListItem text={item.text} key={item.id} />
        })}
      </div>
    </div>
  )
}

ProfileList.defaultProps = {
  name: "I can answer questions about...",
  listArr: [{id: 1, text: "React"}, {id: 2, text: "Rails"}, {id: 3, text: "Printer issues"}]
}

export default ProfileList;