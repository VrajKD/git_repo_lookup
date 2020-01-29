import React from 'react';
import './App.css'
import RepoList from './components/RepoList/RepoList'
import UserProfile from './components/UserProfile/UserProfile'
import { USER_DATA } from './user'
import { REPO_DATA } from './repos'
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    searchText: state.searchRepo.searchText,
    filterLang: state.filterRepoByLang.filterLang,
    filterType: state.filterRepoByType.filterType
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     onSearchChange: (event) => dispatch(setSearch(event.target.value)),
//     onLangFilterChange: (option) => dispatch(setFilterLang(option)),
//     onTypeFilterChange: (option) => dispatch(setFilterType(option))
//   }
// }

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      repos: []
    }
  }
  componentDidMount() {
    this.setState({ repos: REPO_DATA, user: USER_DATA })
    // fetch("https://api.github.com/users/supreetsingh247/repos").then(response => response.json())
    //   .then(repo => { this.setState({ repos: repo }) });
    // fetch("https://api.github.com/users/supreetsingh247").then(response => response.json())
    //   .then(data => { this.setState({ user: data }) });
  }
  render() {
    const { repos } = this.state;
    const { searchText, onSearchChange, onLangFilterChange, filterLang, filterType } = this.props;
    let filteredRepos = repos.filter(repo => repo.name.toLowerCase().includes(searchText.toLowerCase()));
    let langs = filteredRepos.map(repo => repo.language);
    const uniqueLang = [...new Set(langs)];
    langs = uniqueLang.filter(lang => lang != null)
    console.log(uniqueLang);
    const langValues = langs.map(lang => ({ value: lang, label: lang }))
    langValues.unshift({ value: "", label: "All" })
    if (filterLang !== "") {
      filteredRepos = filteredRepos.filter(repo => repo.language === filterLang);
    }
    if (filterType === "Sources") {
      filteredRepos = filteredRepos.filter(repo => repo.fork === false);
    }
    if (filterType === "Archived") {
      filteredRepos = filteredRepos.filter(repo => repo.archived === true);
    }
    if (filterType === "Forks") {
      filteredRepos = filteredRepos.filter(repo => repo.fork === true);
    }

    return (
      <div className="App">
        <div className="temp-top-nav">
          <hr />
        </div>
        <div className="repo-page">
          <UserProfile data={this.state.user} />
          <RepoList repos={filteredRepos} onSearchChange={onSearchChange} langValues={langValues} onLangFilterChange={onLangFilterChange} />
        </div>
      </div >
    );
  }
}


export default connect(mapStateToProps)(App);
