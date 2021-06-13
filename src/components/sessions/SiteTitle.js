import React from 'react';
import styles from './SiteTitle.module.css';

function SiteTitle() {
  return (
    <div className={styles["Site-title"]}>
      <h1>Iceberg</h1>
      <h2>Connect with coworkers beyond the surface level</h2>
    </div>
  )
}

export default SiteTitle;