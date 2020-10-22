import {all} from 'redux-saga/effects';
import categorySaga from './category-redux/saga';
import productSaga from './product-redux/saga';
import userSaga from './user-redux/sagas';

export default function* rootSaga(){
    yield all([
        ...categorySaga,
        ...productSaga,
        ...userSaga,
    ])
}