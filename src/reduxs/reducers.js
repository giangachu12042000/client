import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import categoryReducer from './category-redux/reducer';
export default function createReducer(injectedReducers){
    console.log(injectedReducers,'=======>injectreducer')
    const rootReducer = combineReducers({
        form: formReducer,
        category: categoryReducer,
        ...injectedReducers
    })
    return rootReducer
}