import {createSelector} from 'reselect';
import {intitalState} from './reducers';

const getState = (state)=> state.user || intitalState ;

const getUsers = () =>createSelector(
    getState,
    ({users})=> users
)

export{
    getUsers
}