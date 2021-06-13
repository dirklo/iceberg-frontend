import React from 'react';
import styles from './ProfileListItem.module.css';

function ProfileListItem({text, id}) {
  return (
    <div className={styles.ProfileListItem}>
      {text}
    </div>
  )
}

export default ProfileListItem;