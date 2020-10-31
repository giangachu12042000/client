import React from 'react'
import './style.scss';
import {Table, Layout, Card, Pagination, Modal} from 'antd'
import moment from 'moment';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import FormSearch from '../../../components/FormSearch/formSearch';
import FormUser from './formUser';

const {Content} = Layout;
const {confirm} = Modal;

const renderAction =(edit,remove)=>{
    return( 
        <div className="group-btn-action">
            <button type="button" className="btn btn-warning btn-sm" onClick={edit}>
                <EditOutlined />
            </button>
            <button type="button" className="btn btn-danger btn-sm" onClick={remove}>
                <DeleteOutlined />
            </button>
        </div>
    )
}

function showConfirm(id,cb){
    confirm({
        title: 'Bạn muốn xóa danh mục này?',
        content: 'Khi bạn xóa danh mục này sẽ không thể lấy lại được.',
        onOk() {
            if(cb) cb(id);
        },
        onCancel() {},
    })
}

const UserView = (props)=>{
    const {opentModel, users, removeCate} = props;
    const fillColumns =({columns = []})=>{
        const _columns = [];
        if(columns && columns.length > 0) {
            columns.forEach((col)=>{
                if(col.show){
                    if(col.type ==='date'){
                        _columns.push({
                            title:col.title,
                            dataIndex:col.id,
                            show: col.show,
                            render:((item)=>{
                               return moment(item).format("DD-MM-YYY")
                            }),
                        })
                    }else{
                        _columns.push({
                            title:col.title,
                            dataIndex:col.id,
                            show: col.show
                        })
                    }
                }
            })
            if(_columns.length > 0){
                _columns.push({
                    title: '',
                    dataIndex: '',
                    key: 'x',
                    render: ((user) =>{
                            const edit =()=> opentModel(user);
                            const remove =()=> showConfirm(user._id,removeCate);
                            return renderAction(edit,remove)
                        }
                    )
                })
            }
        }
        return _columns
    }
    return(
        <Layout>
            <Content>
                <Card>
                    <div className="row">
                        <div className="col-md-8">
                            <FormSearch  placeholder='tìm tên danh mục' name="name"  />
                        </div>
                        <div className="col-md-4">
                            <button onClick={()=> opentModel(null)} className="btn btn-success btn-sm">
                                thêm mới
                            </button>
                        </div>
                    </div>
                    <FormUser {...props} />
                    <Table
                        dataSource={users || []}
                        columns={fillColumns(props)}
                        scroll={{x: true}}
                        pagination={false}
                        rowKey="name"
                    />
                </Card>
            </Content>
        </Layout>
    )
}

export default UserView