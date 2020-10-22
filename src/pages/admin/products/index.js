import {createStructuredSelector,} from 'reselect'
import {withHandlers,withState, lifecycle, compose} from 'recompose'
import {connect} from 'react-redux'
import ProductV from './productV'
import queryString from 'query-string';
import _ from 'lodash';
import{fetchAllProductRequest, getCategoryByIdRequest} from '../../../reduxs/product-redux/reducer';
import{getproducts, getCategories} from '../../../reduxs/product-redux/selector';
import {message} from 'antd';

function mapDispatchToProps(dispatch){
    return{
        fetchProductAll: (params)=> dispatch(fetchAllProductRequest(params)),
        fetchCategories: ()=> dispatch(getCategoryByIdRequest())
    }
}

const mapStateToProps = createStructuredSelector({
  products: getproducts(),
  categories: getCategories()
})

const withConnect = connect(mapStateToProps, mapDispatchToProps)
const columns = [
    { title: 'Tên', id: 'name', show: true},
    { title: 'Giá', id: 'price', show: true},
    { title: 'Số lượng', id: 'quantity', show: true},
    { title: 'Ảnh', id: 'image', show: true},
    {title:"Ngày tạo", id:'date_created', show:true , type: 'date'},
    {title:"Ngày cập nhập", id:'date_updated', show:true , type: 'date'},
];

export default compose(
    withConnect,
    withState('params', 'setParams', {page:1,size:20}),
    withState('columns', 'setColumn', columns),
    withState('modal', 'setModal',false),
    withState('product','setProduct',null),
    withHandlers({
        fetchProduct:({history, location, match, setParams, fetchProductAll})=>(param)=>{
            const search = location.search;
            let params = queryString.parse(search);

            params = {
              ...params,
              ...param
            }
            if(params.page === undefined) params.page = 1;
            if(params.size === undefined) params.size = 20;
            params = _.pickBy(params, _.identity);
            const strparams = queryString.stringify(params);
            const url = match.url + '?' + strparams;
            history.push(url)
            setParams(params);
            fetchProductAll(params)
        },

        stateColumn: ({columns, setColumn})=>(data)=>{
            const col = columns.map(item=>{
                if(item.id === data.id){
                    item.show =!data.show;
                    return item
                }
            })
            return setColumn(col)
        },

        opentModel:({setModal, setProduct, fetchCategories})=>(product=null)=>{
            setProduct(product);
            setModal(true);
            fetchCategories();
        },

        removeCate:({deleteCategory, fetchCateAll, params})=>(id)=>{
            const cb = (stutus)=>{
                stutus === 'success' ? message.success('xóa thành công', 2.5) :message.error('xóa thất bại')
                fetchCateAll(params)
            }
            deleteCategory({id,cb})
        },

        searchCateByName: ({searchCateByName})=>(name)=>{
            searchCateByName(name)
        }
    }),
    lifecycle({
        componentDidMount(){
            this.props.fetchProduct()
        }
    })
)(ProductV)