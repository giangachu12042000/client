import {Form,Select } from 'antd'
import React from 'react'

const FormItem = Form.Item;
const { Option } = Select;

const makeFieldInput =()=>({input,options, label, children, mode, meta, ...rest})=>{
    const hasError = meta.touched && meta.invalid;
    if(mode && !input.value) input.value = [];
    return (
      <FormItem
        label={label}
        validateStatus={hasError ? "error" : "success"}
      >
         <Select
          {...input} {...rest} mode={mode ? mode : ''}
          children={children}
          onBlur={() => input.onBlur(input.value)}
         >
          { options && options.map((option, key) => <Option key={key} value={option.value}>{option.text}</Option>) }
        </Select>
      </FormItem>
    )
}
export default makeFieldInput()