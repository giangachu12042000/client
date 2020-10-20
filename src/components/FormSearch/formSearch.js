import React from 'react'
import {FieldInput} from '../../components/Fields';
import {Field, reduxForm, formValueSelector} from 'redux-form';
import {compose as recompose, } from 'recompose'
// import {Form} from 'antd';
const FormSearch = ({placeholder, name, search})=>{

    return(
        <div>
            <Field
                component={FieldInput} placeholder={placeholder} name={name}
                onChange={(event)=> {
                    return search(event.target.value)
                }}
            />
        </div>
    )
}

export default recompose(
    reduxForm({
        form: 'FORM_SEARCH'
    })
)(FormSearch)
