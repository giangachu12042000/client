import React from 'react'
import { Button, Card, Form, Modal, notification } from 'antd';
import {Field, reduxForm} from 'redux-form';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { lifecycle, pure, compose as recompose, withHandlers, withProps, withState } from 'recompose';
import {FieldInput, FieldSelect, FieldNumber} from '../../../components/Fields';
import {required} from '../../../helpers/validate'
import {FORM_KEY, userCreateForm} from '../../../reduxs/user-redux/actions'
import { intitalState } from '../../../reduxs/user-redux/reducers';

const formUser = ({modal, setModal, handleSubmit, setSaveForm , submitting, pristine, user})=>{
    let submit = handleSubmit(userCreateForm);
    let saveSubmit = (param)=>{
        setSaveForm(param)
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
                    <Form onFinish={submit}>
                        <div>
                            <Field 
                                component={FieldInput}
                                label="*Tên người dùng"
                                name="name"
                                className="required"
                                placeholder="Tên người dùng"
                                validate={[required]}
                            />
                        </div>
                        {
                            user && user._id ? null
                            :  <div>
                                    <Field 
                                        component={FieldInput}
                                        label="*Mật khẩu"
                                        name="password"
                                        className="required"
                                        placeholder="Mật khẩu"
                                        validate={[required]}
                                    />
                                </div>
                        }
                        <div>
                            <Field 
                                component={FieldInput}
                                label="*Email"
                                name="email"
                                className="required"
                                placeholder="Email"
                                validate={[required]}
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
    withState('saveForm','setSaveForm',false),
    withProps(
        ({user})=>{
            if(user){
                console.log({...user},'==>initia')
                return {
                    initialValues: {...user, id: user._id}
                }
            }
            return null
        }
    ),
    reduxForm({
        form: FORM_KEY,
        enableReinitialize: true,
        onSubmitSuccess: (result, dispatch, props)=>{
            if(result){
                notification.success({
                    message: 'Lưu danh mục thành công!'
                });
                const {saveForm, setModal, fetchUsers, reset} = props;
                if(fetchUsers) fetchUsers();
                console.log(saveForm,'===>?resuot')
                if(saveForm){
                    setModal(false)
                    reset()
                }else{
                    reset();
                }
            }
        }
    })
)(formUser)