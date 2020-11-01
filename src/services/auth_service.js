import axios from '../utils/axiosInstance';

export const loginService =async(user) =>{
    try{
        const {data} = await axios.post('/api/auth/login',user);
        return data
    }catch(err){
        throw err
    }
}