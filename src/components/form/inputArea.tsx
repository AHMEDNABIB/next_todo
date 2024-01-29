import React from 'react'
import { FieldValues, UseFormRegister } from 'react-hook-form'

const InputArea = ({ 
    register,
  required,
  name,
  label,
  type,
  placeholder,
  disabled,
  id,
  className
}:{
    register:UseFormRegister<FieldValues>, 
    required?:boolean,
    name:string,
    label:string,
    type?:string,
    placeholder:string,
    disabled?:boolean,
    id:string,
    className?:string,
}) => {
  return (
    <>
    <label htmlFor={id} className="mt-3">
      {label}
    </label>
    <input
      {...register(name, {
        required: required ? `${name} is required`  : false
      })}
      className={`${className} block text-gray-700 text-sm font-bold mb-2 w-full`}
      type={type}
      id={id}
      placeholder={placeholder}
      disabled={disabled}
    />
  </>
  )
}

InputArea.defaultValue={
    required:true,
    disable:false,
    type:'text'
}

export default InputArea