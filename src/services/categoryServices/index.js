import {apiEndPoint} from '../../utils/constants'
import createResApi from '../../utils/common'

export default ()=>{

    const apiServer = createResApi().withConfig({baseURL:apiEndPoint});
    return{
        fetchCategory: (params) => {
           return apiServer.request({
            method: 'GET',
            url: '/api/category/fetch-all',
            params,
            responseType: 'json'
        })},
        createCategory: (data) => apiServer.request({
            method: 'POST',
            url: '/api/category/create',
            data,
            responseType: 'json'
        }),
        editcategory: (data) => apiServer.request({
            method: 'PUT',
            url: '/api/category/edit',
            params:{id:data.id},
            data,
            responseType: 'json'
        }),
        deleteCate: (param) => {
            console.log(param.id,'===>?ser')
            return apiServer.request({
            method: 'DELETE',
            url: `/api/category/delete`,
            params:{id:param.id},
            responseType: 'json'
        })},
    }
}