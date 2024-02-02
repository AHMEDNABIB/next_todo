import React from "react";
import { UseFormRegister, FieldValues, UseFormSetValue } from "react-hook-form";

const SelectTag = ({
    register,
    setValue,
    name,
    label,
    options,
    className,
    value
}:{
    register: UseFormRegister<FieldValues>;
    setValue: UseFormSetValue<FieldValues>;
    name: string;
    label: string;
    options: { value: string; label: string }[];
    className?: string;
    value?: string
}) => {
    return (
        <>
            <label htmlFor={name} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                {label}
            </label>
            <select
                {...register(name)}
                onChange={(e) => setValue(name, e.target.value)}
                defaultValue={value}
                className={`${className} bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500`}
            >
                <option value="" disabled>
                    Select {label}
                </option>
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </>
    );
};

export default SelectTag;
