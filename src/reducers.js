import { ActionTypes } from './action-types'

const initialState = {
    searchText: ""
}

export const searchRepo = (state = initialState, action = {}) => {
    switch (action.type) {
        case ActionTypes.SEARCH_REPO:
            return Object.assign({}, state, { searchText: action.payload })
        default:
            return state;
    }
}

const initialStateLangFilter = {
    filterLang: "",
}

export const filterRepoByLang = (state = initialStateLangFilter, action = {}) => {
    switch (action.type) {
        case ActionTypes.FILTER_LANG:
            return Object.assign({}, state, { filterLang: action.payload })
        default:
            return state;
    }
}

const initialStateTypeFilter = {
    filterType: "",
}

export const filterRepoByType = (state = initialStateTypeFilter, action = {}) => {
    switch (action.type) {
        case ActionTypes.FILTER_TYPE:
            return Object.assign({}, state, { filterType: action.payload })
        default:
            return state;
    }
}