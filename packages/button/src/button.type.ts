import { ButtonHTMLAttributes } from 'react';

export type ButtonType = 'primary' | 'success' | 'danger' | 'warning' | 'cancel' | 'dark' | 'info';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonType;
}
