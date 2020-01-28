import React from 'react';
import './RepoFilter.css';
import Select from 'react-select';
import { connect } from 'react-redux';
import { setSearch, setFilterLang, setFilterType } from '../../../actions';

class RepoFilter extends React.Component {
    state = {
        selectedLang: '',
        selectedType: ''
    };
    langChange = selectedLang => {
        this.setState(
            { selectedLang },
            () => this.props.onLangFilterChange(selectedLang.value)
        );
    };
    typeChange = selectedType => {
        this.setState(
            { selectedType },
            () => this.props.onTypeFilterChange(selectedType.value)
        );
    };
    render() {
        const { selectedType, selectedLang } = this.state;
        const { onSearchChange, langValues } = this.props;
        const typeOptions = [
            { value: "", label: "All" },
            { value: 'Sources', label: 'Sources' },
            { value: 'Archived', label: 'Archived' },
            { value: 'Forks', label: 'Forks' },
        ];
        const colourStyles = {
            control: styles => ({ ...styles, backgroundImage: 'linear-gradient(-180deg,#fafbfc,#eff3f6 90%)', color: "#24292e", padding: 0, borderRadius: 0, fontSize: "14px" }),
            option: styles => ({ ...styles, backgroundColor: '', borderBottom: '0.5px solid lightgray', color: "#24292e", padding: 8, fontSize: "12px" }),
            singleValue: styles => ({ ...styles, color: "#24292e" }),
            placeholder: styles => ({ ...styles, color: "#24292e" }),
        }
        return (
            <div className="repo-filter" >
                <input type="text" className="search-bar" placeholder="Enter your search text here." onChange={onSearchChange} />
                <div className="select-filter">
                    <Select
                        value={selectedLang}
                        styles={colourStyles}
                        options={langValues}
                        onChange={this.langChange}
                    />
                </div>
                <div className="select-filter">
                    <Select
                        value={selectedType}
                        styles={colourStyles}
                        options={typeOptions}
                        onChange={this.typeChange}
                    />
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) => dispatch(setSearch(event.target.value)),
        onLangFilterChange: (option) => dispatch(setFilterLang(option)),
        onTypeFilterChange: (option) => dispatch(setFilterType(option))
    }
}

export default connect(null, mapDispatchToProps)(RepoFilter);