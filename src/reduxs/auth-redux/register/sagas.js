import {call, put, takeLatest} from 'redux-saga/effects';
import {createRegister} from './actions';
import {registerService} from '../../../services/auth_service';

import {failure} from './reducers';

export function* Register({payload})
{
    try{
        console.log(payload,'========>payload')
        const result = yield call(registerService,payload);
        if(result){
            console.log(result,'========>result')
        }
    }catch(err){
        yield put(failure(err))
    }
}

export default [
    takeLatest(createRegister.REQUEST, Register),
]

