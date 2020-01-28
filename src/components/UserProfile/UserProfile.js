import React from 'react';
import './UserProfile.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserFriends, faMapMarkerAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons'

class UserProfile extends React.Component {
    render() {
        const { avatar_url, bio, company, location, name,login } = this.props.data;
        return (
            <div className="user-profile">
                <div className="user-image">
                    <img src="https://avatars1.githubusercontent.com/u/7427552?v=4" alt="User's avatar" />
                </div>
                <div className="user-profile-text">
                    <p className="user-name">{name}</p>
                    <p className="user-handle">{login}</p>
                    <button className="user-follow">Follow</button>
                    <p className="user-desc">{bio}</p>
                    <p className="user-work-info"><FontAwesomeIcon className="work-info-icon" icon={faUserFriends} />{company}</p>
                    <p className="user-work-info"><FontAwesomeIcon className="work-info-icon" icon={faMapMarkerAlt} />{location}</p>
                    <p className="user-work-info"><FontAwesomeIcon className="work-info-icon" icon={faEnvelope} />supreetsingh.247@gmail.com</p>
                </div>
            </div>
        )
    }
}

export default UserProfile;