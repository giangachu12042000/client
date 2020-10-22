
import React from 'react'
import { Button, Card, Form, Modal, notification } from 'antd';
import {Field, reduxForm} from 'redux-form';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { lifecycle, pure, compose as recompose, withHandlers, withProps, withState } from 'recompose';
import {FieldInput, FieldSelect, FieldNumber} from '../../../components/Fields';
import {required} from '../../../helpers/validate'
import {FORM_KEY, productFormAction} from '../../../reduxs/product-redux/action'

const ProductForm =({modal, setModal, handleSubmit, categories, submitting, pristine,opentModel,setSaveForm})=>{

    
    let cateSelects  = categories && categories.length > 0 ? categories.map(item=>{
        return {
           value: item._id,
           text: item.name 
        }
    }) : []
    
    const saveSubmit = (save)=>{
        setSaveForm(save)
    }
    return(
        <Modal
            visible={modal}
            onOk={()=>setModal(false)}
            style={{ top: 20 }}
            width={'720px'}
            footer={null}
            onCancel={()=>setModal(false)}
        >
            <Card>
                <Form onFinish={handleSubmit(productFormAction)}>
                    <div>
                        <Field 
                            component={FieldInput}
                            label="*Tên sảm phẩm"
                            name="name"
                            className="required"
                            placeholder="Nhập tên sảm phẩm"
                            validate={[required]}
                        />
                    </div>
                    <div>
                        <Field 
                            component={FieldNumber}
                            label="*Gía sản phẩm"
                            name="price"
                            className="required"
                            placeholder="Nhập tên sảm phẩm"
                            validate={[required]}
                        />
                    </div>
                    <div>
                        <Field 
                            component={FieldNumber}
                            label="*Số lượng"
                            name="quantity"
                            className="required"
                            placeholder="Nhập số lượng sản phẩm"
                            validate={[required]}
                        />
                    </div>
                    <div>
                        <Field 
                            component={FieldSelect}
                            label="*Tên danh mục"
                            name="cate_id"
                            className="select"
                            validate={[required]}
                            options={cateSelects}
                        />
                    </div>

                    <div className="text-center">
                        <Button 
                            type="danger"
                            htmlType="submit"
                            onClick={()=>saveSubmit(true)}

                        >Lưu và đóng</Button>
                        <Button
                            type="primary"
                            htmlType="submit"
                            style={{ marginLeft: 8 }}
                            disabled={pristine || submitting}
                            onClick={()=>saveSubmit(false)}
                        > Lưu và tạo mới </Button>
                    </div>
                </Form>
            </Card>
        </Modal>
    )
}

export function mapDispatchToProps(dispatch){
    return{
    }
}

const mapStateToProps = createStructuredSelector({

})
const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default recompose(
    withConnect,
    withProps(
        ({product}) => {
          if (product && product._id) {
            return { initialValues: { ...product, id: product._id } };
          }
          return { initialValues: null };
        }
    ),
    withState('saveForm','setSaveForm',false),
    withHandlers({

    }),
    reduxForm({
        form: FORM_KEY,
        enableReinitialize: true,
        onSubmitSuccess: (result, dispatch, props)=>{
            if(result){
                notification.success({
                    message: 'Lưu danh mục thành công!'
                });
                const {saveForm, setModal, fetchProduct, reset} = props;

                if(fetchProduct) fetchProduct();
                
                if(saveForm){
                    setModal(false)
                    reset()
                }else{
                    reset();
                }
            }
        }
      })
)(ProductForm)


