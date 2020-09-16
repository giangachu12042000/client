import {CREATE_CATEGORY, EDIT_CATEGORY, } from '../constants/actionType'

function createCategory(payload)
{
    return{
        type:CREATE_CATEGORY,
        payload
    }
}

export function getCreateCategory(data)
{
    return async(dispatch)=>
    {
        console.log(data,'===>?data')
    }
}