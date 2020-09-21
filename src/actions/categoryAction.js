import {CREATE_CATEGORY, EDIT_CATEGORY, FETCH_CATEGORY} from '../constants/actionType'
import categoryService from '../services/categoryServices'

function createCategory(payload)
{
    return{
        type:CREATE_CATEGORY,
        payload
    }
}
function fetchCategory(res)
{
    let data = []
    if(res.status === 200) {
      data = res.data.categories;
    }
    return{
        type:FETCH_CATEGORY,
        data
    }
}

export function getCreateCategory(data)
{
    return async(dispatch)=>
    {
        console.log(data,'===>?data')
    }
}

export function getFetchCate(params){
    return async(dispatch)=>
    {
        try{
            const data = await categoryService().fetchCategory(params)
            dispatch(fetchCategory(data))
        }
        catch(err){
            console.log(err,'===>?err')

        }
    }
}