import React from 'react';
import styles from './UserProfile.module.css';
import SplitPane from '../splitpane/SplitPane';
import ProfileImage from './ProfileImage';
import Button from '../button/button';
import ProfileList from './ProfileList';
import { FaEnvelope } from 'react-icons/fa';
import { FaPhoneAlt } from 'react-icons/fa';
// import { connect } from 'react-redux';

function UserProfile({ currentUser }){
  return (
    <>
    <SplitPane 
      left={
        <>
          <ProfileImage />
            <div>
              <h1>{`${currentUser["first_name"]} ${currentUser["last_name"]}`}</h1>
              <p><span className="italic">
               Pho-net-ic pronunciation</span></p>
              <p>{currentUser.pronoun}</p>
              <p>@{currentUser.username}</p>
            </div>
            <div>
              <p><span className="emphasis">
               {currentUser["job_title"]}</span></p>
               <p><span className="emphasis">
                 {/* can we send team name? */}
               Team: </span>{currentUser.team}</p> 
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

UserProfile.defaultProps = {
  currentUser: {
    id: 1,
    first_name: 'Lori',
    last_name: 'Lakiense',
    username: 'lorilae',
    job_title: 'Director of Eastern Sales',
    //profile image component handles default, so let that kick in
    pronoun: 'She/her',
    //currently coming through as team_id - can we send the team name for display?
    team: "Sales Division",
    email: "loriannel@workplace.com"
  }
}

// export default connect(state => {
//   return {
//     currentUser: state.auth.currentUser
//   }
// })(UserProfile);

export default UserProfile;