import * as types from '../constants/actionType'

const INITIAL_STATE = {
    categories:[],
    category: null
}

export default function(state=INITIAL_STATE, action){
    switch(action.type){
        case types.FETCH_CATEGORY:
            return{
                ...state,categories:action.data
            }
        default:
            return state
    }
}
