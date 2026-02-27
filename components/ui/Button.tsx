import React from 'react';
import Link from 'next/link';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit';
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  href,
  onClick,
  className = '',
  type = 'button',
}) => {
  const baseStyles = 'px-6 py-3 rounded-lg font-medium transition-all duration-300 inline-flex items-center gap-2';

  const variantStyles = {
    primary: 'bg-white text-gray-900 hover:bg-gray-100 hover:shadow-lg hover:shadow-white/20',
    secondary: 'bg-gray-800 text-white border border-gray-700 hover:bg-gray-700 hover:border-gray-600',
    ghost: 'text-gray-300 hover:text-white hover:bg-gray-800/50',
  };

  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedClassName}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={combinedClassName}>
      {children}
    </button>
  );
};
