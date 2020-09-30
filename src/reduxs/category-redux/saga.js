import {call, put, takeLatest} from 'redux-saga/effects';
import {SubmissionError} from 'redux-form';
import * as categoryServices from '../../services/category_service';
import {categoryFormAction} from './action';

import {
    fecthCategoryListSuccess,
    createCategorySuccess,
    failure
} from './reducer';
import { createActions } from 'redux-actions';

export function* fetchCategory(params)
{
    try {
        const data = yield call(categoryServices.fetchCategory,params.payload)
        if(data){
            const {categories, pagination} = data;
            yield put(fecthCategoryListSuccess({categories, pagination}));
        }
    } catch(err){
        yield put(failure(err))
    }
}

export function* createCategory(payload)
{   
    console.log(payload,'=============>payload')
    try {
        let result
        if(payload.id){
            result = yield call(categoryServices.editCategory,payload);
        }else{
            result = yield call(categoryServices.createCategory,payload);
        }
        if(result){
            yield put(categoryFormAction.success())
        }
    } catch(err){
        yield put(failure(err))
    }
}

export function* deleteCategory({payload})
{
    try {
        const {id,cb} = payload;
        const result = yield call(categoryServices.deleteCategory,id)
        if(result){
            cb('success')
        }
    } catch(err) {
        yield put(failure(err))
    }
}

export default [
    takeLatest(categoryFormAction.REQUEST, createCategory),
    takeLatest('FECTH_CATEGORY_LIST_REQUEST', fetchCategory),
    takeLatest('DELETE_CATEGORY_REQUEST', deleteCategory)
]
