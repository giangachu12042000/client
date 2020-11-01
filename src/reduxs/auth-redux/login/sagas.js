import {call, put, takeLatest} from 'redux-saga/effects';
import {createLogin} from './actions';
import {loginService} from '../../../services/auth_service';
import Auth from '../../../localStorage/Auth';

import {failure} from './reducers';

export function* Login({payload})
{
    try{
        const result = yield call(loginService,payload);
        if(result){
            const token = result.data.token;
            console.log(result,'========>result')
            Auth.authenticateUser(token);
        }
    }catch(err){
        yield put(failure(err))
    }
}

export default [
    takeLatest(createLogin.REQUEST, Login),
]

