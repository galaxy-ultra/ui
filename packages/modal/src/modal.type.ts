export type ModalSize = 'sm' | 'md' | 'lg' | 'xl';

export interface ModalProps {
  show: boolean;
  onClose: () => void;
  header?: JSX.Element | string;
  footer?: JSX.Element | string;
  showHeader?: boolean;
  showFooter?: boolean;
  closeButton?: boolean;
  size?: ModalSize;
  zIndex?: number;
  position?: 'center' | 'top';
  onConfirm?: () => void;
  closeOutside?: boolean;
  cancelTitle?: string;
  confirmTitle?: string;
}

export interface ModalHeaderProps {
  onClose: () => void;
  header?: JSX.Element | string;
  closeButton?: boolean;
  showHeader?: boolean;
}

export interface ModalFooterProps {
  footer?: JSX.Element | string;
  onConfirm?: () => void;
  onClose?: () => void;
  showFooter?: boolean;
  cancelTitle?: string;
  confirmTitle?: string;
}
