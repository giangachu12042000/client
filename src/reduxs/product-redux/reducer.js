import {createAction, handleActions, combineActions} from 'redux-actions';

export const fetchAllProductRequest = createAction('FETCH_ALL_PRODUCT_REQUEST');
export const fetchAllProductSuccess = createAction('FETCH_ALL_PRODUCT_SUCCESS');
export const createProductRequest = createAction('CREATE_PRODUCT_REQUEST');
export const createProductSuccess = createAction('CREATE_PRODUCT_SUCCESS');
export const editProductRequest = createAction('EDIT_PRODUCT_REQUEST');
export const editProductSuccess = createAction('EDIT_PRODUCT_SUCCESS');
export const deleteProductRequest = createAction('DELETE_PRODUCT_SUCCES');
export const getCategoryByIdRequest = createAction('GET_CATEGORY_BY_ID_RQUEST');
export const getCategoryByIdSuccess = createAction('GET_CATEGORY_BY_ID_SUCCESS');
export const failure = createAction('CATEGORY_FAILURE');

export const initialState = {
    products: [],
    product: null,
    loading: false,
    categories: []
}

const reducer = handleActions({
    [combineActions(
        fetchAllProductRequest ,
        createProductRequest,
        editProductRequest,
        deleteProductRequest,
        getCategoryByIdRequest
    )]: (state)=>({
        ...state,
        loading: true
    }),
    [fetchAllProductSuccess]: (state, {payload: { products ,pagination}})=>({
        ...state,
        products: products,
        pagination: pagination,
        loading: false
    }),
    [getCategoryByIdSuccess]: (state, {payload: {categories}}) => ({
        ...state,
        categories: categories
    })
}, initialState)

export default reducer
