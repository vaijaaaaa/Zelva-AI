import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  fullWidth?: boolean;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  size = 'md', 
  fullWidth = false, 
  className = '', 
  children, 
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center font-medium transition-all duration-300 rounded-lg focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed group";
  
  const variants = {
    // Infera: Solid White/Grey text or Orange accent
    primary: "bg-orange-500 text-black hover:bg-orange-400 border border-transparent",
    secondary: "bg-white text-black hover:bg-zinc-200 border border-transparent",
    outline: "bg-transparent border border-white/20 text-white hover:border-orange-500 hover:text-orange-500",
    ghost: "text-zinc-400 hover:text-white",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
    xl: "px-10 py-5 text-xl",
  };

  const width = fullWidth ? "w-full" : "";

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${width} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};