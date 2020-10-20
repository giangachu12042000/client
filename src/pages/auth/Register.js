import {Form, Layout, Modal} from 'antd';
import {Field} from 'redux-form';
import { withHandlers, compose as recompose } from 'recompose';
import {FieldInput} from '../../components/Fields';
import {required} from '../../helpers/validate';

const{Content} = Layout;
const {confirm} = Modal;

const Register =()=>{

    return(
        <Layout>
            <Modal>
                <Form>
                    <Form.Item>
                        <Field
                            component={FieldInput}
                            lable="*user name"
                            name="name"
                            placeholder="Nhập tên danh mục"
                            validate={[required]}
                        />
                    </Form.Item>
                </Form>
            </Modal>
        </Layout>
    )
}



export default recompose({
    withHandlers({

    })
}, Register)