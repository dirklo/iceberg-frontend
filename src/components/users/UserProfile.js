import React from 'react';
import { useEffect } from 'react'
import { connect } from 'react-redux'
import {getUser} from '../../actions/user'
import styles from './UserProfile.module.css';
import SplitPane from '../splitpane/SplitPane';
import ProfileImage from './ProfileImage';
import Button from '../button/button';
import ProfileList from './ProfileList';
import { FaEnvelope } from 'react-icons/fa';
import { FaPhoneAlt } from 'react-icons/fa';
import Hobbies from '../hobbies/Hobbies';
import Foods from '../foods/Foods';

function UserProfile(props){
  // const dispatch = useDispatch();
  const { customPath } = props.match.params
  const {currentUser} = props;
  const {getUser} = props;
  const {userProfile} = props;
  if(userProfile.username !== customPath){
    useEffect(() => {
      getUser(customPath);
    })
  }
  
  return (
    <React.Fragment>
      {currentUser &&
        <SplitPane 
          left={
            <React.Fragment>
            {/* tried to reference currentUser.image, but the links from faker seem to be broken */}
            {/* just using standard image */}
            <ProfileImage /> 
                <div>
                  <h1>{currentUser.first_name} {currentUser.last_name}</h1>
                  <p><span className="italic">
                  Pho-net-ic pronunciation</span></p>
                  <p>{currentUser.pronoun}</p>
                  <p>@{currentUser.username}</p>
                </div>
                <div>
                  <p>
                    <span className="emphasis">
                      {currentUser.job_title}
                    </span>
                  </p>
                  <p>
                    <span className="emphasis">
                      {/* can we send team name? */}
                      Team: </span>
                     {currentUser.team.name}
                  </p> 
                </div>
                <div>
                  <FaEnvelope className={styles.Icon}/>
                  <FaPhoneAlt className={styles.Icon}/>
                </div>
            </React.Fragment>
          }
          right={
            <React.Fragment>
              <div className={styles.About}>
                <div className={styles.TitleBlock}>
                  <h1>Deep Dive</h1>
                  <Button 
                    // style="Primary" - commented out to eliminate error
                    text="Message"
                  />
                </div>
                <h2>About me</h2>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
                  eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. 
                  Ipsa quae ab illo inventore doloremque laudantium, totam rem aperiam iste natus error sit voluptatem accusantium.
                </p>
              </div>
              {/* Pass in a 'listArr' prop to the Hobbies and Foods lists */}
              {/* <ProfileList name={"Hobbies"} listArr={currentUser.hobbies}/> */}
              <Hobbies/>
              <Foods/>
              {/* <ProfileList name={"Favorite foods"} listArr={currentUser.foods}/> */}
              {/* <ProfileList name={"Favorite foods"}/>
              <ProfileList name={"Hobbies"}/> */}
              <ProfileList />
            </React.Fragment>
          }
        />
      }
    </React.Fragment>
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

export default connect(state => {
  return {
    userProfile: state.usersState.userProfile
  }
}, { getUser })(UserProfile)
