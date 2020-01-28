import { ActionTypes } from './action-types'
export const setSearch = text => ({
    type: ActionTypes.SEARCH_REPO,
    payload: text
})

export const setFilterLang = text => ({
    type: ActionTypes.FILTER_LANG,
    payload: text
})

export const setFilterType = text => ({
    type: ActionTypes.FILTER_TYPE,
    payload: text
})