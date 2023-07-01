import React from 'react';

import {Menu, Transition} from '@headlessui/react';
import {ChevronDownIcon} from '@heroicons/react/20/solid';

import {SelectItem} from '@/components/input/dropdown/type';
import {classNames} from '@/utils/react';


type Props = {
  title: React.ReactNode,
  items: SelectItem[][],
  disabled?: boolean,
  buttonClassName?: string,
  itemsClassName?: string,
  itemClassName?: string,
};

export const Dropdown = ({title, items, disabled, buttonClassName, itemsClassName, itemClassName}: Props) => {
  return (
    <Menu as="div" className="relative inline-block w-full text-left">
      <Menu.Button className={classNames(
        'inline-flex w-full justify-center items-center gap-x-1.5 rounded-md px-2.5 py-1.5',
        'text-sm text-gray-200 disabled:bg-gray-700 hover:bg-indigo-700',
        buttonClassName,
      )} disabled={disabled}>
        {title}
        {!disabled && <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-200" aria-hidden="true"/>}
      </Menu.Button>

      <Transition
        as={React.Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className={classNames(
          'absolute right-0 z-50 mt-2 w-40 origin-top-right divide-y divide-gray-100 rounded-md max-h-48',
          'bg-gradient-to-br from-indigo-950 to-indigo-900 focus:outline-none ring-1 ring-inset ring-indigo-500',
          'overflow-auto',
          itemsClassName,
        )}>
          {items.map((itemsOfSection, sectionIdx) => (
            <div className="p-1" key={sectionIdx}>
              {itemsOfSection.map(({text, disabled: itemDisabled, onSelected}, idx) => {
                return (
                  <Menu.Item key={idx} disabled={itemDisabled}>
                    {({active, disabled}) => (
                      <a
                        className={classNames(
                          disabled ?
                            'text-slate-500' :
                            (active ? 'bg-indigo-600 text-gray-200' : 'text-slate-200'),
                          'block px-1.5 py-1 rounded-md text-sm',
                          itemClassName,
                        )}
                        onClick={onSelected}
                      >
                        {text}
                      </a>
                    )}
                  </Menu.Item>
                );
              })}
            </div>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  );
};
