import React from 'react';
import './RepoList.css'
import RepoCard from '../RepoCard/RepoCard'
import RightNav from './RightNav/RightNav'
import { connect } from 'react-redux';
import RepoFilter from './RepoFilter/RepoFilter'
class RepoList extends React.Component {
    render() {
        const { onSearchChange, langValues, onLangFilterChange, repos, searchText, filterLang, filterType } = this.props;
        return (
            <div className="repo-list">
                <RightNav count={repos.length} />
                <RepoFilter onSearchChange={onSearchChange} langValues={langValues} onLangFilterChange={onLangFilterChange} />
                {(searchText !== "" || filterLang !== "" || filterType !== "") && (repos.length !== 0) &&
                    <div className="result-count"><strong>{repos.length}</strong> results found.</div>
                }
                {repos.length === 0 && <div className="result-count">No matches found.</div>}
                {repos.map(repo => (
                    <RepoCard repo={repo} key={repo.id} />
                ))}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        searchText: state.searchRepo.searchText,
        filterLang: state.filterRepoByLang.filterLang,
        filterType: state.filterRepoByType.filterType
    }
}

export default connect(mapStateToProps)(RepoList);