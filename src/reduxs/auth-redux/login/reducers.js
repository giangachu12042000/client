import {combineActions, createAction, handleActions} from 'redux-actions';

export const userLoginRequest = createAction('USER_LOGIN_REQUEST');
export const userLoginSuccess = createAction('USER_LOGIN_SUCCESS');

export const failure = createAction('FAILURE');

export const initialState = {
    loading: false,
    user: null
}

const reducer = handleActions({
    [userLoginSuccess]:(state,{payload:{user}})=>({
        ...state,
        user: user
    })
},initialState)

export default reducer