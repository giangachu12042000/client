
import React from 'react'
import {getCreateCategory} from '../../../actions/categoryAction';
import { Button, Card, Form, Modal, notification } from 'antd';
import {Field, reduxForm} from 'redux-form';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { lifecycle, pure, compose as recompose, withHandlers, withProps, withState } from 'recompose';
import {FieldInput} from '../../../components/Fields';
import {required} from '../../../helpers/validate'
import {FORM_KEY, categoryFormAction} from '../../../reduxs/category-redux/action'

const CateForm =({modal, setModal, handleSubmit, submitting, pristine,opentModel,setSaveForm})=>{
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
                <Form onFinish={handleSubmit(categoryFormAction)}>
                    <Form.Item>
                        <Field 
                            component={FieldInput}
                            label="*Tên danh mục"
                            name="name"
                            className="required"
                            placeholder="Nhập tên danh mục"
                            validate={[required]}
                        />
                    </Form.Item>
                    <Form.Item className="text-center">
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
                    </Form.Item>
                </Form>
            </Card>
        </Modal>
    )
}

export function mapDispatchToProps(dispatch){
    return{
        createCate: data=> dispatch(getCreateCategory(data))
    }
}

const mapStateToProps = createStructuredSelector({

})
const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default recompose(
    withConnect,
    withProps(
        ({category}) => {
          if (category && category._id) {
            return { initialValues: { ...category, id: category._id } };
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
                const {saveForm, setModal, fetchCategory, reset} = props;

                if(fetchCategory) fetchCategory();
                
                if(saveForm){
                    setModal(false)
                    reset()
                }else{
                    reset();
                }
            }
        }
      })
)(CateForm)


