import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import categoryReducer from './category-redux/reducer';
import productReducer from './product-redux/reducer';

export default function createReducer(){
    const rootReducer = combineReducers({
        form: formReducer,
        category: categoryReducer,
        product: productReducer,
    })
    return rootReducer
}