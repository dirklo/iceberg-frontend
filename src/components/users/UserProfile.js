import React from 'react';
import styles from './UserProfile.module.css';
import SplitPane from '../splitpane/SplitPane';
import ProfileImage from './ProfileImage';
import Button from '../button/button';
import ProfileList from './ProfileList';
import { FaEnvelope } from 'react-icons/fa';
import { FaPhoneAlt } from 'react-icons/fa';

function UserProfile({user}){
  return (
    <>
    <div className={styles.nav}></div>
    <SplitPane 
      left={
        <>
          <ProfileImage />
            <div>
              <h1>First last name</h1>
              <p><span className="italic">
               Pho-net-ic pronunciation</span></p>
              <p>She/her</p>
              <p>@usernamelink</p>
            </div>
            <div>
              <p><span className="emphasis">
               Job Title Here</span></p>
               <p><span className="emphasis">
               Team: </span>Team name here</p>
            </div>
            <div>
              <FaEnvelope className={styles.Icon}/>
              <FaPhoneAlt className={styles.Icon}/>
            </div>
        </>
      }
      right={
        <>
          <div className={styles.About}>
            <div className={styles.TitleBlock}>
              <h1>Deep Dive</h1>
              <Button style="Primary" text="Message"/>
            </div>
            <h2>About me</h2>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
              eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. 
              Ipsa quae ab illo inventore doloremque laudantium, totam rem aperiam iste natus error sit voluptatem accusantium.
            </p>
          </div>
          {/* Pass in a 'listArr' prop to the Hobbies and Foods lists */}
          <ProfileList name={"Hobbies"}/>
          <ProfileList name={"Favorite foods"}/>
          <ProfileList />
        </>
      }
    />
    </>
  )
}
export default UserProfile;