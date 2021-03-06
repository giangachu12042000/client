import React from 'react'
import { Button, Card, Form, Modal, notification } from 'antd';
import {Field, reduxForm} from 'redux-form';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { lifecycle, pure, compose as recompose, withHandlers, withProps, withState } from 'recompose';
import {FieldInput} from '../../components/Fields';
import {required} from '../../helpers/validate'
import {FORM_KEY, createLogin} from '../../reduxs/auth-redux/login/actions'

const formLogin = ({handleSubmit, setSaveForm, modal})=>{
    let submit = handleSubmit(createLogin);
    console.log(modal,'==>modal')
    let saveSubmit = (param)=>{
        setSaveForm(param)
    }

    return(
            <Modal 
                visible={modal}
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
                            >đăng nhập</Button>
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
    withState('modal', 'setModal', true),
    reduxForm({
        form: FORM_KEY,
        enableReinitialize: true,
        onSubmitSuccess: (result, dispatch, props)=>{
            if(result){
                const {setModal} = props;
                notification.success({
                    message: 'Login thành công!'
                });
                setModal(false)
            }
        }
    })
)(formLogin)