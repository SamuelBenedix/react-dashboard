import React from 'react';
import Icon from './Icon';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  typeButton?: 'button' | 'link'; // Define type options
  variant: 'primary' | 'secondary' | 'outline' | 'ghost' | 'default' | 'none'; // Add "default"
  iconLeft?: string;
  iconRight?: string;
  className?: string;
  styles?: React.CSSProperties;
}

const Button: React.FC<ButtonProps> = ({
  text,
  typeButton = 'button',
  iconLeft,
  iconRight,
  variant = 'none',
  className,
  ...props
}) => {
  const baseStyle =
    'text-sm font-semibold px-4 py-2 rounded-md transition-all duration-300 cursor-pointer';

  const variantsStyle: Record<ButtonProps['variant'], string> = {
    none: '', // Added default style
    default: 'bg-gray-200 text-black hover:bg-gray-300', // Added default style
    primary: 'bg-blue-500 text-white hover:bg-blue-600',
    secondary: 'bg-gray-500 text-white hover:bg-gray-600',
    outline:
      'border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white',
    ghost: 'bg-transparent text-gray-700 hover:bg-gray-100',
  };

  //  className="flex items-center justify-center gap-x-2.5 p-3 text-sm/6 font-semibold text-gray-900 hover:bg-gray-100"

  if (typeButton === 'link') {
    return (
      <a
        href="#"
        className={`${baseStyle} ${variantsStyle[variant]} ${className} `}
      >
        {iconLeft && <Icon type={iconLeft} />}
        {text}
        {iconRight && <Icon type={iconRight} />}
      </a>
    );
  }

  return (
    <button
      type="button"
      className={`${baseStyle} ${variantsStyle[variant]} ${className}`}
      {...props}
    >
      {iconLeft && <Icon type={iconLeft} />}
      {text}
      {iconRight && <Icon type={iconRight} />}
    </button>
  );
};

export default Button;
