import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import categoryReducer from './category-redux/reducer';
import productReducer from './product-redux/reducer';
import userReducer from './user-redux/reducers';
import loginRecer from './auth-redux/login/reducers';

export default function createReducer(){
    const rootReducer = combineReducers({
        form: formReducer,
        category: categoryReducer,
        product: productReducer,
        user: userReducer,
        userLogin: loginRecer,
    })
    return rootReducer
}