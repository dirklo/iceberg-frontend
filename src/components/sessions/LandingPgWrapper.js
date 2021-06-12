import React from 'react';
import Ice from '../../assets/ice.svg';
import SiteTitle from './SiteTitle';
import styles from './LandingPgWrapper.module.css';

function LandingPgWrapper({children}) {
  return (
    <div className={styles.Background}>
      <img className={styles.Iceberg} src={Ice} alt="Submerged point of iceberg" ></img>
      <div className={styles.Flex}>
        <div className={styles.Content}>
          <SiteTitle />
          {children}
        </div>
      </div>
    </div>
  )
}

export default LandingPgWrapper;