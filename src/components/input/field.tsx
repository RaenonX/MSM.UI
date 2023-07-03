import React from 'react';

import {classNames} from '@/utils/react';


type Props = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'className'> & {
  id: string,
  type: React.HTMLInputTypeAttribute,
  value: string | number | readonly string[] | undefined,
  placeholder: string,
  onChange: React.ChangeEventHandler<HTMLInputElement>,
  inputClassName?: string,
  wrapperClassName?: string,
};

export const InputField = ({
  id, type, value, placeholder, onChange, inputClassName, wrapperClassName, ...props
}: Props) => {
  return (
    <div className={classNames('flex flex-col-reverse', wrapperClassName)}>
      <input
        type={type} id={id} value={value} onChange={onChange}
        className={classNames(
          'peer w-full focus:outline-none text-sm text-gray-200 bg-transparent color-scheme-dark',
          inputClassName,
        )}
        placeholder=" "
        {...props}
      />
      <label
        htmlFor={id}
        className={classNames(
          'text-gray-400 peer-focus:text-blue-400 peer-focus:peer-invalid:text-rose-500 peer-invalid:text-red-500',
          'bg-transparent text-xs whitespace-nowrap',
        )}
      >
        {placeholder}
      </label>
    </div>
  );
};
