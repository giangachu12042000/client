import {call, put, takeLatest} from 'redux-saga/effects';
import {userCreateForm, } from './actions';
import {fetchUserService, createUserService, editUserService, deleteUserSerive} from '../../services/user_serviec';

import{
    fetchUserSuccess,
    createUserSuccess,
    editUserSuccess,
    deleteUserSuccess,
    failure,
} from './reducers';

export function* fectchUser({payload})
{
    console.log(payload,'==>')
    try{
        const data = yield call(fetchUserService,payload);
        if(data){
            yield put(fetchUserSuccess(data))
        }
    }catch(err){
        yield put(failure(err))
    }
}

export function* createUser({payload})
{
    try{
        let result ;
        if(payload.id){
            result = yield call(editUserService,payload);
            if(result){
                yield put(editUserSuccess)
            }
        }else{
            result = yield call(createUserService,payload)
            if(result){
                yield put(userCreateForm.success());
                yield put(createUserSuccess)
            }
        }
        return result
    }catch(err){
        yield put(failure(err))
    }
}

export function* deleteUSer({payload})
{
    try{
        const {id,cb} = payload;
        const result = yield call(deleteUserSerive,id);
        if(result){
            cb('success')
            yield put(deleteUserSuccess)
        }
        return result
    }catch(err){
        yield put(failure(err))
    }
}

export default [
    takeLatest(userCreateForm.REQUEST, createUser),
    takeLatest('FETCH_USER_REQUEST', fectchUser),
    takeLatest('DELETE_USER_REQUEST', deleteUSer)
];