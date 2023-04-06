import React from 'react';

type Props = {
  children: React.ReactNode;
  color?: string;
  fullWidth?: boolean;
  isSubmit?: boolean;
};

const Button = ({ children, color, fullWidth, isSubmit }: Props) => {
  if (color === 'primary') {
    return (
      <button
        type={isSubmit ? 'submit' : 'button'}
        className={`flex flex-row justify-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-2 focus:ring-blue-900 font-medium rounded-sm text-sm px-4 py-2.5`.concat(
          fullWidth ? ' w-full' : ''
        )}>
        {children}
      </button>
    );
  } else if (color === 'secondary') {
    return (
      <button
        type={isSubmit ? 'submit' : 'button'}
        className={`flex flex-row justify-center text-white bg-yellow-700 hover:bg-yellow-800 focus:ring-2 focus:ring-yellow-900 font-medium rounded-sm text-sm px-4 py-2.5`.concat(
          fullWidth ? ' w-full' : ''
        )}>
        {children}
      </button>
    );
  } else {
    return (
      <button
        type={isSubmit ? 'submit' : 'button'}
        className={`flex flex-row justify-center text-white bg-neutral-700 hover:bg-neutral-800 focus:ring-2 focus:ring-neutral-900 font-medium rounded-sm text-sm px-4 py-2.5`.concat(
          fullWidth ? ' w-full' : ''
        )}>
        {children}
      </button>
    );
  }
};

export default Button;
