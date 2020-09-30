import {Form,Select } from 'antd'
import React from 'react'

const FormItem = Form.Item;

const makeFieldInput =(Component)=>({input, label, meta, config, ...rest})=>{
    const hasError = meta.touched && meta.invalid;
    
    return (
      <FormItem
        {...config}
        label={label}
        validateStatus={hasError ? "error" : "success"}
      >
        <Component {...input} {...rest}/>
      </FormItem>
    )
}
export default makeFieldInput(Select )