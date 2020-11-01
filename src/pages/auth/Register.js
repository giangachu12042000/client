import React from 'react'
import { Button, Card, Form, Modal, notification } from 'antd';
import {Field, reduxForm} from 'redux-form';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { lifecycle, pure, compose as recompose, withHandlers, withProps, withState } from 'recompose';
import {FieldInput} from '../../components/Fields';
import {required} from '../../helpers/validate'
import {FORM_KEY, createRegister} from '../../reduxs/auth-redux/register/actions'

const formLogin = ({handleSubmit, setSaveForm})=>{
    let submit = handleSubmit(createRegister);
    let saveSubmit = (param)=>{
        setSaveForm(param)
    }

    return(
            <Modal 
                visible={true}
                // onOk={()=>setModal(false)}
                style={{ top: 20 }}
                width={'720px'}
                footer={null}
                // onCancel={()=>setModal(false)}
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
                        <div>
                            <Field 
                                component={FieldInput}
                                label="*Mật khẩu"
                                name="password"
                                className="required"
                                placeholder="Mật khẩu"
                                validate={[required]}
                            />
                        </div>
                        <div className="text-center">
                            <Button 
                                type="danger"
                                htmlType="submit"
                                onClick={()=>saveSubmit(true)}
                            >đăng ký</Button>
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
    reduxForm({
        form: FORM_KEY,
        enableReinitialize: true,
        onSubmitSuccess: (result, dispatch, props)=>{
            if(result){
                notification.success({
                    message: 'Đăng ký thành công!'
                });
            }
        }
    })
)(formLogin)