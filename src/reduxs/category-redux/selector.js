import {createSelector} from 'reselect';
import {intinialState} from './reducer'

const getCategoryState =(state)=> state.category || intinialState

const selectCategories = ()=> createSelector(
    getCategoryState,
    ({categories})=>categories
)

const selectPagination = ()=>createSelector(
    getCategoryState,
    ({pagination})=> pagination
)

export {
    selectCategories,
    selectPagination
}