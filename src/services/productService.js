
import axios from '../utils/axiosInstance';

export const fetchProducts = async (params) => {
  try {
    const { data } = await axios.get('/api/product/fetch-all', {
      params: params
    });
    return data;
  } catch (error) {
    throw error;
  }
};

export const editproduct = async(param) => {
  try{
    const {data} = await axios.put(`/api/product/edit/${param.id}`,{
      data: param
    })
    console.log(data,'=====>serviece')
    return data
  } catch(err){
    throw err
  }
};

export const createproduct = async(product) => {
  console.log(product,'==s=>')
  try {
    const {data} = await axios.post('/api/product/create',product)
    console.log(data,'===>dataser')
    return data
  } catch(err){
    throw err
  }
}

export const fetchCategories = async()=>{
  try{
    const {data} = await axios.get('/api/product/get-category')
    return data
  } catch(err){
    console.log(err,'===>er')
  }
}

export const deleteproduct = async(id) => {
  try {
    const {data} = await axios.delete('/api/product/delete',{params: {id}})
    return data
  } catch(err){
    throw err
  }
}

export const searchproductByName = async(name)=> {
  try {
    const {data} = await axios.get('/api/product/fetch-all', {params: {search: name}})
    return data
  } catch(err){
    throw err
  }
}