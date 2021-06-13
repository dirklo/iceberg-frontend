import React from 'react'
import styles from './ConnectUser.module.css';

export default function ConnectUser({user}) {  // Stacey will handle styling

    function setImgNum(min, max) {
      let x = Math.random() * (max-min + 1);
      return Math.floor(x) + min;
    }
    
    function setRandomPic() {
      return (
        require(`../../assets/profile-images/profile-${setImgNum(1, 10)}.png`)
      )
    }
    
    function fullName() {
      return `${user.first_name} ${user.last_name}`
    }

    return (
        <div className={styles.SearchResultCard}>
          <div className={styles.Image}>
            <img src={setRandomPic()} alt={fullName()}/>
          </div>
          <div className={styles.UserDetails}>
            <h3>{fullName()}</h3>
            <p>
              <span className="emphasis">Role: </span>
              {user.job_title}
              <span className={styles.Divider}>|</span>
              <span className="emphasis">Team: </span>
              {user.team.name} 
            </p>
            {/* <p>
              <span className="emphasis">Role: </span>
              {user.job_title}
            </p>
            <p>
              <span className="emphasis">Team: </span>
              {user.team.name}
            </p> */}
          </div>
        </div>
    )
}