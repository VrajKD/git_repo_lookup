import React from 'react';
import './RepoCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCodeBranch, faStar } from '@fortawesome/free-solid-svg-icons'
// import { faStar } from '@fortawesome/free-regular-svg-icons'

class RepoCard extends React.Component {
    render() {
        const { name, language, fork, description } = this.props.repo;
        return (
            <div className="repo-card">
                <div className="repo-card-left">
                    <a href="$" className="repo-card-name">{name}</a>
                    {this.props.repo.private ?
                        <span className="repo-card-private">Private</span> : ""
                    }
                    {fork ?
                        <p className="repo-card-fork">Forked</p> : ""}
                    <p className="repo-card-desc">{description}</p>
                    <div className="repo-card-footer">
                        {language ?
                            <span className="repo-language"><span className="repo-language-circle"></span>{language}</span> : ""}
                        {fork ?
                            <span className="repo-members"><FontAwesomeIcon className="repo-members-icon" icon={faCodeBranch} />651</span> : ""}
                        <span>Updated 8 days ago.</span>
                    </div>
                </div>
                <div className="repo-card-right">
                    <button className="repo-star"><FontAwesomeIcon className="repo-star-icon" icon={faStar} />Star</button>
                </div>


            </div>
        )
    }
}

export default RepoCard;