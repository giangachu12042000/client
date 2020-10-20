import React from 'react'
import './stype.scss'
import {Table, Layout, Card, Pagination, Modal} from 'antd'
import moment from 'moment';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import CateForm from './cateForm';
import FormSearch from '../../../components/FormSearch/formSearch'

const{Content} = Layout;
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
const CategoryView =(props)=>{
    const {categories, opentModel, removeCate, fetchCategory, params , pagination, searchCateByName} = props
    
    const data = categories && categories.length > 0 ? categories : [];
    const size = params.size && Number(params.size) > 0 ? Number(params.size) : 10;
    const page = params.page && Number(params.page) > 0 ? Number(params.page) : 1;
    const total = pagination && pagination.total && Number(pagination.total) > 0 ? Number(pagination.total) : 1;
    
    const fillColun = ({columns=[]}) => {
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
                    render: ((category) =>{
                            const edit =()=> opentModel(category);
                            const remove =()=> showConfirm(category._id,removeCate);
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
            <div className="row">
                <div className="col-md-12 ">
                    <Content>
                        <Card>
                            <div className="row">
                                <div className="col-md-8">
                                    <FormSearch  placeholder='tìm tên danh mục' name="name" search={searchCateByName} />
                                </div>
                                <div className="col-md-4">
                                    <button onClick={()=> opentModel(null)} className="btn btn-success btn-sm">
                                        thêm mới
                                    </button>
                                </div>
                            </div>
                            <CateForm {...props} />
                            <Table
                                dataSource={data || []}
                                columns={fillColun(props) }
                                scroll={{x: true}}
                                pagination={false}
                                rowKey="name"
                            />
                            <div className="col-md-6 text-right">
                                <Pagination
                                    current={page || 1} pageSize={ size || 10 } total={total || 0}
                                    onChange={(page) => fetchCategory({ page: page })} 
                                />
                            </div>
                        </Card>
                    </Content>
                </div>
            </div>
        </Layout>
    )
}

export default CategoryView