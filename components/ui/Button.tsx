import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick: (event?: React.MouseEvent<HTMLButtonElement>) => void;
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  type = 'button',
}) => {
  const baseClasses = 'font-bold py-2 px-4 rounded-full shadow-md transform transition-transform duration-150 focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variantClasses = {
    primary: 'bg-brand-pink text-white hover:bg-opacity-90 active:scale-95 focus:ring-brand-pink',
    secondary: 'bg-gray-200 text-dark-text hover:bg-gray-300 active:scale-95 focus:ring-gray-400',
  };

  const sizeClasses = {
    sm: 'text-sm py-1 px-3',
    md: 'text-base py-2 px-6',
    lg: 'text-lg py-3 px-8',
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;