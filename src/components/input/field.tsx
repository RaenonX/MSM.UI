import React from 'react';

import {classNames} from '@/utils/react';


type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  id: string,
  type: React.HTMLInputTypeAttribute,
  value: string | number | readonly string[] | undefined,
  placeholder: string,
  onChange: React.ChangeEventHandler<HTMLInputElement>,
};

export const InputField = ({id, type, value, placeholder, onChange, className, ...props}: Props) => {
  return (
    <div className="relative -bottom-0.5">
      <input
        type={type} id={id} value={value} onChange={onChange}
        className={classNames(
          'border-1 peer block w-full appearance-none rounded-lg',
          'focus:border-blue-600 focus:outline-none focus:ring-0',
          'px-1.5 pb-0 pt-2.5 text-sm text-gray-200 bg-transparent color-scheme-dark',
          className,
        )}
        placeholder=" "
        {...props}
      />
      <label
        htmlFor={id}
        className={classNames(
          'absolute left-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 duration-300',
          'peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2',
          'peer-placeholder-shown:scale-100',
          'peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-1',
          'peer-focus:text-blue-400 peer-focus:peer-invalid:text-rose-500 peer-invalid:text-red-500',
          'px-1 bg-transparent text-md text-gray-400 whitespace-nowrap',
        )}
      >
        {placeholder}
      </label>
    </div>
  );
};
