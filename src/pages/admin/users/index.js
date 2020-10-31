import {createStructuredSelector,} from 'reselect'
import {withHandlers,withState, lifecycle, compose} from 'recompose'
import {connect} from 'react-redux'
import queryString from 'query-string';
import _ from 'lodash';
import {message} from 'antd';
import {fetchUserRequest, deleteUserRequest} from '../../../reduxs/user-redux/reducers';
import {getUsers} from '../../../reduxs/user-redux/slector';

import UserView from './userView';
import { push } from 'react-router-redux';

function mapDispatchToProps(dispatch){
    return{
        fetchUserRequest: (params)=> dispatch(fetchUserRequest(params)),
        deleteUser: (params)=> dispatch(deleteUserRequest(params))
    }
}

const mapStateToProps = createStructuredSelector({
    users: getUsers()
})

const withConnect = connect(mapStateToProps, mapDispatchToProps)
const columns = [
    { title: 'Tên', id: 'name', show: true},
    { title: 'Email', id: 'email', show: true},
    {title:"Ngày tạo", id:'date_created', show:true , type: 'date'},
    {title:"Ngày cập nhập", id:'date_updated', show:true , type: 'date'},
];

export default compose(
    withConnect,
    withState('params', 'setParams', {page:1,size:20}),
    withState('columns', 'setColumn', columns),
    withState('modal', 'setModal',false),
    withState('user', 'setUser', null),
    withHandlers({
        fetchUsers: ({history, location, match, fetchUserRequest, setParams})=>(param)=>{
            const search = location.search;
            let params = queryString.parse(search);
            params={
                ...params,
                ...param
            }
            if(params.size ===  undefined) params.size = 20
            if(params.page === undefined) params.page = 1;
            params = _.pickBy(params, _.identity);
            const strParams = queryString.stringify(params);
            const url = match.url + '?' + strParams;
            history.push(url);
            fetchUserRequest(params);
        },
        opentModel: ({setModal, setUser})=>(user=null)=>{
            setModal(true)
            setUser(user)
        },
        removeCate:({deleteUser, fetchUserRequest, params})=>(id)=>{
            const cb =(param)=> {
                param && param==='success' ? message.success('xóa thành công',2) : message.error('xóa thất bại',2) ;
                fetchUserRequest(params)
            }
            deleteUser({id,cb})
        }

    }),
    lifecycle({
        componentDidMount(){
            this.props.fetchUsers()
        }
    })
)(UserView)