import React from 'react';

type Props = {
  children: React.ReactNode;
  color?: string;
};

const Badge: React.FC<Props> = ({ children, color }: Props) => {
  if (color === 'primary') {
    return (
      <span className='bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300'>
        {children}
      </span>
    );
  } else if (color === 'secondary') {
    return (
      <span className='bg-amber-100 text-amber-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-amber-900 dark:text-amber-300'>
        {children}
      </span>
    );
  } else {
    return (
      <span className='bg-neutral-100 text-neutral-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-neutral-900 dark:text-neutral-300'>
        {children}
      </span>
    );
  }
};

export default Badge;
