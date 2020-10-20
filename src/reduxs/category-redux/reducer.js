import {createAction, handleActions, combineActions } from 'redux-actions'
export const fecthCategoryListRequest = createAction('FECTH_CATEGORY_LIST_REQUEST')
export const fecthCategoryListSuccess = createAction('FECT_CATEGORY_LIST_SUCCESS')
export const createCategoryRequest = createAction('CREATE_CATEGORY_REQUEST')
export const editCategoryRequest = createAction('EDIT_CATEGORY_REQUEST')
export const editCategorySuccess = createAction('EDIT_CATEGORY_SUCCESS')
export const deleteCategoryRequest = createAction('DELETE_CATEGORY_REQUEST')
export const deleteCategorySuccess = createAction('DELETE_CATEGORY_SUCCESS')
export const searchCategoryByNameRequest = createAction('SEARCH_CATEGORY_BY_NAME_REQUEST')
export const searchCategoryByNameSuccess = createAction('SEARCH_CATEGORY_BY_NAME_SUCCESS')
export const failure = createAction('CATEGORY_FAILURE')

export const intinialState= {
    categories: [],
    pagination: {
        size: 1,
        page: 50,
        total: 0
    },
    loading: false,
    error: null,
}

const reducer = handleActions({
    [combineActions(
            fecthCategoryListRequest, 
            createCategoryRequest,
            editCategoryRequest,
            deleteCategoryRequest,
            searchCategoryByNameRequest
        )]: (state)=>({
        ...state,
        loading:true
    }),
    [fecthCategoryListSuccess]: (state, {payload: {categories, pagination}})=>({
            ...state,
            categories: categories,
            pagination: pagination,
            loading: false
    }),
    [combineActions(
        // createCategorySuccess,
        editCategorySuccess,
        deleteCategorySuccess
    )]: (state)=>({
        ...state,
        loading: true
    }),
    [searchCategoryByNameSuccess]: (state,{payload: {categories, pagination}})=>({
        ...state,
        categories: categories,
        pagination: pagination,
        loading: false
    }),
    [failure]: (state, action)=>({
        ...state,
        loading: true,
        error: action.error
    })
},intinialState)

export default reducer