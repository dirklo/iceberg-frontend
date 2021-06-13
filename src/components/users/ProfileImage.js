import React from 'react';
import Sample from '../../assets/sample-profile.png'; 
import styles from './ProfileImage.module.css';

function ProfileImage({image, name}) {
  return (
    <div className={styles.ProfileImage}>
      <img src={image} alt={`${name}`}></img>
    </div>
  )
}

ProfileImage.defaultProps = {
  image: Sample,
  name: "Lorainne Lakiense"
}

export default ProfileImage;