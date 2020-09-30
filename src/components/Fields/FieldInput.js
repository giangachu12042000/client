import {Form,Input} from 'antd'
import React from 'react'

const FormItem = Form.Item;

const makeFieldInput =(Component)=>({input, label, meta, config, children, ...rest})=>{
    const hasError = meta.touched && meta.invalid;
    return (
      <FormItem
        {...config}
        label={label}
        validateStatus={hasError ? "error" : "success"}
        help={hasError && meta.error}
      >
        <Component {...input} {...rest}  />
      </FormItem>
    )
}

export default makeFieldInput(Input)
