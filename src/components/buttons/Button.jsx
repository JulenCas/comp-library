import { cn } from '@/utils/cn';
import styles from './Button.module.css';

export const Button = ({
  children,
  tone = 'primary',
  variant = 'solid',
  loading = false,
  className,
  disabled,
  ...props
}) => (
  <button
    className={cn(styles.button, styles[tone], styles[variant], className)}
    disabled={disabled || loading}
    {...props}
  >
    {loading ? 'Cargando...' : children}
  </button>
);
