import axios from '../utils/axiosInstance';

export const fetchUserService = async(params)=>{
    try{
        const {data} = await axios.get('/api/user/fetch-all',{
            params
        })
        return data
    }catch(err){
        throw err
    }
}

export const createUserService = async(user)=>{
    try{
        const {data} = await axios.post('/api/user/create', user)
        console.log(data,'===>data')
        return data
    }catch(err){
        throw err
    }
}

export const editUserService = async(user)=>{
    try{
        const {data} = await axios.put(`/api/user/edit/${user.id}`,user);
        return data
    }catch(err){
        throw err
    }
}

export const deleteUserSerive = async(params)=>{
    try{
        const {data} = await axios.delete(`/api/user/delete/${params}`);
        return data
    }catch(err){
        throw err
    }
}