import {createAction, handleActions, combineActions} from 'redux-actions';

export const fetchUserRequest = createAction('FETCH_USER_REQUEST');
export const fetchUserSuccess = createAction('FETCH_USER_SUCCESS');

export const createUserRequest = createAction('CREATE_USER_REQUEST');
export const createUserSuccess = createAction('CREATE_USER_SUCCESS');

export const editUserRequest = createAction('EDIT_USER_QUEST');
export const editUserSuccess = createAction('EDIT_USER_SUCCESS');

export const deleteUserRequest = createAction('DELETE_USER_REQUEST');
export const deleteUserSuccess = createAction('DELETE_USER_SUCCESS');

export const failure = createAction('FAILURE');

export const intitalState = {
    loading: false,
    users: [],
    user: null,
    pagination: {
        size: 1,
        page: 50,
        total: 0
    },
}

const reducers = handleActions({
    [combineActions(fetchUserRequest, createUserRequest, editUserRequest, deleteUserRequest)]:(state)=>({
        ...state,
        loading: true
    }),
    [combineActions(createUserSuccess, editUserSuccess, deleteUserSuccess)]: (state)=>({
        ...state,
        loading: false
    }),
    [fetchUserSuccess]: (state, {payload: {users, pagination}})=>{
        return{
            ...state,
            users: users,
            pagination: pagination
        }
    }
},intitalState)

export default reducers