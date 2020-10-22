import {call, put, takeLatest} from 'redux-saga/effects';
import {SubmissionError} from 'redux-form';
import * as producService from '../../services/productService';
import {productFormAction} from './action';

import {
    fetchAllProductSuccess,
    failure,
    getCategoryByIdSuccess
} from './reducer';
import { createActions } from 'redux-actions';

export function* fetchProducts({payload})
{
    try {
        const data = yield call(producService.fetchProducts,payload)
        if(data){
            const {products, pagination} = data;
            yield put(fetchAllProductSuccess({products, pagination}));
        }
    } catch(err){
        yield put(failure(err))
    }
}

export function* fetchCategories()
{
    try {
        const data = yield call(producService.fetchCategories)
        if(data){
            const {categories, pagination} = data;
            yield put(getCategoryByIdSuccess({categories, pagination}));
        }
    } catch(err){
        yield put(failure(err))
    }
}

export function* createProduct({payload})
{   
    try {
        let result
        if(payload.id){
            result = yield call(producService.editproduct,payload);
        }else{
            result = yield call(producService.createproduct,payload);
        }
        if(result){
            yield put(productFormAction.success())
        }
    } catch(err){
        yield put(failure(err))
    }
}

export function* deleteCategory({payload})
{
    try {
        const {id,cb} = payload;
        const result = yield call(producService.deleteproduct,id)
        if(result){
            cb('success')
        }
    } catch(err) {
        yield put(failure(err))
    }
}

// export function* searchProductByName({payload})
// {
//     try {
//         console.log(payload,'=====>result saga')
//         const result = yield call(producService.searchproductByName,payload)
//         if(result){
//             const {pagination, categories} = result;
//             yield put(searchCategoryByName({categories, pagination}))
//         }
//     } catch(err){
//         console.log(err,'==========err====>?search')
//     }
// }

export default [
    takeLatest(productFormAction.REQUEST, createProduct),
    takeLatest('FETCH_ALL_PRODUCT_REQUEST', fetchProducts),
    takeLatest('GET_CATEGORY_BY_ID_RQUEST', fetchCategories),
    // takeLatest('SEARCH_CATEGORY_BY_NAME_REQUEST',searchCategoryByName)
]
