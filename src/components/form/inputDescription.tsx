import React from "react";
import { UseFormRegister, FieldValues } from "react-hook-form";

const InputDescription = ({
    register,
    required=true,
    name,
    label,
    id,
    className,
    placeholder,
    rows=4,
    value
}:{
    register:UseFormRegister<FieldValues>, 
    required?:boolean,
    name:string,
    label:string,
    id:string,
    placeholder?:string,    
    className?:string,
    rows?:number,
    value?:string
}) => {
    return (
        <>
        <label htmlFor={id} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            {label}
        </label>
        <textarea
            {...register(name, {
                required: required && `${name} is required`,
            })}
            className={`${className} bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500`}
            id={id}
            rows={rows}
            placeholder={placeholder}
            defaultValue={value}
            />
        </>
    )
}
export default InputDescription;