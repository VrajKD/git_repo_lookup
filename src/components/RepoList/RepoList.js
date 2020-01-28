import React from 'react';
import './RepoList.css'
import RepoCard from '../RepoCard/RepoCard'
import RightNav from './RightNav/RightNav'
import RepoFilter from './RepoFilter/RepoFilter'
class RepoList extends React.Component {
    render() {
        const { onSearchChange, langValues, onLangFilterChange } = this.props;
        return (
            <div className="repo-list">
                <RightNav count={this.props.repos.length} />
                <RepoFilter onSearchChange={onSearchChange} langValues={langValues} onLangFilterChange={onLangFilterChange} />
                {this.props.repos.map(repo => (
                    <RepoCard repo={repo} key={repo.id} />
                ))}
            </div>
        )
    }
}

export default RepoList;