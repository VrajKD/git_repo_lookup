import React from 'react';
import './RightNav.css';

class RightNav extends React.Component {
    render() {
        return (
            <div className="right-nav-list">
                <span className="right-list-item">Overview</span>
                <span className="right-list-item active">Repositories<span className="repo-count">{this.props.count}</span></span>
                <span className="right-list-item">Projects</span>
                <span className="right-list-item">Packages</span>
                <span className="right-list-item">Stars</span>
                <span className="right-list-item">Followers</span>
                <span className="right-list-item">Following</span>
            </div>
        )
    }
}
export default RightNav;