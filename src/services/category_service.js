
import axios from '../utils/axiosInstance';

export const fetchCategory = async (params) => {
  try {
    const { data } = await axios.get('/api/category/fetch-all', {
      params: params
    });
    return data;
  } catch (error) {
    throw error;
  }
};

export const editCategory = async(payload) => {
  try{
    const {data} = await axios.put(`/api/category/edit/${payload.id}`,{
      data: payload
    })
    return data
  } catch(err){
    throw err
  }
};

export const createCategory = async(category) => {
  try {
    const {data} = await axios.post('/api/category/create',category)
    return data
  } catch(err){
    throw err
  }
}

export const deleteCategory = async(id) => {
  try {
    const {data} = await axios.delete('/api/category/delete',{params: {id}})
    return data
  } catch(err){
    throw err
  }
}

export const searchCategoryByName = async(name)=> {
  try {
    const {data} = await axios.get('/api/category/fetch-all', {params: {search: name}})
    return data
  } catch(err){
    throw err
  }
}