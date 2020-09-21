import axios from 'axios'
import { polyfill } from 'es6-promise'
polyfill();

class ResApiclient{
    constructor(config){
        this.client = axios.create(config)
    }
    request(options){
        return this.client.request(options)
    }
}

const createResApiClient = ()=>{
    return{
        withConfig: config=> new ResApiclient(config)
    }
}
export default createResApiClient