import * as types from '../constants/actionType'

const INITIAL_STATE = {
    categories:[],
    category: null,
    pagination: {
        size: 1,
        page: 10,
        total: 0
    },
}

export default function(state=INITIAL_STATE, action){
    switch(action.type){
        case types.FETCH_CATEGORY:
            return{
                ...state,
                categories: action.data.categories,
                pagination: action.data.pagination
            }
        default:
            return state
    }
}
