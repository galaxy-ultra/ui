export type AlertType = 'primary' | 'success' | 'danger' | 'warning' | 'light' | 'dark' | 'info';

export type AlertSize = 'sm' | 'md' | 'lg' | 'xl' | 'full';

export interface AlertProps {
  type?: AlertType;
  size?: AlertSize;
  label?: string;
  content?: string | JSX.Element;
  icon?: JSX.Element;
  closeIcon?: boolean;
  onClose?: () => void;
}
