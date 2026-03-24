import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { cn } from '@/utils/cn';
import type { ComponentVariant } from '@/types/ui';
import styles from './Button.module.css';

type Tone = 'primary' | 'secondary' | 'tertiary';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  tone?: Tone;
  variant?: ComponentVariant;
  loading?: boolean;
}

export const Button = ({
  children,
  tone = 'primary',
  variant = 'solid',
  loading,
  className,
  disabled,
  ...props
}: ButtonProps) => (
  <button
    className={cn(styles.button, styles[tone], styles[variant], className)}
    disabled={disabled || loading}
    {...props}
  >
    {loading ? 'Cargando...' : children}
  </button>
);
