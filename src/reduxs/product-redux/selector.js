import {createSelector} from 'reselect';
import {initialState} from './reducer';

const getState = (state)=> state.product || initialState ;

const getproducts = ()=> createSelector(
    getState,
    ({products})=> products
)

const getCategories = ()=>createSelector(
    getState,
    ({categories})=> categories
)

export {
    getproducts,
    getCategories
}