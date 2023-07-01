import React from 'react';


type Props = {
  className?: string,
};

export const FullWidthRow = React.forwardRef<HTMLDivElement, React.PropsWithChildren<Props>>((
  {className, children},
  ref,
) => {
  return (
    <div className={`flex w-full flex-row gap-2 ${className || ''}`} ref={ref}>
      {children}
    </div>
  );
});

FullWidthRow.displayName = 'FullWidthRow';
