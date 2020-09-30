
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

export const editCategory = async(param) => {
  try{
    const {data} = await axios.put('/api/category/edit',{
      params:{id:param.id},
      data: param
    })
    return data
  } catch(err){
    throw err
  }
};

export const createCategory = async(category) => {
  try {
    const {data} = await axios.post('/api/category/create',category.payload)
    return data
  } catch(err){
    throw err
  }
}

export const deleteCategory = async(id) => {
  try {
    const {data} = await axios.delete('/api/category/delete',{params:{id}})
    return data
  } catch(err){
    throw err
  }
}