import {CREATE_CATEGORY, EDIT_CATEGORY, FETCH_CATEGORY, DELETE_CATEGORY} from '../constants/actionType'
import categoryService from '../services/categoryServices'

// function editCategory(payload)
// {
//     return{
//         type:DELETE_CATEGORY,
//         payload
//     }
// }
function fetchCategory(res)
{
    let data = []
    if(res.status === 200) {
      data = res.data;
    }
    return{
        type:FETCH_CATEGORY,
        data
    }
}

// export function editcategory(id)
// {
//     return async()=>{
//         try{
//             const result = await categoryService().editcategory(id)
//             console.log(result,'===>result edit')
//         }catch(err){
//             console.log('err=======>',err)
//         }
//     }
// }

export function deleteCategory(params)
{
    return async(dispatch)=>{
        try{
            const result = await categoryService().deleteCate(params.id);
            if(result){
               const err="success";
                params.cb(err)
            }
        }catch(err){
            console.log(err,'===>?err')
        }
    }
}

export function getCreateCategory(data)
{
    return async(dispatch)=>
    {
        try{
            if(data.id){
               const result = await categoryService().editcategory(data)
               console.log(result,'========>rsul')
            }else{
                await categoryService().createCategory(data);
            }
        }catch(err){
            console.log(err,'===>?err')
        }
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