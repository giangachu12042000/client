import {Form,InputNumber} from 'antd'
import React from 'react'

const FormItem = Form.Item;

const makeFieldInput =(Component)=>({input, label, meta, config, children, ...rest})=>{
    const hasError = meta.touched && meta.invalid;
    return (
      <FormItem
        {...config}
        label={label}
        validateStatus={hasError ? "error" : "success"}
      >
        <Component {...input} {...rest} min={1} max={3000} />
      </FormItem>
    )
}
export default makeFieldInput(InputNumber)