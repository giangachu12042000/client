import {apiEndPoint} from '../../utils/constants'
import createResApi from '../../utils/common'

export default ()=>{

    const apiServer = createResApi().withConfig({baseURL:apiEndPoint});
    return{
        fetchCategory: (params)=>apiServer.request({
            method: 'GET',
            url: '/api/category/fetch-all',
            params,
            responseType: 'json'
        })
    }
}