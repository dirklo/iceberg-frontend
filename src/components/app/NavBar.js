import React from 'react'
import './NavBar.css' 
import { connect } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import { logoutUser } from '../../actions/auth'

function NavBar({ loggedIn, logoutUser }) {
    const history = useHistory()

    function handleLogout(e) {
        e.preventDefault()
        logoutUser()
        history.push('/login')
    }

    return (
        <nav>
            { loggedIn ? 
                <button onClick={(e) => handleLogout(e)}>Logout</button>
                :
                <div>
                    <button> 
                        <Link to="/login">Login</Link> 
                    </button>
                    <button> 
                        <Link to="/signup">Signup</Link> 
                    </button>
                </div>
            }
        </nav>
    )
}

export default connect((state => {
    return {
        currentUser: state.auth.currentUser,
        loggedIn: state.auth.loggedIn
    }
}), { logoutUser })(NavBar)

