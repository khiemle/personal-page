// filepath: /Users/khle/Workspace/Projects/personal/personal-website/src/components/Button.tsx
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline';
}

const Button: React.FC<ButtonProps> = ({ variant = 'default', children, ...props }) => {
  const baseClasses = 'rounded-full transition-colors flex items-center justify-center text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5';
  const variantClasses = variant === 'outline'
    ? 'border border-solid border-gray-300 hover:bg-gray-100'
    : 'bg-blue-500 text-white hover:bg-blue-600';

  return (
    <button className={`${baseClasses} ${variantClasses}`} {...props}>
      {children}
    </button>
  );
};

export default Button;