import React from 'react';
import type { ButtonHTMLAttributes, ReactNode } from 'react';
import styles from './styles.module.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
  children?: ReactNode;
  className?: string;
}

const Button = ({
  children,
  variant = 'primary',
  size = 'medium',
  className = '',
  ...props
}: ButtonProps) => {
  return (
    <button
      className={`${styles.button} ${styles[variant]} ${styles[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button; 