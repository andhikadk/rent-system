import React from 'react';

type Props = {
  children: React.ReactNode;
  color?: string;
};

const Badge: React.FC<Props> = ({ children, color }: Props) => {
  if (color === 'success') {
    return (
      <span className='bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300'>
        {children}
      </span>
    );
  } else if (color === 'warning') {
    return (
      <span className='bg-yellow-100 text-yellow-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300'>
        {children}
      </span>
    );
  } else if (color === 'danger') {
    return (
      <span className='bg-red-100 text-red-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300'>
        {children}
      </span>
    );
  } else {
    return (
      <span className='bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300'>
        {children}
      </span>
    );
  }
};

export default Badge;
