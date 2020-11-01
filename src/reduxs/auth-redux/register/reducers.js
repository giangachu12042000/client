import {combineActions, createAction, handleActions} from 'redux-actions';

export const userRegisterRequest = createAction('USER_REGISTER_REQUEST');
export const userRegisterSuccess = createAction('USER_REGISTER_SUCCESS');

export const failure = createAction('FAILURE');

export const initialState = {
    loading: false,
    user: null
}

const reducer = handleActions({
    [userRegisterSuccess]:(state,{payload:{user}})=>({
        ...state,
        user: user
    })
},initialState)

export default reducer