import {twMerge} from 'tailwind-merge';


export const classNames = (...classes: (string | undefined)[]) => {
  return twMerge(classes);
};
